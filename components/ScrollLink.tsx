"use client"

import { useRouter, usePathname } from "next/navigation"
import { cn } from "@/lib/utils"

export default function ScrollLink({ href, children, className }) {
  const router = useRouter()
  const pathname = usePathname()
  const isActive = pathname === href

  const handleClick = (e) => {
    e.preventDefault()
    window.scrollTo({ top: 0, behavior: "smooth" })
    setTimeout(() => {
      router.push(href)
    }, 200)
  }

  return (
    <a href={href} onClick={handleClick} className={cn(className, isActive ? "text-green-600 font-medium" : "")}>
      {children}
    </a>
  )
}
