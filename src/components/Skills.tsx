'use client'


import { useLanguage } from '@/contexts/LanguageContext'
import { content } from '@/lib/config'

export default function Skills() {
  const { t, language } = useLanguage()
  const skillCategories = content.skills.categories
  const otherSkills = content.skills.other

  return (
    <section id="skills" className="min-h-screen py-20 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-display font-bold mb-4 text-center">
            <span className="bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)] bg-clip-text text-transparent">
              {t.skills.title}
            </span>
          </h2>
          <p className="text-center text-[var(--color-text-muted)] mb-16 text-lg">
            {t.skills.subtitle}
          </p>

          <div className="grid md:grid-cols-4 gap-8">
            {skillCategories.map((category, catIndex) => (
              <div
                key={catIndex}
                className="glass-effect rounded-2xl p-6 border border-[var(--color-primary)]/20 hover:border-[var(--color-primary)]/40 transition-all"
              >
                <h3 className="text-2xl font-display font-bold mb-6 text-[var(--color-primary)]">
                  {content.skills.getCategoryName(category, language)}
                </h3>

                <div className="space-y-4">
                  {category.items.map((skill, skillIndex) => (
                    <div key={skillIndex}>
                      <div className="flex justify-between mb-2">
                        <span className="font-medium">{skill.name}</span>
                        <span className="text-[var(--color-text-muted)]">{skill.level}%</span>
                      </div>
                      <div className="h-2 bg-[var(--color-bg-darker)] rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)] rounded-full transition-all duration-1000 ease-out"
                          style={{ 
                            width: `${skill.level}%`,
                            animationDelay: `${catIndex * 0.2 + skillIndex * 0.1}s`
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          
          {/* Additional skills badges */}
          <div className="mt-16">
            <h3 className="text-2xl font-display font-bold mb-6 text-center">
              {t.skills.otherTech}
            </h3>
            <div className="flex flex-wrap gap-3 justify-center">
              {otherSkills.map((tech, index) => (
                <span
                  key={index}
                  className="px-4 py-2 glass-effect rounded-full text-sm font-medium border border-[var(--color-primary)]/30 hover:border-[var(--color-primary)] hover:scale-105 transition-all cursor-default"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
