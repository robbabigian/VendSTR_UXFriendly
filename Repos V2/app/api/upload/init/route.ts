
import { NextResponse } from 'next/server'
export async function POST() {
  // TODO: return pre-signed URL
  return NextResponse.json({ url: 'https://example-upload-url', fields: {} })
}
