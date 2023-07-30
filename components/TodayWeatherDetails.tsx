import Image from 'next/image'
import React from 'react'

const airQualityDetails = [
  {
    name: "PM25",
    value: "3.90"
  },
  {
    name: "SO2",
    value: "7.75"
  },
  {
    name: "NO2",
    value: "33.6"
  },
  {
    name: "O3",
    value: "38.6"
  }
]

function TodayWeatherDetails() {
  return (
    <section className='border-2 border-white p-4 rounded-[20px]'>
      <header className='text-2xl font-medium'>Today's Highlights</header>

      <div className='grid grid-cols-2 gap-x-6 pt-8'>
        <div className='border-2 border-white p-4 rounded-[20px]'>
          <div className='flex items-center justify-between'>
            <span>Air Quality Index</span>
            <span className='bg-[#03B454] px-5 py-1 rounded-full'>Good</span>
          </div>

          <div className='grid place-content-center py-6'>
            <Image
              src="/svg/air-quality.svg"
              alt='air-quality-image'
              priority={true}
              quality={100}
              width={30}
              height={30}
            />
          </div>

          <div className='grid grid-cols-2 items-center gap-y-[27px]'>
            {
              airQualityDetails.map((detail, index) => (
                <div 
                  key={index} 
                  className={`
                    ${index % 2 === 0 ? 'text-left' : 'text-right'} 
                    [&_span]:block 
                  `}
                >
                  <span className='text-base '>{detail.name}</span>
                  <span className='text-xl font-medium'>{detail.value}</span>
                </div>
              )
              )
            }
          </div>
        </div>

        <div className='border-2 border-white rounded-[20px] p-4'>
          <p>Sunrise & Sunset</p>

          <div className='flex flex-col justify-between items-center py-10 h-full'>
            <div className='flex '>
              <Image
                src="/svg/sunrise.svg"
                alt='sunrise-image'
                priority={true}
                quality={100}
                width={50}
                height={20}
            
              />

              <div className='[&_span]:block'>
                <span>Sunrise</span>
                <span>6:46PM</span>
              </div>
            </div>

            <div className='flex'>
              <Image
                src="/svg/sunset.svg"
                alt='sunset-image'
                priority={true}
                quality={100}
                width={50}
                height={20}
            
              />

              <div className='[&_span]:block'>
                <span>Sunset</span>
                <span>5:39PM</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>

      </div>
    </section>
  )
}

export default TodayWeatherDetails