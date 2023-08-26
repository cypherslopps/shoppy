import '@/styles/globals.css'
import type { Metadata } from 'next';
import Navigation from "@/components/Navigation";
import Providers from "@/providers/Providers";
// import { Inter } from 'next/font/google'

// const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Shoppy',
  description: 'Ecommerce app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="w-11/12 mx-auto grid space-y-7">
        {/* Navigation */}
        <Navigation />

        <main>
          <Providers>
            {children}
          </Providers>
        </main>

        {/* Cart dropdown */}
        <div className="cart-dropdown-root"></div>
      </body>
    </html>
  )
}
