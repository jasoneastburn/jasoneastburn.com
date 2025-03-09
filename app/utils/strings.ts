export function lowercaseAndHyphenate(input: string): string {
  return input ? input.toLowerCase().replace(/\s+/g, '-') : ''
}
