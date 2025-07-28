import type React from "react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

interface HeroSectionProps {
  title: string
  subtitle: string
  description?: string
  backgroundImage?: string
  cta?: {
    label: string
    href: string
  }
  children?: React.ReactNode
}

export default function HeroSection({
  title,
  subtitle,
  description,
  backgroundImage,
  cta,
  children,
}: HeroSectionProps) {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 relative">
      {backgroundImage && (
        <>
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${backgroundImage})` }}
          ></div>
          <div className="absolute inset-0 bg-gradient-to-r from-green-900/80 to-green-700/60"></div>
        </>
      )}
      <div className="container px-4 md:px-6 mx-auto max-w-7xl relative z-10">
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
          <div className="flex flex-col justify-center space-y-4">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-white">{title}</h1>
            <p className="max-w-[600px] text-white/90 md:text-xl">{subtitle}</p>
            {description && <p className="italic text-white/80 md:text-md">{description}</p>}
            {cta && (
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link href={cta.href}>
                  <Button className="bg-green-600 hover:bg-green-700">{cta.label}</Button>
                </Link>
              </div>
            )}
          </div>
          {children && <div className="relative w-full h-[550px] lg:order-last">{children}</div>}
        </div>
      </div>
    </section>
  )
}
