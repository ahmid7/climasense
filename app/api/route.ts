import { NextResponse } from 'next/server'
 
export async function GET() {
  const res = await fetch('https://climasense-1-g2114242.deta.app/current_weather/lagos', {
    headers: {
      'Content-Type': 'application/json',
    },
  })
  const data = await res.json()
 
  return NextResponse.json({ data })
}