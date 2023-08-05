// @ts-nocheck
import Image from "next/image";
import React from "react";



type TodayWeatherDetailsProps = {
  humidity: number;
  pressure: number;
  wind_speed: number;
  feels_like: number;
  sunrise: string;
  sunset: string;
  city: string;
}

interface Data {
  pm2_5: number;
  no2: number;
  o3: number;
  so2: number;
  status: number;
}

interface DataItem {
  name: keyof Data;
  value: number;
}


/* eslint-disable react/no-unescaped-entities */
function TodayWeatherDetails({ humidity, pressure, wind_speed, feels_like, sunrise, sunset, city  }:  TodayWeatherDetailsProps ) {

  const [airQualityDetails, setairQualityDetails] = React.useState<DataItem[]>([

  ])

  const weatherDetails = [ 
    { 
      name: "humidity",
      value: humidity,
      icon: "/svg/humidity.svg",
    },
    {
      name: "pressure",
      value: pressure,
      icon: "/svg/pressure.svg",
    },
    {
      name: "wind_speed",
      value: wind_speed,
      icon: "/svg/wind-speed.svg",
    },
    {
      name: "feels like",
      value: feels_like,
      icon: "/svg/feels_like.svg",
    }
  ]

  const sunriseDate = new Date(parseInt(sunrise) * 1000);

  // Convert sunset timestamp to Date object
  const sunsetDate = new Date(parseInt(sunset) * 1000);

  // Get the human-readable time in local time zone
  const sunriseTime = sunriseDate.toLocaleTimeString();
  const sunsetTime = sunsetDate.toLocaleTimeString();
  
  React.useEffect(() => {
    fetch(`https://climasense-1-g2114242.deta.app/coord/${city}`)
      .then(response => response.json())
      .then(( data ) => {
        fetch(`https://climasense-1-g2114242.deta.app/air_quality/lat=${data[0].lat}&lon=${data[0].lon}`)
          .then(response => response.json())
          .then(( data ) => {
            let arr = []
            Object.entries(data).map(([name, value]) => {
              const dataObject = { name, value };
              arr.push(dataObject)
            });
            setairQualityDetails(arr)
          }
          )
      })
      .catch((error) => {
        console.error('Error fetching data', error);
      });
  }, [city])


  return (
    <section className="card elevated-card p-4 rounded-[20px]">
      <header className="text-xl xl:text-2xl font-medium">Today&apos;s Highlights</header>

      <div className="grid lg:grid-cols-2 gap-x-5 xl:gap-x-6 gap-y-4 lg:gap-y-0 pt-8">
        <div className="elevated-card p-4 rounded-[20px]">
          <div className="flex items-center justify-between">
            <span>Air Quality Index</span>
            <span 
              className={`
                 px-5 py-1 rounded-full
                ${ 
                  airQualityDetails[4]?.value == 1 ? 'bg-[#03B454]' :
                  airQualityDetails[4]?.value == 2 ? 'bg-[#40BF00]' :
                  airQualityDetails[4]?.value == 3 ? 'bg-[#808000]' :
                  airQualityDetails[4]?.value == 4 ? 'bg-[#BF4000]' :
                  airQualityDetails[4]?.value == 5 ? 'bg-[#FF0000]' : ''
                 }
              `}
            >
              { 
                airQualityDetails[4]?.value == 1 ? "Good" :
                airQualityDetails[4]?.value == 2 ? "Fair" :
                airQualityDetails[4]?.value == 3 ? "Moderate" :
                airQualityDetails[4]?.value == 4 ? "Poor" :
                airQualityDetails[4]?.value == 5 ? "Very-Poor" : ''
              }
            </span>
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
            { airQualityDetails.length > 0 && airQualityDetails?.map((detail:any, index:number) => (
              <div
                key={index + detail.name}
                className={`
                  ${index % 2 === 0 ? "text-left" : "text-right"}
                  ${ detail.name == 'status' ? 'hidden' : '' } 
                  [&_span]:block 
                `}
              >
                <span className="text-base">{detail.name}</span>
                <span className="text-base xl:text-xl font-medium">{detail.value}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="elevated-card rounded-[20px] p-4">
          <p>Sunrise & Sunset</p>

          <div className="flex lg:flex-col justify-between items-center py-4 lg:py-8 xl:py-10 h-full">
            <div className="flex gap-x-2 ">
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
                <span>{ sunriseTime }</span>
              </div>
            </div>

            <div className="flex gap-x-2">
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
                <span>{ sunsetTime }</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="pt-4 lg:pt-2.5">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-3 gap-x-3 xl:gap-x-4">
          {
            weatherDetails.map(( detail ) => {
              return(
                <div 
                  key={ detail.name }
                  className={`rounded-[20px] elevated-card font-medium p-3 space-y-[28px] }`}
                >
                  <span className="capitalize">{detail.name}</span>
                  <div className="flex gap-x-3 lg:gap-x-5 xl:gap-x-[28px]">
                    <Image
                      src={ detail.icon }
                      alt="detail"
                      priority={true}
                      quality={100}
                      width={30}
                      height={30}
                      className="object-fill"
                    />
                    <span className="text-xl xl:text-2xl">
                      {detail.value} 
                      <span 
                        className="text-sm"
                      >
                        { 
                          detail.name == 'humidity' ? '%' : 
                          detail.name == 'pressure' ? 'HPa' : 
                          detail.name == 'wind_speed' ? 'm/s' : '°C' 
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
