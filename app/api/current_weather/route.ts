import { NextResponse, NextRequest } from 'next/server'
 
export async function GET( req: NextRequest ) {

  const { searchParams } = new URL(req.url)

  const city = searchParams.get('city')

  const res = await fetch(`https://climasense-1-g2114242.deta.app/weather/${city}`, {
    headers: {
      'Content-Type': 'application/json',
    },
  })
  
  const data = await res.json()
 
  return NextResponse.json({ data })
}