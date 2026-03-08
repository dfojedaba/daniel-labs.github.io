'use client'

import { useLanguage } from '@/contexts/LanguageContext'

export default function Footer() {
  const { t } = useLanguage()
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-[var(--color-primary)]/20 py-8 relative">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-[var(--color-text-muted)] text-sm">
            © {currentYear} drkmdaniel. {t.footer.rights}
          </div>
          
          <div className="flex gap-6 text-sm">
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="text-[var(--color-text-muted)] hover:text-[var(--color-primary)] transition-colors"
            >
              {t.footer.backToTop}
            </button>
          </div>
        </div>
        
        <div className="text-center mt-4 text-xs text-[var(--color-text-muted)]">
          {t.footer.madeWith}
          <br />
          {t.footer.phrase}
        </div>
      </div>
    </footer>
  )
}
