import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Image from "next/image"

interface TeamMember {
  name: string
  role: string
  image: string
  description: string
}

interface TeamGridProps {
  members: TeamMember[]
}

export default function TeamGrid({ members }: TeamGridProps) {
  return (
    <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 py-12 md:grid-cols-2 lg:grid-cols-3">
      {members.map((member, index) => (
        <Card key={index} className="bg-white">
          <CardHeader className="text-center">
            <div className="mx-auto mb-4 h-32 w-32 overflow-hidden rounded-full">
              <Image
                src={member.image || "/placeholder.svg"}
                width={128}
                height={128}
                alt={member.name}
                className="h-full w-full object-cover"
              />
            </div>
            <CardTitle className="text-xl">{member.name}</CardTitle>
            <CardDescription className="text-green-600 font-medium">{member.role}</CardDescription>
          </CardHeader>
          <CardContent className="text-center space-y-4">
            <p className="text-sm text-muted-foreground">{member.description}</p>
            <Button variant="outline" size="sm" className="w-full bg-transparent">
              Learn More
            </Button>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
