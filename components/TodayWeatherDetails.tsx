import React from 'react'

function TodayWeatherDetails() {
  return (
    <section className='border-2 border-white p-4 rounded-[20px]'>
      <header className='text-2xl font-medium'>Today's Highlights</header>

      <div className='grid grid-cols-2'>
        <div className='border-2 border-white p-4 rounded-[20px]'>
          <div className='flex items-center justify-between'>
            <span>Air Quality</span>
            <span className='bg-[#03B454] px-5 py-1 rounded-full'>Good</span>
          </div>
        </div>

        <div>

        </div>
      </div>

      <div>

      </div>
    </section>
  )
}

export default TodayWeatherDetails