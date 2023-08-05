import React from "react";
import Image from "next/image";

interface WeatherForecastData {
  datetime_f: number;
  temperature_f: number;
  description_f: string;
  humidity_f: number;
  wind_speed_f: number;
  date_f: string;
  pressure_f: number;
  feels_like_f: number;
  icon_f: string;
  main_f: string;
}

// Props interface for the WeatherForecastComponent
interface WeatherForecastComponentProps {
  weather_forecast: WeatherForecastData[];
}

function TodayWeatherHighlight({ weather_forecast }: WeatherForecastComponentProps) {
  const weather_forecast_reduced = weather_forecast?.splice(32)

  return (
    <section>
      <header className=" text-xl xl:text-2xl font-medium">Today at</header>

      <div className="py-1.5 grid grid-cols-4 md:grid-cols-6 lg:grid-cols-8 text-sm md:gap-x-1.5 gap-y-2 gap-x-2 ">
        {weather_forecast_reduced?.map((data: any, index: number) => {
          // Removing the date "2023-08-05 " from the string
          const timeString: string = data.date_f.slice(11);

          // Removing the seconds part ":00:00" from the string
          const timeWithoutSeconds: string = timeString.slice(0, -6);

          // Converting the time to PM or AM format
          let [hour, minutes]: string[] = timeWithoutSeconds.split(":");
          hour = parseInt(hour, 10).toString();
          const amOrPm: string = parseInt(hour, 10) >= 12 ? "PM" : "AM";
          hour = (parseInt(hour, 10) % 12 || 12).toString(); // Convert to 12-hour format
          const formattedTime: string = `${hour} ${amOrPm}`;
          return (
            <div
              key={index}
              className="flex flex-col items-center justify-center gap-y-[20px] rounded-[10px] pt-3.5 card elevated-card"
            >
              <span>{formattedTime}</span>
              <Image
                src={`http://openweathermap.org/img/w/${data.icon_f}.png`}
                alt="weather-image"
                priority={true}
                quality={100}
                width={38}
                height={38}
              />
              <span className="text-xl xl:text-2xl leading-normal ">{Math.round(data.temperature_f - 273.15)}&deg;<span>C</span></span>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default TodayWeatherHighlight;
