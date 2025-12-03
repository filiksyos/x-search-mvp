'use client'

import type { ChatUIMessage } from '@/lib/chat-context'
import ReactMarkdown from 'react-markdown'
import { UserIcon, Bot } from 'lucide-react'

interface MessageProps {
  message: ChatUIMessage
}

export function Message({ message }: MessageProps) {
  const isUser = message.role === 'user'

  return (
    <div className={`flex gap-3 ${isUser ? 'justify-end' : 'justify-start'}`}>
      <div
        className={`max-w-xs lg:max-w-md xl:max-w-lg px-4 py-2 rounded-lg ${
          isUser
            ? 'bg-blue-500 text-white rounded-br-none'
            : 'bg-card border border-border rounded-bl-none'
        }`}
      >
        <div className="flex items-start gap-2">
          {!isUser && <Bot className="w-4 h-4 mt-1 flex-shrink-0" />}
          <div className="prose prose-sm dark:prose-invert max-w-none">
            <ReactMarkdown
              components={{
                p: ({ children }) => <p className="text-sm">{children}</p>,
                a: ({ href, children }) => (
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:underline"
                  >
                    {children}
                  </a>
                ),
                code: ({ children }) => (
                  <code className="bg-muted px-1 py-0.5 rounded text-xs font-mono">
                    {children}
                  </code>
                ),
              }}
            >
              {message.text}
            </ReactMarkdown>
          </div>
          {isUser && <UserIcon className="w-4 h-4 mt-1 flex-shrink-0" />}
        </div>
      </div>
    </div>
  )
}
