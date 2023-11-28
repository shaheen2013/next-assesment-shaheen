import { Inter } from 'next/font/google'
import './globals.css'
import { CartProvider } from './context/CartContext'
import Header from './components/Header'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <CartProvider>
          <Header />
          <main className="flex min-h-screen flex-col items-center justify-between p-8 mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
            {children}
          </main>
        </CartProvider>
      </body>
    </html>
  )
}
