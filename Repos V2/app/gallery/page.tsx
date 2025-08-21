
'use client'
import Link from 'next/link'
const mock = Array.from({length:12}).map((_,i)=>({id:i+1,loves:Math.floor(Math.random()*900)+10}))
export default function Gallery(){
  return (
    <main className="mx-auto max-w-6xl p-6">
      <h1 className="text-2xl font-bold mb-4">Graphics</h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {mock.map(m=>(
          <Link key={m.id} href={`/editor?art=${m.id}`} className="group rounded-xl bg-white shadow p-3 hover:-translate-y-0.5 transition">
            <div className="aspect-square bg-zinc-100 rounded-lg mb-2"/>
            <div className="text-sm text-zinc-500">♥ {m.loves}</div>
          </Link>
        ))}
      </div>
    </main>
  )
}
