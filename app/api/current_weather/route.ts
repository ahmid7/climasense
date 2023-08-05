import { NextResponse, NextRequest } from 'next/server'
 
export async function GET( req: NextRequest ) {

  const { searchParams } = new URL(req.url)

  const city = searchParams.get('city')

  try {
    const res = await fetch(`https://climasense-1-g2114242.deta.app/weather/${city}`, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
  
    if (!res.ok) {
      // If the response status code is not OK (200), throw an error with the status text
      throw new Error(`Request failed with status: ${res.status} ${res.statusText}`);
    }
  
    const data = await res.json();
  
    // Check if the API response indicates an error due to invalid city
    if (data.code === '404' && data.message === 'city not found') {
      // Handle the case when the city is not found
      return NextResponse.json({ error: 'City not found' });
    }
  
    // If the city is found and the data is valid, return the weather data
    return NextResponse.json({ data });
  } catch (error) {
    // Handle other errors gracefully
    return NextResponse.json({ status: 500 });
  }

 
}

