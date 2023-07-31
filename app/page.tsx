"use client";
import React, { useState } from "react";
import Image from "next/image";

import CurrentForecast from "@/components/CurrentForecast";
import TodayWeatherDetails from "@/components/TodayWeatherDetails";
import TodayWeatherHighlight from "@/components/TodayWeatherHighlight";
import WeeklyForecast from "@/components/WeeklyForecast";
import Modal from "@/components/Modal";

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
  const [modalOpen, setModalOpen] = useState(false);

  const [searchList, setSearchList] = useState([
    // "lagos",
    // "abuja",
    // "kano",
    // "jos",
    // "kaduna",
    // "ilorin",
    // "ibadan",
  ]);

  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  return (
    <main className="bg-black">
      <section className="px-4 md:px-8 xl:px-10 space-y-4 md:space-y-8 xl:space-y-9 pt-2 xl:pt-4">
        <div>
          <header className="flex items-center justify-between py-3 md:py-3.5">
            <div className="flex items-center gap-x-2 font-semibold text-lg md:text-xl xl:text-2xl">
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

            <div className="cursor-pointer hidden md:flex md:min-w-[250px] lg:min-w-[300px] xl:min-w-[428px] items-center gap-x-4 bg-[#2b2b2e] px-1.5 md:px-4 xl:px-6 py-1.5 md:py-1 rounded-full">
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
                className="bg-inherit flex-1 text-white outline-none border-none py-1 xl:py-2 rounded-full text-opacity-80 text-sm hidden md:block"
              />
            </div>

            <button className="hidden md:flex items-center space-x-3 rounded-full bg-[#575796] w-fit md:px-3 md:py-2  xl:py-2.5">
              <Image
                alt="location-icon"
                priority={true}
                quality={100}
                src="/svg/location.svg"
                width={20}
                height={20}
              />

              <span className="text-sm hidden md:block">Current Location</span>
            </button>

            <button className="md:hidden" onClick={handleOpenModal}>
              <Image
                alt="search-icon"
                priority={true}
                quality={100}
                src="/svg/search-icon.svg"
                width={20}
                height={20}
              />
            </button>
          </header>

          <div
            className={`modalBackdrop ${modalOpen ? "open" : ""}`}
            onClick={handleCloseModal}
          >
            <div className="modalContent" onClick={(e) => e.stopPropagation()}>
              <div className="border-b border-blue-900 flex justify-between items-center px-4">
                <div className="flex gap-x-2 py-2">
                  <Image
                    alt="search-icon"
                    priority={true}
                    quality={100}
                    src="/svg/search-icon.svg"
                    width={18}
                    height={18}
                  />

                  <input
                    type="text"
                    placeholder="Enter City"
                    className="bg-inherit flex-1 outline-none border-none py-1 xl:py-2 text-opacity-80"
                  />
                </div>
              </div>

              <div>
                {searchList.length < 1 && (
                  <div className="flex justify-center items-center h-40 px-4  border-opacity-50 border-white">
                    <p className="text-gray-400">No result found</p>
                  </div>
                )}

                {searchList.length > 0 && (
                  <div className=" pb-10">
                    <p className="border-b border-opacity-50 border-white py-2 text-lg px-4">Results</p>
                    <ul>
                      {
                        searchList.map(( list, index ) => {
                          return (
                            <li key={index} className="border-b border-opacity-50 border-white py-1 px-4">
                              <p>{list}</p>
                            </li>
                          )
                        })
                      }
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row md:space-x-6 lg:space-x-8 xl:space-x-10 space-y-3 md:space-y-0">
          <div className="md:min-w-[150px] lg:min-w-[280px] xl:min-w-[352px] space-y-4 md:space-y-8 xl:space-y-[39px]">
            {/* current weather */}
            <CurrentForecast />

            {/* Week Forecast */}
            <WeeklyForecast forecast={weeklyForecastData} />
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
