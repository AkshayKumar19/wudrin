import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Wudrin - Launching Soon | Wooden & Metal Decorative Items",
  description:
    "Wudrin is an online store for exquisite wooden and metal decorative items. Sign up to be notified when we launch.",
    generator: 'v0.dev'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}



import './globals.css'