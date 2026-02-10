'use client'

import { useLanguage } from '@/contexts/LanguageContext'

export default function Projects() {
  const { t } = useLanguage()

  return (
    <section id="proyectos" className="min-h-screen py-20 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-display font-bold mb-4 text-center">
            <span className="bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)] bg-clip-text text-transparent">
              {t.projects.title}
            </span>
          </h2>
          <p className="text-center text-[var(--color-text-muted)] mb-16 text-lg">
            {t.projects.subtitle}
          </p>
          
          <div className="grid md:grid-cols-2 gap-8">
            {t.projects.items.map((project, index) => (
              <div
                key={index}
                className="group relative glass-effect rounded-2xl p-6 border border-[var(--color-primary)]/20 hover:border-[var(--color-primary)]/40 transition-all duration-300 hover:scale-105"
              >
                {/* Background gradient effect */}
                <div className={`absolute inset-0 bg-gradient-to-br ${
                  index % 4 === 0 ? 'from-[var(--color-primary)] to-[var(--color-secondary)]' :
                  index % 4 === 1 ? 'from-[var(--color-secondary)] to-[var(--color-accent)]' :
                  index % 4 === 2 ? 'from-[var(--color-accent)] to-[var(--color-primary)]' :
                  'from-[var(--color-primary)] to-[var(--color-accent)]'
                } opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity`} />
                
                <div className="relative z-10">
                  {/* Project icon/number */}
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[var(--color-primary)]/20 to-[var(--color-secondary)]/20 flex items-center justify-center mb-4 font-display font-bold text-xl">
                    {(index + 1).toString().padStart(2, '0')}
                  </div>
                  
                  <h3 className="text-2xl font-display font-bold mb-3 group-hover:text-[var(--color-primary)] transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-[var(--color-text-muted)] mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  
                  {/* Tech stack */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 text-xs font-medium rounded-full bg-[var(--color-primary)]/10 text-[var(--color-primary)] border border-[var(--color-primary)]/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  {/* Link */}
                  <a
                    href="#"
                    className="inline-flex items-center gap-2 text-[var(--color-primary)] font-medium hover:gap-3 transition-all"
                  >
                    {t.projects.viewProject}
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </a>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <a
              href="https://github.com/tuusuario"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 border-2 border-[var(--color-primary)] rounded-lg font-semibold hover:bg-[var(--color-primary)]/10 transition-colors"
            >
              {t.projects.viewMore}
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
