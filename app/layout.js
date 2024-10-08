import './globals.css'

import { Ubuntu } from 'next/font/google'

const ubuntu = Ubuntu({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-ubuntu',
  weight: ['300', '400', '500', '700'],
})

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${ubuntu.variable} font-sans`}>
      <body>{children}</body>
    </html>
  )
}