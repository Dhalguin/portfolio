import type { Metadata } from 'next'
import { Salsa } from 'next/font/google'
import './globals.css'

const salsa = Salsa({
  subsets: ['latin'],
  weight: ['400'],
})

export const metadata: Metadata = {
  title: 'Dhalgüin Hernández | Portafolio',
  description: 'Fullstack Developer',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
        />
      </head>
      <body className={`${salsa.className} bg-[#121212] text-white px-24`}>
        <main className="min-h-screen mb-4">{children}</main>
      </body>
    </html>
  )
}
