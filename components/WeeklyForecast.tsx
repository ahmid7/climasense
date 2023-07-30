import React from "react";
import Image from "next/image";

type forecast = {
  day: string;
  temp: number;
  icon: string;
  date: string;
}[];

function WeeklyForecast({ forecast }: { forecast: forecast }) {
  return (
    <section className="max-w-[352px] pt-[39px]">
      <header className="capitalize font-semibold text-2xl ">
        5 days Forecast
      </header>

      <div className="py-[30px] px-4 my-[9px] border-2 border-white rounded-[20px] space-y-5">
        {forecast.map((data, index) => {
          return (
            <div key={index} className="flex justify-between items-center">
              <div className="flex space-x-[27px] items-center">
                <div className="flex items-center space-x-5">
                  <Image
                    src="/svg/weather-icon.svg"
                    alt="weather-icon"
                    priority={true}
                    quality={100}
                    width={19.08}
                    height={19.08}
                  />

                  <span>{data.temp}&deg;</span>
                </div>

                <span>{data.date}</span>
              </div>

              <span className="capitalize text-center">{data.day}</span>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default WeeklyForecast;
