import { theme } from '@/lib/config'

export function applyThemeColors() {
  if (typeof document === 'undefined') return

  const root = document.documentElement
  const colors = theme.colors

  root.style.setProperty('--color-primary', colors.primary)
  root.style.setProperty('--color-secondary', colors.secondary)
  root.style.setProperty('--color-accent', colors.accent)
  root.style.setProperty('--color-bg-dark', colors.bgDark)
  root.style.setProperty('--color-bg-darker', colors.bgDarker)
  root.style.setProperty('--color-text', colors.text)
  root.style.setProperty('--color-text-muted', colors.textMuted)
}
