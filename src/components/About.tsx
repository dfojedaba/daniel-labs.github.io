'use client'

export default function About() {
  return (
    <section id="sobre-mí" className="min-h-screen flex items-center py-20 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-display font-bold mb-16 text-center">
            <span className="bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)] bg-clip-text text-transparent">
              Sobre Mí
            </span>
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)] rounded-2xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity" />
              <div className="relative glass-effect rounded-2xl p-8 border-2 border-[var(--color-primary)]/20">
                <div className="aspect-square bg-gradient-to-br from-[var(--color-primary)]/20 to-[var(--color-secondary)]/20 rounded-xl flex items-center justify-center">
                  <div className="text-8xl">👨‍💻</div>
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              <p className="text-lg text-[var(--color-text-muted)] leading-relaxed">
                Soy un desarrollador apasionado por crear soluciones tecnológicas que marquen la diferencia. 
                Con experiencia en desarrollo full stack, me especializo en construir aplicaciones web modernas, 
                escalables y centradas en el usuario.
              </p>
              
              <p className="text-lg text-[var(--color-text-muted)] leading-relaxed">
                Mi enfoque combina las mejores prácticas de desarrollo con diseño intuitivo, 
                siempre buscando la excelencia técnica y la innovación constante.
              </p>
              
              <div className="grid grid-cols-2 gap-4 pt-6">
                {[
                  { number: '3+', label: 'Años de Experiencia' },
                  { number: '20+', label: 'Proyectos Completados' },
                  { number: '10+', label: 'Tecnologías Dominadas' },
                  { number: '100%', label: 'Compromiso' }
                ].map((stat, index) => (
                  <div key={index} className="glass-effect p-4 rounded-lg text-center border border-[var(--color-primary)]/20 hover:border-[var(--color-primary)]/40 transition-colors">
                    <div className="text-3xl font-display font-bold text-[var(--color-primary)] mb-1">
                      {stat.number}
                    </div>
                    <div className="text-sm text-[var(--color-text-muted)]">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
