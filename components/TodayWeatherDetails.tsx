import Image from "next/image";
import React from "react";

const airQualityDetails = [
  {
    name: "PM25",
    value: "3.90",
  },
  {
    name: "SO2",
    value: "7.75",
  },
  {
    name: "NO2",
    value: "33.6",
  },
  {
    name: "O3",
    value: "38.6",
  },
];

interface WeatherData {
  temp: number;
  feels_like: number;
  pressure: number;
  humidity: number;
  [key: string]: number; // Add an index signature to allow any other property with a number value
}

const main: WeatherData = {
  "temp": 25.5,
  "feels_like": 26.3,
  "pressure": 1015,
  "humidity": 60,
  "visibility": 10,
}

/* eslint-disable react/no-unescaped-entities */
function TodayWeatherDetails() {
  const weatherDetailsKey = Object.keys(main) as Array<keyof WeatherData>;

  return (
    <section className="border-2 border-white p-4 rounded-[20px]">
      <header className="text-xl xl:text-2xl font-medium">Today&apos;s Highlights</header>

      <div className="grid lg:grid-cols-2 gap-x-5 xl:gap-x-6 gap-y-4 lg:gap-y-0 pt-8">
        <div className="border-2 border-white p-4 rounded-[20px]">
          <div className="flex items-center justify-between">
            <span>Air Quality Index</span>
            <span className="bg-[#03B454] px-5 py-1 rounded-full">Good</span>
          </div>

          <div className="grid place-content-center py-6">
            <Image
              src="/svg/air-quality.svg"
              alt="air-quality-image"
              priority={true}
              quality={100}
              width={30}
              height={30}
            />
          </div>

          <div className="grid grid-cols-2 items-center gap-y-6 xl:gap-y-[27px]">
            {
            airQualityDetails.map((detail, index) => (
              <div
                key={index}
                className={`
                  ${index % 2 === 0 ? "text-left" : "text-right"} 
                  [&_span]:block 
                `}
              >
                <span className="text-base ">{detail.name}</span>
                <span className="text-base xl:text-xl font-medium">{detail.value}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="border-2 border-white rounded-[20px] p-4">
          <p>Sunrise & Sunset</p>

          <div className="flex lg:flex-col justify-between items-center lg:py-8 xl:py-10 h-full">
            <div className="flex ">
              <Image
                src="/svg/sunrise.svg"
                alt="sunrise-image"
                priority={true}
                quality={100}
                width={50}
                height={20}
              />

              <div className="[&_span]:block">
                <span>Sunrise</span>
                <span>6:46PM</span>
              </div>
            </div>

            <div className="flex">
              <Image
                src="/svg/sunset.svg"
                alt="sunset-image"
                priority={true}
                quality={100}
                width={50}
                height={20}
              />

              <div className="[&_span]:block">
                <span>Sunset</span>
                <span>5:39PM</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="pt-4 lg:pt-2.5">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-3 gap-x-3 xl:gap-x-4">
          {
            weatherDetailsKey.map(( key ) => {
              return(
                <div 
                  key={ key }
                  className={`rounded-[20px] border-2 border-white font-medium p-3 space-y-[28px] ${ key === 'temp' ? 'hidden': '' }`}
                >
                  <span className="capitalize">{key}</span>
                  <div className="flex gap-x-3 lg:gap-x-5 xl:gap-x-[28px]">
                    <Image
                      src={`/svg/${key}.svg`}
                      alt="detail"
                      priority={true}
                      quality={100}
                      width={30}
                      height={30}
                      className="object-fill"
                    />
                    <span className="text-xl xl:text-2xl">
                      {main[key]} 
                      <span 
                        className="text-sm"
                      >
                        { 
                          key == 'humidity' ? '%' : 
                          key == 'pressure' ? 'hPa' : 
                          key == 'visibility' ? 'Km' : '°C' 
                        }
                      </span>
                    </span>
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>
    </section>
  );
}

export default TodayWeatherDetails;

/* eslint-enable react/no-unescaped-entities */
