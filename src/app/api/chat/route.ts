import type { ChatUIMessage } from '@/lib/chat-context'
import {
  convertToModelMessages,
  createUIMessageStream,
  createUIMessageStreamResponse,
  streamText,
} from 'ai'
import { getOpenRouterModel, getModelId } from '@/ai/openrouter'
import { tools } from '@/ai/tools'
import prompt from './prompt.md'

interface BodyData {
  messages: ChatUIMessage[]
  modelId?: string
}

export async function POST(req: Request) {
  let messages: ChatUIMessage[], modelId: string | undefined;
  
  try {
    const body = await req.text()
    console.log('📋 Raw request body length:', body?.length || 0)
    
    if (!body) {
      console.error('❌ Empty request body received')
      return Response.json(
        { error: 'BAD_REQUEST', message: 'Empty request body' }, 
        { status: 400 }
      )
    }
    
    const parsed = JSON.parse(body) as BodyData
    messages = parsed.messages
    modelId = parsed.modelId
    
    console.log('✅ Chat request received')
  } catch (error) {
    console.error('❌ JSON parsing error:', error)
    return Response.json(
      { error: 'BAD_REQUEST', message: 'Invalid JSON in request body' }, 
      { status: 400 }
    )
  }
  
  const actualModelId = modelId || getModelId()
  const model = getOpenRouterModel()

  return createUIMessageStreamResponse({
    stream: createUIMessageStream({
      originalMessages: messages,
      execute: ({ writer }) => {
        const result = streamText({
          model,
          system: prompt,
          messages: convertToModelMessages(messages),
          tools: tools({ writer, messages }),
          onError: (error) => {
            console.error('Error communicating with AI')
            console.error(JSON.stringify(error, null, 2))
          },
        })
        result.consumeStream()
        writer.merge(
          result.toUIMessageStream({
            sendReasoning: false,
            sendStart: false,
            messageMetadata: () => ({
              model: actualModelId,
            }),
          })
        )
      },
    }),
  })
}
