import Image from "next/image";

import CurrentForecast from "@/components/CurrentForecast";
import TodayWeatherDetails from "@/components/TodayWeatherDetails";
import TodayWeatherHighlight from "@/components/TodayWeatherHighlight";
import WeeklyForecast from "@/components/WeeklyForecast";

const weeklyForecastData = [
  {
    day: "monday",
    temp: 5,
    icon: "cloudy",
    date: "27 July",
  },
  {
    day: "monday",
    temp: 5,
    icon: "cloudy",
    date: "27 July",
  },
  {
    day: "monday",
    temp: 5,
    icon: "cloudy",
    date: "27 July",
  },
  {
    day: "monday",
    temp: 5,
    icon: "cloudy",
    date: "27 July",
  },
  {
    day: "monday",
    temp: 5,
    icon: "cloudy",
    date: "27 July",
  },
];

export default function Home() {
  return (
    <main className="bg-black">
      <section className="px-8 xl:px-10 space-y-8 xl:space-y-9 pt-2 xl:pt-4">
        <div>
          <header className="flex items-center justify-between py-3.5">
            <div className="flex items-center gap-x-2 font-semibold text-xl xl:text-2xl">
              <Image
                src="/svg/logo.svg"
                alt="logo-image"
                priority={true}
                quality={100}
                width={50}
                height={50}
                className="object-fit"
              />

              <span className="h-fit">ClimaSense</span>
            </div>

            <div className="flex min-w-[300px] xl:min-w-[428px] items-center gap-x-4 bg-[#2b2b2e] px-4 xl:px-6 py-1 rounded-full">
              <Image
                alt="search-icon"
                priority={true}
                quality={100}
                src="/svg/search-icon.svg"
                width={20}
                height={20}
              />

              <input
                type="text"
                placeholder="Enter City"
                className="bg-inherit flex-1 text-white outline-none border-none py-1 xl:py-2 rounded-full text-opacity-80 text-sm"
              />
            </div>

            <button className="flex items-center space-x-3 rounded-full bg-[#575796] w-fit px-3 py-2  xl:py-2.5 ">
              <Image
                alt="location-icon"
                priority={true}
                quality={100}
                src="/svg/location.svg"
                width={20}
                height={20}
              />

              <span className="text-sm">Current Location</span>
            </button>
          </header>
        </div>

        <div className="flex space-x-8 xl:space-x-10 ">
          <div className="min-w-[280px] xl:min-w-[352px] space-y-8 xl:space-y-[39px]">
            {/* current weather */}
            <CurrentForecast />

            {/* Week Forecast */}
            <WeeklyForecast forecast={weeklyForecastData} />
          </div>

          <div className="flex-1 space-y-10">
            {/* Today Weather Details */}
            <TodayWeatherDetails />

            {/* Today Weather Highlight */}
            <TodayWeatherHighlight />
          </div>
        </div>
      </section>
    </main>
  );
}
