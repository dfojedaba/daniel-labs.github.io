'use client'

import { useState, useEffect } from 'react'

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false)

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

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'glass-effect py-4' : 'bg-transparent py-6'
    }`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div className="text-2xl font-display font-bold glow-text">
          {'<DEV />'}
        </div>
        
        <div className="hidden md:flex gap-8">
          {['Inicio', 'Sobre mí', 'Proyectos', 'Skills', 'Contacto'].map((item, index) => (
            <button
              key={item}
              onClick={() => scrollToSection(item === 'Inicio' ? 'hero' : item.toLowerCase().replace(' ', '-'))}
              className="text-sm font-medium hover:text-[var(--color-primary)] transition-colors relative group"
            >
              {item}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[var(--color-primary)] transition-all group-hover:w-full" />
            </button>
          ))}
        </div>

        <button className="md:hidden text-2xl">☰</button>
      </div>
    </nav>
  )
}
