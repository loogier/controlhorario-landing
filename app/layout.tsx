import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Control Horario - Gestiona tu tiempo laboral de forma eficiente',
  description: 'Aplicación móvil para el registro y control de horarios laborales. Gestiona tus jornadas, exporta informes y cumple con la normativa laboral.',
  keywords: ['control horario', 'registro jornada', 'gestión tiempo', 'horario laboral', 'fichaje', 'app trabajo'],
  authors: [{ name: 'Control Horario' }],
  openGraph: {
    title: 'Control Horario - Gestiona tu tiempo laboral de forma eficiente',
    description: 'Aplicación móvil para el registro y control de horarios laborales. Gestiona tus jornadas, exporta informes y cumple con la normativa laboral.',
    type: 'website',
    locale: 'es_ES',
    siteName: 'Control Horario',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Control Horario - Gestiona tu tiempo laboral de forma eficiente',
    description: 'Aplicación móvil para el registro y control de horarios laborales.',
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  )
}
