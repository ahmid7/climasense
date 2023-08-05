"use client"

import React, { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

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

  const [ city, setCity ] = useState('kwara')

  const { isLoading, error, data, isFetching, refetch } = useQuery({
    queryKey: ['repoData'],
    queryFn: () =>
      axios
        .get(`/api/current_weather?city=${city}`)
        .then((res) => res.data),
  })

  function updateCity(value: string) {
    setCity(value)
  }

  React.useEffect(() => {
    refetch()
  }, [city])

  

  return (
    <main className="">
      <section className="px-4 md:px-8 xl:px-10 space-y-4 md:space-y-8 xl:space-y-9 pt-2 xl:pt-4">
        <Header 
          updateCity={ updateCity }
          refetch = { refetch }
        />

        <div className="flex flex-col md:flex-row md:space-x-6 lg:space-x-8 xl:space-x-10 space-y-3 md:space-y-0">
          <div className="md:min-w-[150px] lg:min-w-[280px] xl:min-w-[352px] space-y-4 md:space-y-8 xl:space-y-[39px]">
            {/* current weather */}
            <CurrentForecast 
              { ...data?.data.current_weather }
            />

            {/* Week Forecast */}
            <WeeklyForecast 
              forecast={ weeklyForecastData } 
            />
          </div>

          <div className="md:flex-1 space-y-4 md:space-y-8 xl:space-y-10">
            {/* Today Weather Details */}
            <TodayWeatherDetails 
            
            />

            {/* Today Weather Highlight */}
            <TodayWeatherHighlight 
              weather_forecast= { ...data?.data.weather_forecast }
            />
          </div>
        </div>
      </section>
    </main>
  );
}
