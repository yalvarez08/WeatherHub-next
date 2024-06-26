"use client";
import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Temperature from "./components/Temperature/Temperature";
import AirQuality from "./components/AirQuality/AirQuality";
import Sunset from "./components/Sunset/Sunset";
import Wind from "./components/Wind/Wind";
import DailyForecast from "./components/DailyForecast/DailyForecast";
import UVIndex from "./components/UVIndex/UVIndex";

const Home = () => {
  
  return (
    <main className="mx-[1rem] lg:mx-[2rem] xl:mx-[6rem] 2xl:mx-[16rem] m-auto">
      <Navbar />
      <div className="pb-4 flex flex-col gap-4 md:flex-row">
        <div className="flex flex-col gap-4 w-full min-w-[18rem] md:w-[35rem]">
          <Temperature />
        </div>
        <div className="flex flex-col w-full">
          <div className="gadgets grid h-full gap-4 col-span-full sm-2:col-span-2 lg:grid-cols-3 xl:grid-cols-4">
            <AirQuality />
            <Sunset />
            <Wind />
            <DailyForecast />
            <UVIndex />
          </div>
        </div>
      </div>
    </main>
  )
}

export default Home