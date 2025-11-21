import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/ThemeProvider'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'ER.Sanjaya Joshi | Civil Engineer Portfolio',
  description: 'Professional portfolio of ER.Sanjaya Joshi showcasing civil engineering projects, structural designs, CAD drawings, site supervision, and surveying work. Experienced in AutoCAD, STAAD Pro, ETABS, and Revit.',
  keywords: ['civil engineer', 'Sanjaya Joshi', 'structural design', 'AutoCAD', 'STAAD Pro', 'ETABS', 'Revit', 'construction', 'surveying', 'site supervision'],
  authors: [{ name: 'Sanjaya Joshi' }],
  openGraph: {
    title: 'ER.Sanjaya Joshi | Civil Engineer Portfolio',
    description: 'Professional civil engineering portfolio of ER.Sanjaya Joshi showcasing structural projects and design work',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider>
          <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-grow">
              {children}
            </main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
