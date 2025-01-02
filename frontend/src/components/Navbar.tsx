'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'

export function Navbar() {
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [scrolled])

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-black/80 backdrop-blur-lg' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link 
            href="/" 
            className="text-2xl font-bold bg-gradient-to-r from-amber-200 via-amber-400 to-amber-500 text-transparent bg-clip-text"
          >
            COSTLY
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <NavLink href="/" label="Home" pathname={pathname} />
            <NavLink href="/items" label="Items" pathname={pathname} />
            <NavLink href="/categories" label="Categories" pathname={pathname} />
            <NavLink href="/about" label="About" pathname={pathname} />
          </div>

          {/* CTA Button */}
          <Link
            href="/submit"
            className={`
              px-6 py-2 rounded-xl text-sm font-medium
              transition-all duration-300
              ${scrolled 
                ? 'bg-gradient-to-r from-amber-500 to-amber-600 text-white hover:from-amber-600 hover:to-amber-700'
                : 'border border-amber-500/20 hover:border-amber-500/40 text-amber-300'
              }
            `}
          >
            Submit Item
          </Link>
        </div>
      </div>

      {/* Decorative line */}
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-amber-500/20 to-transparent" />
    </nav>
  )
}

function NavLink({ href, label, pathname }: { href: string; label: string; pathname: string }) {
  const isActive = pathname === href

  return (
    <Link
      href={href}
      className={`
        relative py-2 text-sm font-medium transition-colors duration-300
        ${isActive 
          ? 'text-amber-400' 
          : 'text-gray-400 hover:text-amber-300'
        }
      `}
    >
      {label}
      {isActive && (
        <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-amber-400 to-amber-600" />
      )}
    </Link>
  )
}
