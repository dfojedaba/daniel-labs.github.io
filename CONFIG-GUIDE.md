# 📝 Guía de Configuración del Portfolio

Esta guía te enseña cómo personalizar **TODO** el contenido de tu portfolio desde un solo archivo sin tocar código.

---

## 🎯 Archivo Principal: `config.json`

**Todo el contenido está en un solo lugar:** `config.json`

Este archivo controla:
- ✅ Tu información personal (nombre, email, teléfono, ubicación)
- ✅ Redes sociales (GitHub, LinkedIn, Twitter)
- ✅ Colores del tema
- ✅ Fuentes tipográficas
- ✅ Todo el texto en español e inglés
- ✅ Proyectos y sus descripciones
- ✅ Skills y niveles de experiencia
- ✅ Metadatos SEO

---

## 📋 Estructura del Archivo

### 1. **Información Personal** (`personal`)

```json
{
  "personal": {
    "name": "Tu Nombre Completo",           // ← Cambia tu nombre aquí
    "role": {
      "es": "Desarrollador Full Stack",     // ← Tu rol en español
      "en": "Full Stack Developer"          // ← Tu rol en inglés
    },
    "email": "tu@email.com",                // ← Tu email
    "phone": "+57 300 123 4567",           // ← Tu teléfono
    "location": {
      "es": "Bogotá, Colombia",             // ← Tu ubicación
      "en": "Bogota, Colombia"
    },
    "social": {
      "github": "https://github.com/tuusuario",
      "linkedin": "https://linkedin.com/in/tuusuario",
      "twitter": "https://twitter.com/tuusuario"
    }
  }
}
```

**Ejemplo personalizado:**
```json
{
  "personal": {
    "name": "Juan Pérez",
    "role": {
      "es": "Ingeniero de Software",
      "en": "Software Engineer"
    },
    "email": "juan.perez@gmail.com",
    "phone": "+57 310 555 1234",
    "location": {
      "es": "Medellín, Colombia",
      "en": "Medellin, Colombia"
    },
    "social": {
      "github": "https://github.com/juanperez",
      "linkedin": "https://linkedin.com/in/juanperez",
      "twitter": "https://twitter.com/juanperez"
    }
  }
}
```

---

### 2. **Tema y Colores** (`theme`)

```json
{
  "theme": {
    "colors": {
      "primary": "#00ff88",      // ← Color principal (botones, acentos)
      "secondary": "#0099ff",    // ← Color secundario (gradientes)
      "accent": "#ff0066",       // ← Color de acento
      "bgDark": "#0a0e1a",       // ← Fondo oscuro
      "bgDarker": "#050810",     // ← Fondo más oscuro
      "text": "#e8f0ff",         // ← Color del texto
      "textMuted": "#8899aa"     // ← Texto atenuado
    },
    "fonts": {
      "display": "Orbitron",     // ← Fuente para títulos
      "body": "Quicksand"        // ← Fuente para texto normal
    }
  }
}
```

**Paletas de colores sugeridas:**

**Opción 1: Sunset (Atardecer)**
```json
"colors": {
  "primary": "#ff6b6b",
  "secondary": "#ffa500",
  "accent": "#ff1493",
  "bgDark": "#1a0f0a",
  "bgDarker": "#0f0805"
}
```

**Opción 2: Ocean (Océano)**
```json
"colors": {
  "primary": "#00d4ff",
  "secondary": "#0080ff",
  "accent": "#00ffcc",
  "bgDark": "#0a1420",
  "bgDarker": "#050a10"
}
```

**Opción 3: Forest (Bosque)**
```json
"colors": {
  "primary": "#00ff88",
  "secondary": "#00cc70",
  "accent": "#88ff00",
  "bgDark": "#0a1a0f",
  "bgDarker": "#051008"
}
```

**Opción 4: Purple Dream**
```json
"colors": {
  "primary": "#a855f7",
  "secondary": "#ec4899",
  "accent": "#f59e0b",
  "bgDark": "#1a0a2e",
  "bgDarker": "#0f0518"
}
```

---

### 3. **Sección Hero** (`content.hero`)

La primera sección que ven los visitantes:

```json
{
  "content": {
    "hero": {
      "greeting": {
        "es": "Hola, soy",
        "en": "Hi, I'm"
      },
      "description": {
        "es": "Tu descripción en español aquí...",
        "en": "Your description in English here..."
      }
    }
  }
}
```

**Ejemplo personalizado:**
```json
"hero": {
  "greeting": {
    "es": "¡Hola! Soy",
    "en": "Hello! I'm"
  },
  "description": {
    "es": "Apasionado por la tecnología y el diseño. Creo aplicaciones web que combinan funcionalidad con experiencias de usuario excepcionales.",
    "en": "Passionate about technology and design. I create web applications that combine functionality with exceptional user experiences."
  }
}
```

