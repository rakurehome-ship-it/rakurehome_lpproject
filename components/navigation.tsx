"use client"

import { Button } from "@/components/ui/button"
import { Building2, Menu, X } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()

  const navItems = [
    { href: "/about", label: "会社について" },
    { href: "/requirements", label: "募集要項" },
    { href: "/jobs", label: "求人情報" },
    { href: "/contact", label: "お問い合わせ" },
  ]

  return (
    <header className="bg-white border-b sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <Building2 className="h-5 w-5 text-green-600" />
          <span className="text-lg font-medium text-gray-900">リフォーム職人募集</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`text-sm transition-colors ${
                pathname === item.href ? "text-gray-900 font-medium" : "text-gray-600 hover:text-gray-900"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Desktop Apply Button */}
        <Link href="/application" className="hidden md:block">
          <Button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 text-sm">応募する</Button>
        </Link>

        {/* Mobile Menu Button */}
        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden p-2 text-gray-600 hover:text-gray-900">
          {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <nav className="container mx-auto px-4 py-4 space-y-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`block text-sm transition-colors ${
                  pathname === item.href ? "text-gray-900 font-medium" : "text-gray-600 hover:text-gray-900"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link href="/application" onClick={() => setIsMenuOpen(false)}>
              <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white">応募する</Button>
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}
