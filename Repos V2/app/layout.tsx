
import './globals.css'
export const metadata = { title: 'SwiftPOD UI', description: 'Graphic-first POD' }
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-zinc-50 text-zinc-900">{children}</body>
    </html>
  )
}