---

### 4. **Sección Sobre Mí** (`content.about`)

```json
{
  "about": {
    "emoji": "👨‍💻",              // ← Cambia el emoji
    "paragraph1": {
      "es": "Tu primer párrafo...",
      "en": "Your first paragraph..."
    },
    "paragraph2": {
      "es": "Tu segundo párrafo...",
      "en": "Your second paragraph..."
    },
    "stats": {
      "experience": {
        "number": "5+",          // ← Años de experiencia
        "label": {
          "es": "Años de Experiencia",
          "en": "Years of Experience"
        }
      },
      "projects": {
        "number": "50+",         // ← Número de proyectos
        "label": {
          "es": "Proyectos Completados",
          "en": "Completed Projects"
        }
      }
    }
  }
}
```

**Emojis sugeridos:**
- `👨‍💻` Desarrollador
- `👩‍💻` Desarrolladora
- `🚀` Innovación
- `💻` Tecnología
- `🎨` Diseñador
- `⚡` Velocidad/Energía
- `🌟` Estrella

---

### 5. **Proyectos** (`content.projects`)

Lista de proyectos que se mostrarán:

```json
{
  "projects": [
    {
      "title": "Nombre del Proyecto",              // ← Título (mismo en ambos idiomas)
      "description": {
        "es": "Descripción en español",
        "en": "Description in English"
      },
      "tech": ["React", "Node.js", "MongoDB"],     // ← Tecnologías usadas
      "link": "https://github.com/tu/proyecto",    // ← Link al proyecto
      "featured": true                             // ← true para destacar
    }
  ]
}
```

**Ejemplo completo con 3 proyectos:**
```json
"projects": [
  {
    "title": "Mi App de Delivery",
    "description": {
      "es": "Aplicación móvil para pedidos de comida con tracking en tiempo real y sistema de pagos integrado.",
      "en": "Mobile app for food orders with real-time tracking and integrated payment system."
    },
    "tech": ["React Native", "Firebase", "Stripe", "Google Maps API"],
    "link": "https://github.com/tuusuario/delivery-app",
    "featured": true
  },
  {
    "title": "Blog Personal",
    "description": {
      "es": "Blog minimalista con CMS headless y generación de sitios estáticos.",
      "en": "Minimalist blog with headless CMS and static site generation."
    },
    "tech": ["Next.js", "Contentful", "TailwindCSS"],
    "link": "https://github.com/tuusuario/blog",
    "featured": true
  },
  {
    "title": "Dashboard Financiero",
    "description": {
      "es": "Dashboard para análisis financiero con gráficos interactivos y exportación de reportes.",
      "en": "Financial analysis dashboard with interactive charts and report exports."
    },
    "tech": ["Vue.js", "D3.js", "Express", "PostgreSQL"],
    "link": "https://github.com/tuusuario/finance-dashboard",
    "featured": false
  }
]
```

---

### 6. **Skills** (`content.skills`)

Tus habilidades organizadas por categorías:

```json
{
  "skills": {
    "categories": [
      {
        "name": {
          "es": "Frontend",
          "en": "Frontend"
        },
        "items": [
          { "name": "React", "level": 90 },      // ← level: 0-100
          { "name": "Next.js", "level": 85 }
        ]
      }
    ],
    "other": [
      "REST APIs",
      "GraphQL",
      "Docker"
    ]
  }
}
```

**Ejemplo personalizado:**
```json
"skills": {
  "categories": [
    {
      "name": {
        "es": "Lenguajes",
        "en": "Languages"
      },
      "items": [
        { "name": "JavaScript", "level": 95 },
        { "name": "TypeScript", "level": 90 },
        { "name": "Python", "level": 85 },
        { "name": "Java", "level": 75 }
      ]
    },
    {
      "name": {
        "es": "Frameworks",
        "en": "Frameworks"
      },
      "items": [
        { "name": "React", "level": 92 },
        { "name": "Angular", "level": 80 },
        { "name": "Django", "level": 78 }
      ]
    },
    {
      "name": {
        "es": "Bases de Datos",
        "en": "Databases"
      },
      "items": [
        { "name": "PostgreSQL", "level": 85 },
        { "name": "MongoDB", "level": 88 },
        { "name": "Redis", "level": 75 }
      ]
    }
  ],
  "other": [
    "Git & GitHub",
    "Docker",
    "Kubernetes",
    "AWS",
    "CI/CD",
    "TDD",
    "Agile/Scrum",
    "Figma"
  ]
}
```

---

### 7. **SEO** (`seo`)

Metadatos para motores de búsqueda:

