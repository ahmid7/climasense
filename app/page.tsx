import React, { useState } from "react";

import CurrentForecast from "@/components/CurrentForecast";
import TodayWeatherDetails from "@/components/TodayWeatherDetails";
import TodayWeatherHighlight from "@/components/TodayWeatherHighlight";
import WeeklyForecast from "@/components/WeeklyForecast";
import Header from "@/components/Header";

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
    <main className="">
      <section className="px-4 md:px-8 xl:px-10 space-y-4 md:space-y-8 xl:space-y-9 pt-2 xl:pt-4">
        <Header />

        <div className="flex flex-col md:flex-row md:space-x-6 lg:space-x-8 xl:space-x-10 space-y-3 md:space-y-0">
          <div className="md:min-w-[150px] lg:min-w-[280px] xl:min-w-[352px] space-y-4 md:space-y-8 xl:space-y-[39px]">
            {/* current weather */}
            <CurrentForecast />

            {/* Week Forecast */}
            <WeeklyForecast 
              forecast={weeklyForecastData} 
            />
          </div>

          <div className="md:flex-1 space-y-4 md:space-y-8 xl:space-y-10">
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
