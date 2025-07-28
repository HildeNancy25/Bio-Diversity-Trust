import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"
import Link from "next/link"
import { ChevronRight } from "lucide-react"

interface CardItem {
  title: string
  description: string
  image?: string
  category?: string
  link?: string
  icon?: string
}

interface CardGridProps {
  items: CardItem[]
  columns?: 2 | 3 | 4
  showImages?: boolean
  showCategories?: boolean
  showLinks?: boolean
}

export default function CardGrid({
  items,
  columns = 3,
  showImages = false,
  showCategories = false,
  showLinks = false,
}: CardGridProps) {
  const gridCols = {
    2: "md:grid-cols-2",
    3: "md:grid-cols-2 lg:grid-cols-3",
    4: "md:grid-cols-2 lg:grid-cols-4",
  }

  return (
    <div className={`grid gap-8 ${gridCols[columns]}`}>
      {items.map((item, index) => (
        <Card key={index} className="hover:shadow-lg transition duration-300">
          <CardHeader>
            {showImages && item.image && (
              <div className="h-48 mb-4 rounded-md overflow-hidden">
                <Image
                  src={item.image || "/placeholder.svg"}
                  alt={item.title}
                  width={300}
                  height={200}
                  className="w-full h-full object-cover"
                />
              </div>
            )}
            <CardTitle className="text-xl">{item.title}</CardTitle>
            {showCategories && item.category && (
              <CardDescription className="text-green-600 font-medium">{item.category}</CardDescription>
            )}
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">{item.description}</p>
            {showLinks && item.link && (
              <Link href={item.link} className="text-green-600 hover:text-green-700 inline-flex items-center mt-4">
                Read more
                <ChevronRight className="ml-1 h-4 w-4" />
              </Link>
            )}
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
