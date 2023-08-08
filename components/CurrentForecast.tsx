import React from "react";
import Image from "next/image";

import ComponentLoader from "./ComponentLoader";

type CurrentForecastProps = {
  temperature: number;
  icon: string;
  description: string;
  isLoading: boolean;
  city: string;
}

function CurrentForecast({ 
  temperature, 
  icon, 
  description, 
  isLoading,
  city
}: CurrentForecastProps) {
  const [currentDate, setCurrentDate] = React.useState(new Date());

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDate(new Date());
    }, 1000); // Update the date every second

    return () => {
      clearInterval(interval); // Clean up the interval when the component is unmounted
    };
  }, []);

  const formatDate = (date:any) => {
    return new Intl.DateTimeFormat('en-US', {
      weekday: 'long', // "Wednesday"
      day: 'numeric', // "27"
      month: 'long', // "July"
    }).format(date);
  };

  console.log(isLoading)

  return (
    <section className="">
      <div className="rounded-[20px] py-3 xl:py-4 card elevated-card">
        <div className="px-4">
          <div className="flex gap-x-[56px]">
            <div className="[&_span]:block">
              <span className="text-xl xl:text-2xl font-medium">Now</span>
              <span className="text-4xl xl:text-[40px]">{ temperature }&deg;C</span>
            </div>

            <Image
              alt="weather-icon"
              priority={true}
              quality={100}
              src={`http://openweathermap.org/img/w/${icon}.png`}
              width={62}
              height={56}
            />
          </div>
          <span className="text-base xl:text-lg font-medium">{ description }</span>
        </div>

        <div className="my-4 xl:my-[18px] w-full h-[3px] bg-[#8a8383]" />

        <div className="space-y-6 xl:space-y-[29px] [&_div]:flex [&_div]:items-center [&_div]:gap-x-4 [&_div]:xl:gap-x-6 px-4">
          <div>
            <Image
              alt="calender-icon"
              src="/svg/calendar.svg"
              priority={true}
              quality={100}
              width={24}
              height={24}
            />

            <span>{formatDate(currentDate)}</span>
          </div>

          <div>
            <Image
              alt="locationpin-icon"
              src="/svg/pin.svg"
              priority={true}
              quality={100}
              width={24}
              height={24}
            />

            <span>{ city }</span>
          </div>
        </div>
      </div>

      {
        
      }
    </section>
  );
}

export default CurrentForecast;
