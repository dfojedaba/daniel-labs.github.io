import config from '../../config.json'

export type Language = 'es' | 'en'

// Helper para obtener texto traducido
export function getText(obj: any, lang: Language): string {
  if (typeof obj === 'string') return obj
  if (obj && typeof obj === 'object' && lang in obj) return obj[lang]
  return obj?.es || obj?.en || ''
}

// Configuración completa
export const siteConfig = config

// Información personal
export const personalInfo = {
  name: config.personal.name,
  getRole: (lang: Language) => getText(config.personal.role, lang),
  email: config.personal.email,
  phone: config.personal.phone,
  getLocation: (lang: Language) => getText(config.personal.location, lang),
  social: config.personal.social
}

// Tema y colores
export const theme = config.theme

// Contenido por secciones
export const content = {
  hero: {
    getGreeting: (lang: Language) => getText(config.content.hero.greeting, lang),
    getDescription: (lang: Language) => getText(config.content.hero.description, lang)
  },
  about: {
    emoji: config.content.about.emoji,
    getParagraph1: (lang: Language) => getText(config.content.about.paragraph1, lang),
    getParagraph2: (lang: Language) => getText(config.content.about.paragraph2, lang),
    stats: {
      experience: {
        number: config.content.about.stats.experience.number,
        getLabel: (lang: Language) => getText(config.content.about.stats.experience.label, lang)
      },
      projects: {
        number: config.content.about.stats.projects.number,
        getLabel: (lang: Language) => getText(config.content.about.stats.projects.label, lang)
      },
      technologies: {
        number: config.content.about.stats.technologies.number,
        getLabel: (lang: Language) => getText(config.content.about.stats.technologies.label, lang)
      },
      commitment: {
        number: config.content.about.stats.commitment.number,
        getLabel: (lang: Language) => getText(config.content.about.stats.commitment.label, lang)
      }
    }
  },
  projects: {
    items: config.content.projects,
    getProjectDescription: (project: any, lang: Language) => getText(project.description, lang)
  },
  skills: {
    categories: config.content.skills.categories,
    other: config.content.skills.other,
    getCategoryName: (category: any, lang: Language) => getText(category.name, lang)
  }
}

// SEO
export const seo = {
  getTitle: (lang: Language) => getText(config.seo.title, lang),
  getDescription: (lang: Language) => getText(config.seo.description, lang),
  keywords: config.seo.keywords
}
