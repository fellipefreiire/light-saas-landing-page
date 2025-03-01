import type { Metadata } from 'next'
import { DM_Sans as DMSans } from 'next/font/google'
import './globals.css'
import clsx from 'clsx'

const dmSans = DMSans({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Light Saas Landing Page',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="relative">
      <body className={clsx(dmSans.className, 'antialiased bg-[#EAEEFE]')}>
        {children}
      </body>
    </html>
  )
}
