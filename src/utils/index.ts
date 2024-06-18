export function hexToRGBA(hex: string, opacity?: number): string {
  // Remove the hash at the start if it's there
  hex = hex.replace(/^#/, '')

  // Parse the r, g, b values
  const r = parseInt(hex.substring(0, 2), 16)
  const g = parseInt(hex.substring(2, 4), 16)
  const b = parseInt(hex.substring(4, 6), 16)
  const a = parseInt(hex.substring(6, 8) || '0', 16) / 255

  // Return the RGBA string
  return `rgba(${r}, ${g}, ${b}, ${a || opacity})`
}
