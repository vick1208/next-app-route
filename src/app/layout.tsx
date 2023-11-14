"use client"
// import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from './navbar'
import {usePathname} from 'next/navigation';

const inter = Inter({ subsets: ['latin'] })
const disabledNav= ["/login","/register"]

// export const metadata: Metadata = {
//   title: 'Create Next App',
//   description: 'Generated by create next app',
// }

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  const pathname = usePathname();

  return (
    <html lang="en">
      <body className={inter.className}>
        {!disabledNav.includes(pathname) && <Navbar/>}
        
        {children}
      </body>
    </html>
  )
}
