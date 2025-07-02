import type { Metadata } from 'next'
import { Space_Grotesk } from 'next/font/google'
import './globals.css'
import Layout from '@/components/layout'
import { Toaster } from 'react-hot-toast'
import { toastOptions } from '@/lib/toast'
import { LenguageProvider } from '@/contexts/lenguageContext'

const spaceGrotesk = Space_Grotesk({
  variable: '--font-space-grotesk',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Dhalgüin Hernández | Portafolio',
  description: 'My portfolio as Full Srack Developer',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${spaceGrotesk.variable} antialiased`}>
        <LenguageProvider>
          <Layout>{children}</Layout>
        </LenguageProvider>
        <Toaster toastOptions={toastOptions} />
      </body>
    </html>
  )
}
