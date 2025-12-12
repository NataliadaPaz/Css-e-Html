"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import Link from "next/link"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navigation = [
    { name: "Sobre Nós", href: "#quem-somos" },
    { name: "Projetos", href: "#projetos" },
    { name: "Equipe", href: "#equipe" },
    { name: "Contato", href: "#contato" },
  ]

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-500 ${
        isScrolled ? "bg-[#0f1f0f]/95 backdrop-blur-md shadow-lg" : "bg-[#0f1f0f]/80 backdrop-blur-sm"
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex h-16 items-center justify-between">
          <Link href="#home" className="flex items-center gap-2.5">
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-white">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                className="h-5 w-5 text-[#2D5016]"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 2C10.89 2 10 2.89 10 4V12C10 13.11 10.89 14 12 14C13.11 14 14 13.11 14 12V4C14 2.89 13.11 2 12 2Z"
                  fill="currentColor"
                />
                <path
                  d="M12 14C9.79 14 8 15.79 8 18C8 20.21 9.79 22 12 22C14.21 22 16 20.21 16 18C16 15.79 14.21 14 12 14Z"
                  fill="currentColor"
                />
                <path
                  d="M18 8C18 5.79 16.21 4 14 4C13.45 4 12.95 4.15 12.5 4.4C12.81 5.17 13 6.06 13 7V9.5C14.5 9.97 15.97 10.66 17.2 11.6C17.7 10.5 18 9.28 18 8Z"
                  fill="currentColor"
                  opacity="0.6"
                />
                <path
                  d="M6 8C6 9.28 6.3 10.5 6.8 11.6C8.03 10.66 9.5 9.97 11 9.5V7C11 6.06 11.19 5.17 11.5 4.4C11.05 4.15 10.55 4 10 4C7.79 4 6 5.79 6 8Z"
                  fill="currentColor"
                  opacity="0.6"
                />
              </svg>
            </div>
            <span className="text-lg font-medium tracking-tight text-white">Raízes Urbanas</span>
          </Link>

          <nav className="hidden items-center gap-8 md:flex">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm font-medium text-white/80 transition-colors hover:text-white"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          <Button
            size="sm"
            className="hidden rounded-full bg-[#7fb069] px-5 text-sm font-medium text-white hover:bg-[#6a9c54] md:inline-flex"
            asChild
          >
            <Link href="#doe-agora">Doe Agora</Link>
          </Button>

          <Button
            variant="ghost"
            size="icon"
            className="text-white hover:bg-white/10 hover:text-white md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="border-t border-white/10 bg-[#0f1f0f] md:hidden">
          <nav className="container mx-auto flex flex-col gap-3 px-6 py-4">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm font-medium text-white/80 transition-colors hover:text-white"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <Button size="sm" className="mt-2 rounded-full bg-[#7fb069] hover:bg-[#6a9c54]" asChild>
              <Link href="#doe-agora" onClick={() => setIsMenuOpen(false)}>
                Doe Agora
              </Link>
            </Button>
          </nav>
        </div>
      )}
    </header>
  )
}
