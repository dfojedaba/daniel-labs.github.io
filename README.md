# Portfolio Next.js 🚀

Portfolio profesional desarrollado con Next.js, TypeScript y TailwindCSS con un diseño moderno y futurista.

## ✨ Características

- **Diseño Moderno**: Interfaz atractiva con gradientes, animaciones y efectos visuales
- **Sistema de Configuración Centralizado**: Todo editable desde `config.json`
- **Multiidioma**: Soporte para Español e Inglés
- **Totalmente Responsive**: Optimizado para todos los dispositivos
- **Performance**: Optimizado para carga rápida y SEO
- **TypeScript**: Código tipado para mayor robustez
- **Animaciones**: Transiciones suaves y efectos interactivos
- **Fácil Personalización**: Sin necesidad de tocar código

## 🛠️ Tecnologías

- [Next.js 14](https://nextjs.org/)
- [React 18](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [TailwindCSS](https://tailwindcss.com/)

## 📦 Instalación

1. Clona este repositorio:
```bash
git clone https://github.com/tuusuario/portfolio-nextjs.git
cd portfolio-nextjs
```

2. Instala las dependencias:
```bash
npm install
# o
yarn install
# o
pnpm install
```

3. Ejecuta el servidor de desarrollo:
```bash
npm run dev
# o
yarn dev
# o
pnpm dev
```

4. Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

## 🎨 Personalización Fácil

### ⚡ Archivo de Configuración (`config.json`)

**TODO el contenido se edita desde un solo archivo: `config.json`**

Este archivo controla:
- ✅ Información personal (nombre, email, teléfono)
- ✅ Redes sociales (GitHub, LinkedIn, Twitter)
- ✅ Colores del tema
- ✅ Fuentes tipográficas
- ✅ Textos en español e inglés
- ✅ Proyectos y descripciones
- ✅ Skills y niveles
- ✅ Metadatos SEO

### 📝 Guías de Personalización

Lee estas guías para personalizar tu portfolio:

1. **[CONFIG-GUIDE.md](CONFIG-GUIDE.md)** - Guía completa para editar `config.json`
2. **[QUICKSTART.md](QUICKSTART.md)** - Inicio rápido
3. **[I18N-GUIDE.md](I18N-GUIDE.md)** - Guía de internacionalización

### Ejemplo Rápido: Cambiar Tu Información

Abre `config.json` y edita:

```json
{
  "personal": {
    "name": "Tu Nombre Aquí",
    "email": "tu@email.com",
    "phone": "+57 300 123 4567",
    "social": {
      "github": "https://github.com/tuusuario",
      "linkedin": "https://linkedin.com/in/tuusuario"
    }
  }
}
```

### Ejemplo: Cambiar Colores del Tema

```json
{
  "theme": {
    "colors": {
      "primary": "#00ff88",    // Verde neón
      "secondary": "#0099ff",  // Azul
      "accent": "#ff0066"      // Rosa
    }
  }
}
```

## 📤 Despliegue en GitHub Pages

### Paso 1: Preparar el proyecto

1. Actualiza el `basePath` en `next.config.js` con el nombre de tu repositorio:

```javascript
basePath: process.env.NODE_ENV === 'production' ? '/tu-repositorio' : '',
assetPrefix: process.env.NODE_ENV === 'production' ? '/tu-repositorio/' : '',
```

### Paso 2: Crear el repositorio en GitHub

1. Crea un nuevo repositorio en GitHub llamado `tu-repositorio`
2. Inicializa git y sube tu código:

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/tuusuario/tu-repositorio.git
git push -u origin main
```

### Paso 3: Configurar GitHub Actions

1. Crea el archivo `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4
        
      - name: Setup Node
        uses: actions/setup-node@v4
        with:
          node-version: '20'
          
      - name: Install dependencies
        run: npm ci
        
      - name: Build
        run: npm run build
        
      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: ./out

  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    needs: build
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

2. Sube los cambios:

```bash
git add .
git commit -m "Add GitHub Actions deployment"
git push
```

### Paso 4: Habilitar GitHub Pages

1. Ve a tu repositorio en GitHub
2. Click en **Settings** → **Pages**
3. En **Source**, selecciona **GitHub Actions**
4. Espera a que se complete el despliegue

Tu sitio estará disponible en: `https://tuusuario.github.io/tu-repositorio/`

## 🚀 Despliegue Alternativo (Vercel)

También puedes desplegar fácilmente en Vercel:

1. Conecta tu repositorio en [vercel.com](https://vercel.com)
2. Configura el proyecto (Vercel detectará automáticamente Next.js)
3. Despliega

## 📝 Scripts Disponibles

- `npm run dev` - Inicia el servidor de desarrollo
- `npm run build` - Construye la aplicación para producción
- `npm run start` - Inicia el servidor de producción
- `npm run lint` - Ejecuta el linter

## 🤝 Contribuciones

Las contribuciones son bienvenidas. Si encuentras algún error o tienes sugerencias:

1. Fork el proyecto
2. Crea una rama (`git checkout -b feature/amazing-feature`)
3. Commit tus cambios (`git commit -m 'Add amazing feature'`)
4. Push a la rama (`git push origin feature/amazing-feature`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Siéntete libre de usarlo para tu portfolio personal.

## 📧 Contacto

Tu Nombre - [@tuusuario](https://twitter.com/tuusuario) - tu@email.com

Link del Proyecto: [https://github.com/tuusuario/portfolio-nextjs](https://github.com/tuusuario/portfolio-nextjs)

---

⭐ Si te gustó este proyecto, dale una estrella en GitHub!
