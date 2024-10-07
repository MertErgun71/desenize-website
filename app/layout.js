import './globals.css'
import { Space_Grotesk } from 'next/font/google'

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-space-grotesk',
  weights: [300, 400, 500, 700],
})

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} font-sans`}>
      <body>{children}</body>
    </html>
  )
}