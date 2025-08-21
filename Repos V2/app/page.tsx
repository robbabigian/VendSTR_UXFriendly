
import Link from 'next/link'
export default function Home() {
  return (
    <main className="mx-auto max-w-6xl p-6 space-y-8">
      <header className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">SwiftPOD</h1>
        <nav className="space-x-4">
          <Link href="/gallery">Explore</Link>
          <Link href="/editor">Start designing</Link>
        </nav>
      </header>
      <section className="rounded-2xl bg-white p-8 shadow">
        <h2 className="text-2xl font-semibold">Find a graphic you love. We’ll put it on anything.</h2>
        <div className="mt-6 flex gap-3">
          <Link className="rounded-xl bg-black text-white px-4 py-2" href="/editor">Upload your art</Link>
          <Link className="rounded-xl bg-zinc-900/5 px-4 py-2" href="/gallery">Browse designs</Link>
        </div>
      </section>
    </main>
  )
}
