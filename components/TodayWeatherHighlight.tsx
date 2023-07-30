import React from 'react'
import Image from 'next/image'

const TodayWeatherData = [
  {
    time: '12PM',
    temp: 5
  },
  {
    time: '12PM',
    temp: 5
  },
  {
    time: '12PM',
    temp: 5
  },
  {
    time: '12PM',
    temp: 5
  },
  {
    time: '12PM',
    temp: 5
  },
  {
    time: '12PM',
    temp: 5
  },
  {
    time: '12PM',
    temp: 5
  },
  {
    time: '12PM',
    temp: 5
  },
]

function TodayWeatherHighlight() {
  return (
    <section>
      <header className='text-2xl font-medium'>Today at</header>

      <div className='py-1.5 grid grid-cols-8 text-sm space-x-1.5'>
        {
          TodayWeatherData.map((data: any, index: number) => {
            return (
              <div 
                key={index} 
                className='border-white border-2 flex flex-col items-center justify-center gap-y-[20px] rounded-[10px] pt-3.5'
              >
                <span>{ data.time }</span>
                <Image
                  src="/svg/cloudy.svg"
                  alt='weather-image'
                  priority={true}
                  quality={100}
                  width={38}
                  height={38}
                />
                <span className='text-2xl leading-normal '>{ data.temp }&deg;</span>
              </div>
            )
          })
        }
      </div>
    </section>
  )
}

export default TodayWeatherHighlight