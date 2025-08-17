// src/app/layout.tsx
import { ClerkProvider } from '@clerk/nextjs'
import { Inter, Plus_Jakarta_Sans } from 'next/font/google'
import './globals.css'
import ConvexClientProvider from '@/providers/ConvexProvider'

const inter = Inter({ subsets: ['latin'] })
const jakarta = Plus_Jakarta_Sans({ subsets: ['latin'] })

export const metadata = {
  title: 'Scrittapp',
  description: 'Remember More, Learn Deeper',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`${inter.className} ${jakarta.className}`}>
          <ConvexClientProvider>
            {children}
          </ConvexClientProvider>
        </body>
      </html>
    </ClerkProvider>
  )
}