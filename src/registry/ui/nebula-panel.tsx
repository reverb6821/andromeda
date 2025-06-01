// components/ui/custom-card.tsx
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import type { ReactNode } from "react"

interface CustomCardProps {
  title: string
  description?: string
  icon?: ReactNode
  children?: ReactNode
}

export default function NebulaPanel({ title, description, icon, children }: CustomCardProps) {
  return (
    <Card className="rounded-2xl shadow-md p-4">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <div>
          <CardTitle className="text-xl font-semibold">{title}</CardTitle>
          {description && <CardDescription>{description}</CardDescription>}
        </div>
        {icon && <div className="text-muted-foreground">{icon}</div>}
      </CardHeader>
      <CardContent className="pt-2">
        {children}
      </CardContent>
    </Card>
  )
}
