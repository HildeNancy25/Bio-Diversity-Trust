"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import ScrollLink from "@/components/ScrollLink"
import MobileNav from "@/components/mobile-nav"

interface HeaderProps {
  logo: string
  siteName: string
  navigation: Array<{ label: string; href: string }>
  ctaButton?: {
    label: string
    href: string
  }
}

export default function Header({ logo, siteName, navigation, ctaButton }: HeaderProps) {
  return (
    <header className="sticky top-0 z-40 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between mx-auto max-w-7xl">
        <div className="flex items-center gap-2">
          <Image src={logo || "/placeholder.svg"} width={24} height={24} alt={`${siteName} Logo`} className="h-6 w-6" />
          <Link href="/">
            <span className="text-xl font-bold">{siteName}</span>
          </Link>
        </div>
        <nav className="hidden md:flex gap-6">
          {navigation.map((item) => (
            <ScrollLink
              key={item.href}
              href={item.href}
              className="text-sm font-medium transition-colors hover:text-primary"
            >
              {item.label}
            </ScrollLink>
          ))}
        </nav>
        <div className="flex items-center gap-4">
          {ctaButton && (
            <Link href={ctaButton.href}>
              <Button className="hidden md:flex bg-green-600 hover:bg-green-700">{ctaButton.label}</Button>
            </Link>
          )}
          <MobileNav />
        </div>
      </div>
    </header>
  )
}
