import Image from 'next/image'

export default function Home() {
  return (
    <main className="bg-black">
      <section className='px-10'>
        <div>
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
      </section>
    </main>
  )
}
