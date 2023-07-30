import Image from 'next/image'

export default function Home() {
  return (
    <main className="bg-black">
      <section className='px-10'>
        <div className='pb-9'>
          <header className="flex items-center justify-between py-3.5">
            <div className='flex items-center gap-x-2 font-semibold text-2xl'>
              <Image
                src="/svg/logo.svg"
                alt='logo-image'
                priority={true}
                quality={100}
                width={65}
                height={65}
                className=''
              />

              <span className='h-fit'>ClimaSense</span>
            </div>

            <div className='flex min-w-[428px] items-center gap-x-4 bg-[#2b2b2e] px-6 py-1 rounded-full'>
              <Image
                alt="search-icon"
                priority={true}
                quality={100}
                src="/svg/search-icon.svg"
                width={20}
                height={20}
              />

              <input
                type='text'
                placeholder='Enter City'
                className='bg-inherit flex-1 text-white outline-none border-none py-2 rounded-full text-opacity-80 text-sm'
              />
            </div>

            <button className='flex items-center space-x-3 rounded-full bg-[#575796] w-fit px-3 py-2.5 '>
              <Image
                alt="location-icon"
                priority={true}
                quality={100}
                src="/svg/location.svg"
                width={20}
                height={20}
              />

              <span>
                Current Location
              </span>
            </button>
          </header>
        </div>

        {/* current weather */}
        <div className='rounded-[20px] max-w-[352px] py-4 border-2 border-white '>

          <div className='px-4'>
            <div className='flex gap-x-[56px]'>
              <div className='[&_span]:block'>
                <span className='text-2xl font-medium'>Now</span>
                <span className='text-[40px] '>5'C</span>
              </div>

              <Image
                alt='weather-icon'
                priority={true}
                quality={100}
                src='/svg/weather-icon.svg'
                width={62}
                height={56}
              />
            </div>
            <span className='text-lg font-medium'>Broken Cloud</span>
          </div>


          <div className='my-[18px] w-full h-[3px] bg-[#8a8383]'/>

          <div className='space-y-[29px] [&_div]:flex [&_div]:items-center [&_div]:gap-x-6 px-4'>
            <div>
              <Image
                alt='calender-icon'
                src="/images/calendar.png"
                priority={true}
                quality={100}
                width={24}
                height={24}
              /> 

              <span>Wednesday 26th, July</span>
            </div>

            <div>
              <Image
                alt='locationpin-icon'
                src="/images/locationpin.png"
                priority={true}
                quality={100}
                width={32}
                height={32}
              /> 

              <span>Kwara, Nigeria</span>
            </div>
          </div>
        </div>

        {/* Week Forecast */}
        <div className='py-'>

        </div>
      </section>
    </main>
  )
}