```json
{
  "seo": {
    "title": {
      "es": "Portfolio | Tu Nombre",
      "en": "Portfolio | Your Name"
    },
    "description": {
      "es": "Tu descripción para Google en español",
      "en": "Your description for Google in English"
    },
    "keywords": "desarrollador, react, nextjs, portfolio"
  }
}
```

---

## 🚀 Cómo Personalizar Tu Portfolio

### Paso 1: Abre `config.json`

Usa cualquier editor de texto:
- VS Code (recomendado)
- Notepad++
- Sublime Text
- Incluso el Bloc de notas

### Paso 2: Edita la Sección que Necesites

**Ejemplo: Cambiar tu nombre y email**

**ANTES:**
```json
"personal": {
  "name": "Tu Nombre",
  "email": "tu@email.com"
}
```

**DESPUÉS:**
```json
"personal": {
  "name": "María García",
  "email": "maria.garcia@example.com"
}
```

### Paso 3: Guarda el Archivo

Asegúrate de guardar el archivo `config.json` después de hacer cambios.

### Paso 4: Reinicia el Servidor (si está corriendo)

```bash
# Detén el servidor (Ctrl + C)
# Vuelve a iniciar
npm run dev
```

Los cambios se verán reflejados inmediatamente. ✅

---

## ⚠️ Reglas Importantes

### 1. **Respeta el formato JSON**

❌ **INCORRECTO:**
```json
{
  "name": "Juan Pérez,    // ← Falta comilla de cierre
  "email": "juan@email"   // ← Falta .com
}
```

✅ **CORRECTO:**
```json
{
  "name": "Juan Pérez",
  "email": "juan@email.com"
}
```

### 2. **Usa comillas dobles `"` siempre**

❌ **INCORRECTO:**
```json
{ 'name': 'Juan' }  // ← Comillas simples
```

✅ **CORRECTO:**
```json
{ "name": "Juan" }  // ← Comillas dobles
```

### 3. **Cuidado con las comas**

❌ **INCORRECTO:**
```json
{
  "name": "Juan",
  "email": "juan@email.com",  // ← Sobra la coma
}
```

✅ **CORRECTO:**
```json
{
  "name": "Juan",
  "email": "juan@email.com"   // ← Sin coma al final
}
```

### 4. **Mantén ambos idiomas sincronizados**

Cuando agregues texto, agrégalo en **español** Y **inglés**:

```json
"description": {
  "es": "Texto en español",
  "en": "Text in English"
}
```

---

## 🎨 Casos de Uso Comunes

### Cambiar colores del tema

```json
"colors": {
  "primary": "#ff0000",     // ← Rojo
  "secondary": "#00ff00",   // ← Verde
  "accent": "#0000ff"       // ← Azul
}
```

### Agregar un nuevo proyecto

```json
"projects": [
  // ... proyectos existentes
  {
    "title": "Mi Nuevo Proyecto",
    "description": {
      "es": "Descripción del proyecto",
      "en": "Project description"
    },
    "tech": ["React", "Firebase"],
    "link": "https://github.com/tu/proyecto",
    "featured": true
  }
]
```

### Cambiar tus estadísticas

```json
"stats": {
  "experience": {
    "number": "10+",         // ← De 3+ a 10+
    "label": {
      "es": "Años de Experiencia",
      "en": "Years of Experience"
    }
  }
}
```

---

## 🔧 Validador JSON

Si no estás seguro de que tu JSON sea válido, usa:

1. **Online:** https://jsonlint.com/
2. **VS Code:** Muestra errores automáticamente
3. **Terminal:**
   ```bash
   cat config.json | python -m json.tool
   ```

---

## 📱 Guía Visual

```
config.json
├── personal (👤 Tu información)
│   ├── name
│   ├── role
│   ├── email
│   ├── phone
│   └── social
├── theme (🎨 Colores y fuentes)
│   ├── colors
│   └── fonts
├── content (📝 Todo el texto)
│   ├── hero
│   ├── about
│   ├── projects
│   └── skills
└── seo (🔍 Google y SEO)
```

---

## ❓ Preguntas Frecuentes

**P: ¿Puedo usar emojis en los textos?**  
R: ¡Sí! Puedes usar emojis en cualquier texto 🎉

**P: ¿Qué pasa si rompo el JSON?**  
R: La página mostrará errores. Usa un validador o revierte los cambios.

**P: ¿Puedo agregar más idiomas además de ES/EN?**  
R: Sí, pero requiere modificar código. Consulta la guía I18N-GUIDE.md

**P: ¿Los cambios se ven inmediatamente?**  
R: Sí, pero debes reiniciar el servidor de desarrollo (npm run dev)

---

¿Necesitas ayuda? ¡No dudes en preguntar! 🚀
