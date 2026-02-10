'use client'

import { useEffect, useState } from 'react'
import { useLanguage } from '@/contexts/LanguageContext'

export default function Hero() {
  const { t, language } = useLanguage()
  const [displayText, setDisplayText] = useState('')
  const fullText = t.hero.title
  
  useEffect(() => {
    setDisplayText('') // Reset text when language changes
    let index = 0
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setDisplayText(fullText.slice(0, index))
        index++
      } else {
        clearInterval(timer)
      }
    }, 100)
    
    return () => clearInterval(timer)
  }, [fullText, language])

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute top-20 right-20 w-72 h-72 bg-[var(--color-primary)] opacity-5 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-[var(--color-secondary)] opacity-5 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-6 opacity-0 animate-fade-in">
            <span className="inline-block px-4 py-2 border border-[var(--color-primary)] rounded-full text-sm font-medium glow-border">
              👋 {t.hero.greeting}
            </span>
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-black mb-6 opacity-0 animate-fade-in animation-delay-200">
            <span className="bg-gradient-to-r from-[var(--color-primary)] via-[var(--color-secondary)] to-[var(--color-accent)] bg-clip-text text-transparent">
              Daniel F. Ojeda
            </span>
          </h1>
          
          <div className="text-2xl md:text-4xl font-display mb-8 h-12 opacity-0 animate-fade-in animation-delay-400">
            <span className="text-[var(--color-text-muted)]">{displayText}</span>
            <span className="animate-pulse text-[var(--color-primary)]">|</span>
          </div>
          
          <p className="text-lg md:text-xl text-[var(--color-text-muted)] mb-12 max-w-2xl mx-auto opacity-0 animate-slide-up animation-delay-600">
            {t.hero.description}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center opacity-0 animate-slide-up animation-delay-800">
            <button 
              onClick={() => document.getElementById('proyectos')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-4 bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)] rounded-lg font-semibold text-[var(--color-bg-dark)] hover:scale-105 transition-transform shadow-lg hover:shadow-[var(--color-primary)]/50"
            >
              {t.hero.viewProjects}
            </button>
            <button 
              onClick={() => document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-4 border-2 border-[var(--color-primary)] rounded-lg font-semibold hover:bg-[var(--color-primary)]/10 transition-colors glow-border"
            >
              {t.hero.contactMe}
            </button>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 opacity-0 animate-fade-in animation-delay-800">
        <div className="w-6 h-10 border-2 border-[var(--color-primary)] rounded-full flex justify-center pt-2">
          <div className="w-1 h-3 bg-[var(--color-primary)] rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  )
}
