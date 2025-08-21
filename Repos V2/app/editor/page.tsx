
'use client'
import { Stage, Layer, Rect, Image as KImage } from 'react-konva'
import useImage from 'use-image'
import { useState, useMemo } from 'react'

const PRINT_AREA = { x: 60, y: 80, w: 300, h: 380 } // demo print area in px
const MIN_DPI = 150

function DpiBadge({effectiveDpi}:{effectiveDpi:number}){
  const ok = effectiveDpi >= MIN_DPI
  return <span className={"text-xs px-2 py-1 rounded " + (ok ? "bg-green-100 text-green-700" : "bg-amber-100 text-amber-700")}>
    DPI: {Math.round(effectiveDpi)} {ok ? "OK" : "Low"}
  </span>
}

export default function Editor(){
  const [size,setSize] = useState({w:180,h:180})
  const [pos,setPos] = useState({x:120,y:160})
  // assume uploaded art 2000x2000 px at 300 DPI base for demo
  const asset = { pxW: 2000, pxH: 2000, baseDpi: 300 }
  const renderedWidthInches = size.w / 150 /* canvas px-per-inch approx for demo */
  const effectiveDpi = asset.pxW / Math.max(1, renderedWidthInches)

  const clamp = (x:number,y:number)=>{
    const nx = Math.min(Math.max(x, PRINT_AREA.x), PRINT_AREA.x + PRINT_AREA.w - size.w)
    const ny = Math.min(Math.max(y, PRINT_AREA.y), PRINT_AREA.y + PRINT_AREA.h - size.h)
    return {x:nx,y:ny}
  }

  return (
    <main className="mx-auto max-w-6xl p-6 space-y-4">
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-semibold">Editor</h1>
        <div className="space-x-2">
          <DpiBadge effectiveDpi={effectiveDpi}/>
          <button className="px-3 py-1 rounded bg-black text-white">Add to cart</button>
        </div>
      </div>
      <div className="rounded-2xl bg-white p-4 shadow flex gap-6">
        <div className="grow">
          <Stage width={480} height={560}>
            <Layer>
              {/* Product silhouette */}
              <Rect x={0} y={0} width={480} height={560} fill="#f4f4f5" cornerRadius={16} />
              {/* Print area guide */}
              <Rect x={PRINT_AREA.x} y={PRINT_AREA.y} width={PRINT_AREA.w} height={PRINT_AREA.h}
                dash={[6,4]} stroke="#94a3b8" cornerRadius={8}/>
              {/* Draggable art (simplified as color rect) */}
              <Rect
                x={pos.x} y={pos.y} width={size.w} height={size.h} fill="#a78bfa" cornerRadius={8}
                draggable
                onDragMove={e=>{
                  const {x,y} = clamp(e.target.x(), e.target.y())
                  e.target.position({x,y})
                }}
                onDragEnd={e=>{
                  const {x,y} = clamp(e.target.x(), e.target.y())
                  setPos({x,y})
                }}
              />
            </Layer>
          </Stage>
        </div>
        <aside className="w-80 space-y-4">
          <div className="p-3 rounded-lg border">
            <div className="font-medium mb-2">Placement</div>
            <label className="block text-sm">Width (px)
              <input className="w-full border rounded px-2 py-1" type="number" value={size.w}
                onChange={e=>setSize(s=>({...s, w: Math.max(40, Math.min(PRINT_AREA.w, Number(e.target.value)||0))}))}/>
            </label>
            <label className="block text-sm mt-2">Height (px)
              <input className="w-full border rounded px-2 py-1" type="number" value={size.h}
                onChange={e=>setSize(s=>({...s, h: Math.max(40, Math.min(PRINT_AREA.h, Number(e.target.value)||0))}))}/>
            </label>
            <div className="mt-2 text-sm text-zinc-600">Art is constrained to print area.</div>
          </div>
          <div className="p-3 rounded-lg border">
            <div className="font-medium mb-2">Pricing (demo)</div>
            <div className="text-sm">Blank: $8.40</div>
            <div className="text-sm">Print: $4.10</div>
            <div className="font-semibold">Total: $12.50</div>
          </div>
        </aside>
      </div>
    </main>
  )
}
