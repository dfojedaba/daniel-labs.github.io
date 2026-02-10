import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Portfolio | Desarrollador Full Stack',
  description: 'Portfolio profesional de desarrollador con proyectos, habilidades y experiencia.',
  keywords: 'desarrollador, portfolio, web developer, full stack, programador',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body>
        <div className="grain-overlay" />
        {children}
      </body>
    </html>
  )
}
