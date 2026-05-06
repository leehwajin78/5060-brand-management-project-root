import * as React from "react"
import { cn } from "@/lib/utils"

export interface ValueCardProps extends React.HTMLAttributes<HTMLDivElement> {
  icon: React.ReactNode
  title: string
  description: string
}

export function ValueCard({ icon, title, description, className, ...props }: ValueCardProps) {
  return (
    <div 
      className={cn(
        "flex flex-col items-start p-6 bg-card border rounded-xl shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-1",
        className
      )}
      {...props}
    >
      <div className="p-3 mb-4 rounded-lg bg-primary/10 text-primary">
        {icon}
      </div>
      <h3 className="mb-2 text-xl font-semibold tracking-tight">
        {title}
      </h3>
      <p className="text-muted-foreground text-base leading-relaxed">
        {description}
      </p>
    </div>
  )
}
