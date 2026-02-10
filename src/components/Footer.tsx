'use client'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-[var(--color-primary)]/20 py-8 relative">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-[var(--color-text-muted)] text-sm">
            © {currentYear} Tu Nombre. Todos los derechos reservados.
          </div>
          
          <div className="flex gap-6 text-sm">
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="text-[var(--color-text-muted)] hover:text-[var(--color-primary)] transition-colors"
            >
              Volver arriba ↑
            </button>
          </div>
        </div>
        
        <div className="text-center mt-4 text-xs text-[var(--color-text-muted)]">
          Hecho con 💚 usando Next.js, TypeScript y TailwindCSS
        </div>
      </div>
    </footer>
  )
}
