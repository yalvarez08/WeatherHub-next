"use client"
import React from 'react'
import { useGlobalContext } from '@/app/context/GlobalContext'
import { Skeleton } from '@/components/ui/skeleton';
import { sunset } from '@/app/utils/Icons';

function Sunset() {
    const {weather} = useGlobalContext();
    const {current, forecast, condition, location} = weather;
    const sunsetTime = forecast?.forecastday[0].astro.sunset;
    const moonriseTime = forecast?.forecastday[0].astro.moonrise;


    if (!forecast || !sunsetTime) {
        return <Skeleton className="h-[12rem] w-full" />;
    }

  return (
    <div className="pt-6 pb-5 px-4 h-[12rem] border rounded-lg flex flex-col gap-8 dark:bg-dark-grey shadow-sm dark:shadow-none">
      <div className="top">
        <h2 className="flex items-center gap-2 font-medium">{sunset}Sunset</h2>
        <p className="pt-4 text-2xl">{sunsetTime}</p>
      </div>

      <p className="text-sm">Moonrise: {moonriseTime}</p>
    </div>
  )
}

export default Sunset