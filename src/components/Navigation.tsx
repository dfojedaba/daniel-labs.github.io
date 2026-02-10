'use client'

import { useState, useEffect } from 'react'
import { useLanguage } from '@/contexts/LanguageContext'

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const { language, setLanguage, t } = useLanguage()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const menuItems = [
    { label: t.nav.home, id: 'hero' },
    { label: t.nav.about, id: 'sobre-mí' },
    { label: t.nav.projects, id: 'proyectos' },
    { label: t.nav.skills, id: 'skills' },
    { label: t.nav.contact, id: 'contacto' }
  ]

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'glass-effect py-4' : 'bg-transparent py-6'
    }`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div className="text-2xl font-display font-bold glow-text">
          {'<DEV />'}
        </div>
        
        <div className="hidden md:flex gap-8 items-center">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="text-sm font-medium hover:text-[var(--color-primary)] transition-colors relative group"
            >
              {item.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[var(--color-primary)] transition-all group-hover:w-full" />
            </button>
          ))}
          
          {/* Language Switcher */}
          <div className="flex gap-2 ml-4 pl-4 border-l border-[var(--color-primary)]/30">
            <button
              onClick={() => setLanguage('es')}
              className={`px-3 py-1 rounded-md text-sm font-medium transition-all ${
                language === 'es'
                  ? 'bg-[var(--color-primary)] text-[var(--color-bg-dark)]'
                  : 'text-[var(--color-text-muted)] hover:text-[var(--color-primary)]'
              }`}
            >
              ES
            </button>
            <button
              onClick={() => setLanguage('en')}
              className={`px-3 py-1 rounded-md text-sm font-medium transition-all ${
                language === 'en'
                  ? 'bg-[var(--color-primary)] text-[var(--color-bg-dark)]'
                  : 'text-[var(--color-text-muted)] hover:text-[var(--color-primary)]'
              }`}
            >
              EN
            </button>
          </div>
        </div>

        <button className="md:hidden text-2xl">☰</button>
      </div>
    </nav>
  )
}
