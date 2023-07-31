import React from "react";
import Image from "next/image";

function CurrentForecast() {
  return (
    <section>
      <div className="rounded-[20px] py-3 xl:py-4 border-2 border-white ">
        <div className="px-4">
          <div className="flex gap-x-[56px]">
            <div className="[&_span]:block">
              <span className="text-xl xl:text-2xl font-medium">Now</span>
              <span className="text-4xl xl:text-[40px] ">5&deg;C</span>
            </div>

            <Image
              alt="weather-icon"
              priority={true}
              quality={100}
              src="/svg/weather-icon.svg"
              width={62}
              height={56}
            />
          </div>
          <span className="text-base xl:text-lg font-medium">Broken Cloud</span>
        </div>

        <div className="my-4 xl:my-[18px] w-full h-[3px] bg-[#8a8383]" />

        <div className="space-y-6 xl:space-y-[29px] [&_div]:flex [&_div]:items-center [&_div]:gap-x-4 [&_div]:xl:gap-x-6 px-4">
          <div>
            <Image
              alt="calender-icon"
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
              alt="locationpin-icon"
              src="/images/locationpin.png"
              priority={true}
              quality={100}
              width={32}
              height={32}
              className="object-contain"
            />

            <span>Kwara, Nigeria</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CurrentForecast;
