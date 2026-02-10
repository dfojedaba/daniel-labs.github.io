# 🚀 Guía de Inicio Rápido - Portfolio Next.js

## ⚡ Configuración Inicial (5 minutos)

### 1. Instalar Dependencias

```bash
npm install
```

### 2. Personalizar tu Información

#### A. Nombre y Título (src/components/Hero.tsx)
```typescript
// Línea 36: Cambia "Tu Nombre" por tu nombre real
<span className="bg-gradient-to-r from-[var(--color-primary)] via-[var(--color-secondary)] to-[var(--color-accent)] bg-clip-text text-transparent">
  Juan Pérez  {/* ← Cambia esto */}
</span>
```

#### B. Información de Contacto (src/components/Contact.tsx)
```typescript
// Líneas 51-53: Actualiza tu información
{ icon: '📧', label: 'Email', value: 'juan@ejemplo.com', link: 'mailto:juan@ejemplo.com' },
{ icon: '📱', label: 'Teléfono', value: '+57 300 123 4567', link: 'tel:+573001234567' },
{ icon: '📍', label: 'Ubicación', value: 'Tu Ciudad, Colombia', link: '#' }
```

#### C. Enlaces Sociales (src/components/Contact.tsx)
```typescript
// Líneas 67-69: Actualiza tus URLs
{ name: 'GitHub', url: 'https://github.com/tuusuario' },
{ name: 'LinkedIn', url: 'https://linkedin.com/in/tuusuario' },
{ name: 'Twitter', url: 'https://twitter.com/tuusuario' }
```

### 3. Probar Localmente

```bash
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000) 🎉

---

## 📤 Desplegar en GitHub Pages

### Paso 1: Crear Repositorio en GitHub

1. Ve a [github.com](https://github.com) y crea un nuevo repositorio
2. Nómbralo como quieras (ej: `mi-portfolio`)
3. **NO** inicialices con README

### Paso 2: Configurar el Proyecto

Edita `next.config.js` (líneas 3-4):

```javascript
// Reemplaza 'portfolio-nextjs' con el nombre de TU repositorio
basePath: process.env.NODE_ENV === 'production' ? '/mi-portfolio' : '',
assetPrefix: process.env.NODE_ENV === 'production' ? '/mi-portfolio/' : '',
```

### Paso 3: Subir a GitHub

```bash
# Inicializa git (si aún no lo has hecho)
git init
git add .
git commit -m "Mi portfolio inicial"

# Conecta con tu repositorio (reemplaza 'tuusuario' y 'mi-portfolio')
git branch -M main
git remote add origin https://github.com/tuusuario/mi-portfolio.git
git push -u origin main
```

### Paso 4: Activar GitHub Pages

1. Ve a tu repositorio en GitHub
2. Click en **Settings** (Configuración)
3. Click en **Pages** en el menú lateral
4. En **Source**, selecciona **GitHub Actions**
5. ¡Espera 2-3 minutos!

Tu sitio estará en: `https://tuusuario.github.io/mi-portfolio/` 🌐

---

## 🎨 Personalización Rápida

### Cambiar Colores

Edita `src/app/globals.css` (líneas 9-14):

```css
:root {
  --color-primary: #00ff88;    /* Verde neón */
  --color-secondary: #0099ff;  /* Azul */
  --color-accent: #ff0066;     /* Rosa */
  --color-bg-dark: #0a0e1a;    /* Fondo */
  --color-bg-darker: #050810;  /* Más oscuro */
}
```

**Paletas sugeridas:**

```css
/* Opción 1: Sunset */
--color-primary: #ff6b6b;
--color-secondary: #ffa500;
--color-accent: #ff1493;

/* Opción 2: Ocean */
--color-primary: #00d4ff;
--color-secondary: #0080ff;
--color-accent: #00ffcc;

/* Opción 3: Forest */
--color-primary: #00ff88;
--color-secondary: #00cc70;
--color-accent: #88ff00;
```

### Agregar tus Proyectos

Edita `src/components/Projects.tsx` (línea 5):

```typescript
const projects = [
  {
    title: 'Mi App E-Commerce',
    description: 'Tienda online con carrito de compras y pagos.',
    tech: ['React', 'Node.js', 'MongoDB'],
    link: 'https://github.com/tuusuario/ecommerce',
    gradient: 'from-[var(--color-primary)] to-[var(--color-secondary)]'
  },
  // Agrega más proyectos aquí...
]
```

### Actualizar Skills

Edita `src/components/Skills.tsx` (línea 5):

```typescript
const skillCategories = [
  {
    title: 'Frontend',
    skills: [
      { name: 'React', level: 90 },    // Cambia el nivel 0-100
      { name: 'Next.js', level: 85 },
      // Agrega más skills...
    ]
  },
  // Más categorías...
]
```

---

## 🐛 Solución de Problemas

### Error: "Module not found"
```bash
rm -rf node_modules package-lock.json
npm install
```

### El sitio no se despliega
1. Verifica que el nombre del repositorio en `next.config.js` sea correcto
2. En GitHub → Settings → Pages, asegúrate de seleccionar **GitHub Actions**
3. Revisa la pestaña **Actions** en GitHub para ver errores

### Los estilos no se ven
1. Limpia el caché: `rm -rf .next`
2. Reconstruye: `npm run build`

---

## 📚 Recursos Adicionales

- **Next.js Docs**: https://nextjs.org/docs
- **TailwindCSS**: https://tailwindcss.com/docs
- **TypeScript**: https://www.typescriptlang.org/docs
- **GitHub Pages**: https://docs.github.com/pages

---

## ✅ Checklist de Personalización

- [ ] Cambiar nombre en Hero
- [ ] Actualizar biografía en About
- [ ] Agregar tus proyectos
- [ ] Modificar skills
- [ ] Actualizar información de contacto
- [ ] Cambiar enlaces sociales
- [ ] Personalizar colores (opcional)
- [ ] Configurar `next.config.js` con tu repo
- [ ] Subir a GitHub
- [ ] Activar GitHub Pages

---

¿Necesitas ayuda? Abre un issue en el repositorio o contáctame. ¡Buena suerte! 🚀
