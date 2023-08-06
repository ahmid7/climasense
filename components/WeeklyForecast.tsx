// @ts-nocheck comment

import React from "react";
import Image from "next/image";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { toast } from 'react-toastify';

type forecast = {
  city: string;
}

function WeeklyForecast({ city }: forecast ) {

  const [ data, setData ] = React.useState([])

  React.useEffect(() => {
    fetch(`https://dataservice.accuweather.com/locations/v1/search?q=${city}&apikey=${process.env.NEXT_PUBLIC_ACCUWEATHER_API_KEY}`)
      .then(response => response.json())
      .then(( data ) => {
        fetch(`https://dataservice.accuweather.com/forecasts/v1/daily/5day/${data[0].Key}?metric=true&apikey=${process.env.NEXT_PUBLIC_ACCUWEATHER_API_KEY}`)
          .then(response => response.json())
          .then(( data ) => {
            setData(data.DailyForecasts)
          }
          )
      })
      .catch((error) => {
        console.error('Error fetching data', error);
      });
  }, [city])

  return (
    <section className="">
      <header className="capitalize font-semibold text-xl xl:text-2xl ">
        5 days Forecast
      </header>

      <div className="py-4 px-4 my-[9px] elevated-card rounded-[20px] space-y-5 card">
        {data?.map((data, index) => {
          const date = new Date(data.Date);

          const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
          const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
          const dayOfWeek = daysOfWeek[date.getDay()];
          const month = months[date.getMonth()];
          const dayOfMonth = date.getDate();
          return (
            <div key={index} className="flex justify-between items-center">
              <div className="flex space-x-5 lg:space-x-[27px] items-center">
                <div className="flex items-center space-x-4 lg:space-x-5">
                  <Image
                    src="/svg/weather-icon.svg"
                    alt="weather-icon"
                    priority={true}
                    quality={100}
                    width={19.08}
                    height={19.08}
                  />

                  <span>{data?.Temperature.Minimum.Value}&deg;C</span>
                </div>

                <span>{dayOfMonth } { month }</span>
              </div>

              <span className="capitalize text-center">{dayOfWeek}</span>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default WeeklyForecast;
