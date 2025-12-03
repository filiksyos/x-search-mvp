import { tool } from 'ai'
import { z } from 'zod'
import { searchTweets } from './search-tweets'
import type { CoreToolMessage } from 'ai'

interface ToolsParams {
  writer: any
  messages: any[]
}

export function tools({ writer, messages }: ToolsParams) {
  return {
    search_tweets: tool({
      description: 'Search for tweets on X/Twitter using Exa API. Use this tool when users ask to find tweets or search X content.',
      parameters: z.object({
        query: z.string().describe('The search query for tweets (e.g., "AI machine learning", "latest updates")'),
        type: z.enum(['auto', 'keyword']).optional().describe('Search type - "auto" for automatic, "keyword" for exact keywords'),
      }),
      execute: async ({ query, type = 'auto' }) => {
        console.log('🔍 Searching tweets for query:', query)
        try {
          const results = await searchTweets(query, type)
          console.log(`✅ Found ${results.results.length} tweets`)
          return results
        } catch (error) {
          console.error('❌ Tweet search error:', error)
          throw error
        }
      },
    }),
  }
}
