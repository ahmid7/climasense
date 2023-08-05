"use client";

import React, { useState } from "react";
import axios from "axios";
import Image from "next/image";
import { useGeolocated } from "react-geolocated";

function Header({ 
  updateCity 
}: { 
  updateCity: (value: string) => void }
) {
  
  const [modalOpen, setModalOpen] = useState(false);

  const [ inputSearchCity, setInputSearchCity ] = useState('')

  const [searchList, setSearchList] = useState([
    // "lagos",
    // "abuja",
    // "kano",
    // "jos",
    // "kaduna",
    // "ilorin",
    // "ibadan",
  ]);

  const { coords, isGeolocationAvailable, isGeolocationEnabled } =
    useGeolocated({
        positionOptions: {
            enableHighAccuracy: false,
        },
        userDecisionTimeout: 5000,
    });

    console.log( coords, isGeolocationAvailable, isGeolocationEnabled )

  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  const updateSearchCity = (e: any) => {
    setInputSearchCity(e.target.value)
  }

  const handleInputEnter = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if( event.key === "Enter" ) {
      updateCity( inputSearchCity )
    }
  }

  function getCurrentLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(( position ) => {
        const { latitude, longitude } = position.coords
        console.log( latitude, longitude )
        const url = `https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&key=${process.env.NEXT_PUBLIC_OPENCAGE_API_KEY}`

        axios
        .get(url)
        .then((response) => {
          const cityData = response.data.results[0];
          if (cityData) {
            const city = cityData.components.city || cityData.components.town || cityData.components.village;
            updateCity( city )
            console.log( city )
          } else {
            console.log('City not found')
          }
        })
        .catch((error) => {
          console.error('Error fetching city:', error.message);
        });
      });
    } else {
      console.log("Geolocation is not supported by this browser.");
    }
  }

  
  return (
    <section>
      <header className="flex items-center justify-between py-3 md:py-3.5 elevate-card">
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

        <div className="hidden md:flex md:min-w-[250px] lg:min-w-[300px] xl:min-w-[428px] items-center gap-x-4 bg-[#2b2b2e] px-1.5 md:px-4 xl:px-6 py-1.5 md:py-1 rounded-full">
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
            value={ inputSearchCity }
            placeholder="Enter City"
            className="bg-inherit flex-1 text-white outline-none py-1 xl:py-2 text-opacity-80 text-sm hidden md:block"
            onChange={ updateSearchCity }
            onKeyDown={ handleInputEnter }
          />
        </div>

        <button 
          className="hidden md:flex items-center space-x-3 rounded-full bg-[#03B454] w-fit md:px-3 md:py-2  xl:py-2.5 hover:bg-opacity-80 focus:bg-opacity-80 transition-all"
          onClick={ getCurrentLocation }
        >
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
        <div className="modalContent glass-container2 z-10" onClick={(e) => e.stopPropagation()}>
          <div className="border-b border-green-900 flex justify-between items-center">
            <div className="flex gap-x-2 py-2 px-4">
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
                <p className="border-b border-opacity-50 border-white py-2 text-lg px-4">
                  Results
                </p>
                <ul>
                  {searchList.map((list, index) => {
                    return (
                      <li
                        key={index}
                        className="border-b border-opacity-50 border-white py-1 px-4"
                      >
                        <p>{list}</p>
                      </li>
                    );
                  })}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Header;
