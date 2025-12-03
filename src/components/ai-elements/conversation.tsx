'use client'

import { useRef, useEffect } from 'react'
import { useStickToBottom } from 'use-stick-to-bottom'
import { Button } from '@/components/ui/button'
import { ArrowDown } from 'lucide-react'

interface ConversationProps {
  children: React.ReactNode
  className?: string
}

export function Conversation({
  children,
  className = '',
}: ConversationProps) {
  return (
    <div className={`flex flex-col overflow-hidden ${className}`}>
      {children}
    </div>
  )
}

export function ConversationContent({
  children,
  className = '',
}: ConversationProps) {
  const ref = useRef<HTMLDivElement>(null)
  const { isAtBottom, scrollToBottom } = useStickToBottom(ref)

  useEffect(() => {
    scrollToBottom()
  }, [children, scrollToBottom])

  return (
    <div
      ref={ref}
      className={`overflow-y-auto flex-1 p-4 ${className}`}
    >
      {children}
    </div>
  )
}

export function ConversationScrollButton() {
  const ref = useRef<HTMLDivElement>(null)
  const { isAtBottom, scrollToBottom } = useStickToBottom(ref)

  if (isAtBottom) return null

  return (
    <div className="flex justify-center p-2">
      <Button
        onClick={() => scrollToBottom()}
        size="sm"
        variant="outline"
        className="rounded-full"
      >
        <ArrowDown className="w-4 h-4" />
      </Button>
    </div>
  )
}
