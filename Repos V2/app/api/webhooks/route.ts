
import crypto from 'crypto'
import { NextResponse } from 'next/server'

function verify(bodyRaw: string, ts: string, sig: string, secret: string){
  const expected = crypto.createHmac('sha256', secret).update(`${ts}.${bodyRaw}`).digest('hex')
  return crypto.timingSafeEqual(Buffer.from(expected), Buffer.from(sig))
}

export async function POST(req: Request) {
  const ts = req.headers.get('x-swiftpod-timestamp') || ''
  const sig = req.headers.get('x-swiftpod-signature') || ''
  const secret = process.env.SWIFTPOD_WEBHOOK_SECRET || ''
  const bodyRaw = await req.text()
  if (!ts || !sig || !secret) return new NextResponse('bad headers', { status: 400 })
  if (Math.abs(Date.now()/1000 - Number(ts)) > 300) return new NextResponse('stale', { status: 401 })
  if (!verify(bodyRaw, ts, sig, secret)) return new NextResponse('invalid', { status: 401 })
  // handle event
  return NextResponse.json({ ok: true })
}
