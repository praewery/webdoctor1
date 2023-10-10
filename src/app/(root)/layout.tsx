import { ClerkProvider } from '@clerk/nextjs'
import '../globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import Topbar from '../../../components/share/Topbar'
import LeftSidebar from '../../../components/share/LeftSidebar'
import RightSidebar from '../../../components/share/RightSidebar'
import Bottombar from '../../../components/share/Bottombar'

const inter = Inter({ subsets: ['latin'] })

export const matadata = {
  title: 'Onboarding',
  description: 'Onboarding',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>
          <Topbar />


          <main>
            <LeftSidebar/>
            <section className="main-container">
              <div className="w-full max-w-41">
                {children}
              </div>
            </section>
            <RightSidebar/>
          </main>


          <Bottombar />
        </body>
      </html>
    </ClerkProvider>
  )
}
