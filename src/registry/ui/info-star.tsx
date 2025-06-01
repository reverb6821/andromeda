// components/andromeda/InfoStar/InfoStar.tsx

import * as React from 'react'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip'
import { cn } from '@/lib/utils'

export interface InfoStarProps {
  content: React.ReactNode
  children: React.ReactNode
  side?: 'top' | 'right' | 'bottom' | 'left'
  align?: 'center' | 'start' | 'end'
  className?: string
}

export const InfoStar = ({
  content,
  children,
  side = 'top',
  align = 'center',
  className,
}: InfoStarProps) => {
  return (
    <TooltipProvider>
      <Tooltip delayDuration={100}>
        <TooltipTrigger asChild>
          {children}
        </TooltipTrigger>
        <TooltipContent
          side={side}
          align={align}
          className={cn(
            'z-50 rounded-md bg-black px-3 py-2 text-sm text-white shadow-xl',
            'data-[state=delayed-open]:animate-fade-in',
            className
          )}
        >
          {content}
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}
