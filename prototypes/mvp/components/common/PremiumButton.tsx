import * as React from "react"
import { cn } from "@/lib/utils"

export interface PremiumButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
  variant?: 'primary' | 'secondary' | 'outline'
  size?: 'default' | 'lg' | 'xl'
}

export const PremiumButton = React.forwardRef<HTMLButtonElement, PremiumButtonProps>(
  ({ className, variant = 'primary', size = 'default', children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center rounded-md font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
          {
            "bg-primary text-primary-foreground hover:bg-primary/90 shadow-md hover:shadow-lg": variant === 'primary',
            "bg-secondary text-secondary-foreground hover:bg-secondary/80": variant === 'secondary',
            "border border-input bg-background hover:bg-accent hover:text-accent-foreground": variant === 'outline',
            "h-10 px-4 py-2 text-base": size === 'default',
            "h-12 rounded-md px-8 text-lg": size === 'lg',
            "h-14 rounded-lg px-10 text-xl font-semibold": size === 'xl',
          },
          className
        )}
        {...props}
      >
        {children}
      </button>
    )
  }
)
PremiumButton.displayName = "PremiumButton"
