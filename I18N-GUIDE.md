# 🌍 Guía de Internacionalización (i18n)

Tu portfolio ahora soporta **Español** e **Inglés** con cambio dinámico de idioma.

## 🎯 Características

- ✅ Selector de idioma en la navegación (ES/EN)
- ✅ Todo el contenido traducido automáticamente
- ✅ Persistencia del idioma seleccionado (localStorage)
- ✅ Detección automática del idioma del navegador
- ✅ Animación suave al cambiar el texto del Hero

## 🔧 Cómo Funciona

### 1. Archivo de Traducciones (`src/translations.ts`)

Todas las traducciones están centralizadas en un solo archivo:

```typescript
export const translations = {
  es: {
    nav: {
      home: 'Inicio',
      about: 'Sobre mí',
      // ...
    },
    hero: {
      greeting: 'Hola, soy',
      title: 'Desarrollador Full Stack',
      // ...
    }
  },
  en: {
    nav: {
      home: 'Home',
      about: 'About',
      // ...
    },
    hero: {
      greeting: 'Hi, I\'m',
      title: 'Full Stack Developer',
      // ...
    }
  }
}
```

### 2. Context Provider (`src/contexts/LanguageContext.tsx`)

Maneja el estado del idioma en toda la aplicación:

- Detecta el idioma del navegador al cargar
- Guarda la selección en localStorage
- Provee el idioma actual y la función para cambiarlo

### 3. Hook `useLanguage()`

En cualquier componente:

```typescript
import { useLanguage } from '@/contexts/LanguageContext'

export default function MiComponente() {
  const { language, setLanguage, t } = useLanguage()
  
  return (
    <h1>{t.hero.title}</h1>
  )
}
```

## 📝 Cómo Personalizar las Traducciones

### Opción 1: Editar Traducciones Existentes

Abre `src/translations.ts` y modifica los textos:

```typescript
es: {
  hero: {
    title: 'Tu Título Personalizado',
    description: 'Tu descripción...'
  }
}
```

### Opción 2: Agregar Nuevas Secciones

```typescript
export const translations = {
  es: {
    // ... traducciones existentes
    miNuevaSeccion: {
      titulo: 'Mi Título',
      descripcion: 'Mi descripción'
    }
  },
  en: {
    // ... traducciones existentes
    miNuevaSeccion: {
      titulo: 'My Title',
      descripcion: 'My description'
    }
  }
}
```

Luego úsalo en tu componente:

```typescript
const { t } = useLanguage()
return <h2>{t.miNuevaSeccion.titulo}</h2>
```

## 🎨 Personalizar el Selector de Idioma

El selector está en `src/components/Navigation.tsx`:

### Cambiar el estilo:

```typescript
<button
  onClick={() => setLanguage('es')}
  className={`px-3 py-1 rounded-md text-sm font-medium transition-all ${
    language === 'es'
      ? 'bg-[var(--color-primary)] text-[var(--color-bg-dark)]' // ← Activo
      : 'text-[var(--color-text-muted)] hover:text-[var(--color-primary)]' // ← Inactivo
  }`}
>
  ES
</button>
```

### Usar banderas en lugar de texto:

```typescript
<button onClick={() => setLanguage('es')}>
  🇪🇸
</button>
<button onClick={() => setLanguage('en')}>
  🇺🇸
</button>
```

## 🌐 Agregar Más Idiomas

### Paso 1: Agregar traducciones

En `src/translations.ts`:

```typescript
export const translations = {
  es: { /* ... */ },
  en: { /* ... */ },
  fr: {  // ← Francés
    nav: {
      home: 'Accueil',
      about: 'À propos',
      // ...
    }
  }
}

export type Language = 'es' | 'en' | 'fr'  // ← Actualizar tipo
```

### Paso 2: Agregar botón en la navegación

```typescript
<button
  onClick={() => setLanguage('fr')}
  className={/* ... */}
>
  FR
</button>
```

## 📋 Contenido Que Se Traduce Automáticamente

✅ **Navegación**: Todos los enlaces del menú  
✅ **Hero**: Saludo, título, descripción, botones  
✅ **Sobre Mí**: Título, biografía, estadísticas  
✅ **Proyectos**: Título, descripción de proyectos, botones  
✅ **Skills**: Título, categorías, subtítulos  
✅ **Contacto**: Formulario completo, información de contacto  
✅ **Footer**: Texto de derechos, enlaces  

## 💡 Tips y Mejores Prácticas

### 1. Mantén las traducciones sincronizadas

Cuando agregues un nuevo texto, agrégalo en **todos** los idiomas:

```typescript
// ✅ CORRECTO
es: { nuevoTexto: 'Hola' },
en: { nuevoTexto: 'Hello' }

// ❌ INCORRECTO (falta inglés)
es: { nuevoTexto: 'Hola' },
en: { /* olvidaste agregarlo */ }
```

### 2. Usa claves descriptivas

```typescript
// ✅ CORRECTO
hero: {
  viewProjectsButton: 'Ver Proyectos',
  contactButton: 'Contáctame'
}

// ❌ MENOS CLARO
hero: {
  btn1: 'Ver Proyectos',
  btn2: 'Contáctame'
}
```

### 3. Separa contenido largo

Para descripciones de proyectos largas:

```typescript
projects: {
  items: [
    {
      title: 'Proyecto 1',
      description: 'Esta es una descripción muy larga...',
      tech: ['React', 'Node.js']
    }
  ]
}
```

## 🔍 Debugging

### El idioma no cambia:

1. Verifica que `LanguageProvider` esté en `page.tsx`
2. Asegúrate de usar `useLanguage()` en el componente
3. Limpia el localStorage: `localStorage.clear()`

### Las traducciones no aparecen:

1. Verifica que la clave existe en ambos idiomas
2. Revisa la consola del navegador por errores
3. Confirma que estás usando `t.seccion.clave` correctamente

### El navegador no detecta el idioma:

Por defecto, el sistema detecta si el navegador está en español. Si no, usa inglés. Puedes cambiar esto en `LanguageContext.tsx`:

```typescript
const browserLang = navigator.language.toLowerCase()
const defaultLang = browserLang.startsWith('es') ? 'es' : 'en'
```

## 🚀 Ejemplo Completo: Agregar Nueva Sección

### 1. Agregar traducciones:

```typescript
// src/translations.ts
export const translations = {
  es: {
    // ... otras secciones
    blog: {
      title: 'Blog',
      subtitle: 'Mis últimos artículos',
      readMore: 'Leer más'
    }
  },
  en: {
    // ... otras secciones
    blog: {
      title: 'Blog',
      subtitle: 'My latest articles',
      readMore: 'Read more'
    }
  }
}
```

### 2. Crear componente:

```typescript
// src/components/Blog.tsx
'use client'

import { useLanguage } from '@/contexts/LanguageContext'

export default function Blog() {
  const { t } = useLanguage()
  
  return (
    <section>
      <h2>{t.blog.title}</h2>
      <p>{t.blog.subtitle}</p>
      <button>{t.blog.readMore}</button>
    </section>
  )
}
```

### 3. Agregar al menú:

```typescript
// src/components/Navigation.tsx
const menuItems = [
  // ... items existentes
  { label: t.nav.blog, id: 'blog' }
]
```

---

¿Necesitas ayuda? ¡No dudes en preguntar! 🎉
