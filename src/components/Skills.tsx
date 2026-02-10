'use client'

export default function Skills() {
  const skillCategories = [
    {
      title: 'Frontend',
      skills: [
        { name: 'React', level: 90 },
        { name: 'Next.js', level: 85 },
        { name: 'TypeScript', level: 88 },
        { name: 'TailwindCSS', level: 92 },
        { name: 'Vue.js', level: 75 }
      ]
    },
    {
      title: 'Backend',
      skills: [
        { name: 'Node.js', level: 85 },
        { name: 'Python', level: 80 },
        { name: 'PostgreSQL', level: 78 },
        { name: 'MongoDB', level: 82 },
        { name: 'GraphQL', level: 75 }
      ]
    },
    {
      title: 'DevOps & Tools',
      skills: [
        { name: 'Git', level: 90 },
        { name: 'Docker', level: 75 },
        { name: 'AWS', level: 70 },
        { name: 'CI/CD', level: 72 },
        { name: 'Linux', level: 80 }
      ]
    }
  ]

  return (
    <section id="skills" className="min-h-screen py-20 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-display font-bold mb-4 text-center">
            <span className="bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)] bg-clip-text text-transparent">
              Habilidades
            </span>
          </h2>
          <p className="text-center text-[var(--color-text-muted)] mb-16 text-lg">
            Tecnologías y herramientas que domino
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            {skillCategories.map((category, catIndex) => (
              <div
                key={catIndex}
                className="glass-effect rounded-2xl p-6 border border-[var(--color-primary)]/20 hover:border-[var(--color-primary)]/40 transition-all"
              >
                <h3 className="text-2xl font-display font-bold mb-6 text-[var(--color-primary)]">
                  {category.title}
                </h3>
                
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
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
              Otras Tecnologías
            </h3>
            <div className="flex flex-wrap gap-3 justify-center">
              {[
                'REST APIs', 'WebSockets', 'Redis', 'Nginx', 'Jest', 'Cypress',
                'Webpack', 'Vite', 'Prisma', 'Figma', 'Photoshop', 'Agile/Scrum'
              ].map((tech, index) => (
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
