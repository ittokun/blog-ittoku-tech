import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'ittoku-tech',
  description: 'Here is ittokunvim portfolio site',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  )
}
