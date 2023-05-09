import { Footer } from '@/components/Footer'
import './globals.css'
import { Montserrat } from 'next/font/google'
import { Header } from '@/components/Header'

const font = Montserrat({ subsets: ['latin'] })

export const metadata = {
  title: 'Referentals',
  description: 'insert description',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
