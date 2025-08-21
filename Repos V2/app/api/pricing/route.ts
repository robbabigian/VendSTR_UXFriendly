
import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  const body = await req.json()
  // TODO: compute from blank_price + print_price via SwiftPOD
  return NextResponse.json({ total: 12.5, breakdown: { blank: 8.4, print: 4.1 } })
}
