import localFont from 'next/font/local'

const quoteFont = localFont({ src: '../public/fonts/sometimes.ttf' })

export default function Quote({ quotes }) {
  const quote = quotes[Math.floor(Math.random() * quotes.length)]
  return (
    <div>
      <div className={`${quoteFont.className} text-center text-7xl`}>&quot;{quote.quote}&quot;</div>
      <div className="pb-5 pt-2 text-center">—{quote.author}</div>
    </div>
  )
}
