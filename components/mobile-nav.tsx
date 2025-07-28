"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import ScrollLink from "@/components/ScrollLink"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import Image from "next/image"
import images from "@/data/images.json"

export default function MobileNav() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const closeMenu = () => {
    setIsOpen(false)
  }

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/services", label: "Services" },
    { href: "/research", label: "Research" },
    { href: "/partners", label: "Partners" },
    { href: "/contact", label: "Contact" },
  ]

  return (
    <div className="md:hidden">
      <Button variant="ghost" size="icon" onClick={toggleMenu} aria-label="Toggle menu">
        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </Button>

      {isOpen && (
        <div className="fixed inset-0 z-50 bg-green-700">
          <div className="container flex h-16 items-center justify-between">
            <div className="flex items-center gap-2">
              <Image
                src={images.logo || "/placeholder.svg"}
                width={24}
                height={24}
                alt="Genetic Diversity Trust Logo"
                className="h-6 w-6"
              />
              <span className="text-xl font-bold text-white">Genetic Diversity Trust</span>
            </div>
            <Button variant="ghost" size="icon" onClick={closeMenu} aria-label="Close menu" className="text-white">
              <X className="h-6 w-6" />
            </Button>
          </div>

          <div className="container px-4 py-8">
            <nav className="flex flex-col space-y-6">
              {navLinks.map((link) => (
                <ScrollLink
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "text-lg font-medium text-white hover:text-green-200",
                    pathname === link.href ? "text-green-200 font-semibold" : "",
                  )}
                  onClick={closeMenu}
                >
                  {link.label}
                </ScrollLink>
              ))}
            </nav>
          </div>
        </div>
      )}
    </div>
  )
}
