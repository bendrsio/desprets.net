"use client"

import type React from "react"
import { useRouter } from "next/navigation"

interface SmoothScrollLinkProps {
  href: string
  children: React.ReactNode
  className?: string
}

export default function SmoothScrollLink({ href, children, className = "" }: SmoothScrollLinkProps) {
  const router = useRouter()

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    // Only apply smooth scrolling to hash links on the same page
    const isHashLink = href.startsWith("#")

    if (isHashLink) {
      e.preventDefault()
      const element = document.querySelector(href)
      if (element) {
        element.scrollIntoView({ behavior: "smooth" })
      }
    } else if (href.includes("#")) {
      // For links like '/#projects', navigate to the page first
      e.preventDefault()
      const [path, hash] = href.split("#")
      router.push(path)

      // After navigation, scroll to the element
      setTimeout(() => {
        const element = document.querySelector(`#${hash}`)
        if (element) {
          element.scrollIntoView({ behavior: "smooth" })
        }
      }, 100)
    }
  }

  return (
    <a href={href} onClick={handleClick} className={className}>
      {children}
    </a>
  )
}

