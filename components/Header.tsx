"use client";

import React, { useState } from "react";
import Image from "next/image";
import { toast } from 'react-toastify';

function Header({ updateCity, refetch }: { updateCity: (value: string) => void, refetch: any } ) {
  
  const [modalOpen, setModalOpen] = useState(false);

  const [ inputSearchCity, setInputSearchCity ] = useState('')

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
      if( inputSearchCity.length > 0 ) {
        updateCity( inputSearchCity )
      }
    }
  }

  // current location
  function getCurrentLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(( position ) => {
        updateCity('Kwara')
        toast.success("Location found successfully.")
      });
    } else {
      toast.error("Geolocation is not supported by this browser.")
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
            src="/svg/find-user.svg"
            width={20}
            height={20}
          />

          <span className="text-sm hidden md:block">Current Location</span>
        </button>

        <div className="md:hidden space-x-5">
          <button className="" onClick={handleOpenModal}>
            <Image
              alt="search-icon"
              priority={true}
              quality={100}
              src="/svg/search-icon.svg"
              width={20}
              height={20}
            />
          </button>

          <button
            className=""
            onClick={ getCurrentLocation }
          >
            <Image
              alt="location-icon"
              priority={true}
              quality={100}
              src="/svg/find-user.svg"
              width={20}
              height={20}
            />
          </button>
        </div>
      </header>

      {/* modal */}
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
                value={ inputSearchCity }
                placeholder="Enter City"
                className="bg-inherit flex-1 outline-none border-none py-1 xl:py-2 text-opacity-80"
                onChange={ updateSearchCity }
                onKeyDown={ handleInputEnter }
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Header;
