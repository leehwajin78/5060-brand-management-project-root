import * as React from "react"
import { cn } from "@/lib/utils"

export interface SectionHeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  title: string
  subtitle?: string
}

export function SectionHeading({ title, subtitle, className, ...props }: SectionHeadingProps) {
  return (
    <div className={cn("flex flex-col gap-2 mb-8 md:mb-12", className)}>
      <h2 
        className="text-2xl md:text-3xl font-bold tracking-tight text-foreground"
        {...props}
      >
        {title}
      </h2>
      {subtitle && (
        <p className="text-base md:text-lg text-muted-foreground">
          {subtitle}
        </p>
      )}
    </div>
  )
}
