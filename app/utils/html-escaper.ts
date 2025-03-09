const { replace } = ''
const ca = /[&<>'"]/g
const esca = {
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;',
  "'": '&#39;',
  '"': '&quot;',
}

function pe(m: keyof typeof esca) {
  return esca[m]
}

export function escape(es: string): string {
  return replace.call(es, ca, pe)
}
