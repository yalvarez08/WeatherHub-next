"use client"
import { useGlobalContext } from '@/app/context/GlobalContext'
import { thermo } from '@/app/utils/Icons';
import { Progress } from '@/components/ui/progress';
import { Skeleton } from '@/components/ui/skeleton';
import { formToJSON } from 'axios';
import React from 'react'

function AirQuality() {
    const {airQuality} = useGlobalContext();
    const airCO = airQuality.current?.air_quality.co;
    const airNO2 = airQuality.current?.air_quality.no2;
    const airO3 = airQuality.current?.air_quality.o3;
    const airSO2 = airQuality.current?.air_quality.so2;
    //console.log(airQuality);
    

    //check air quality availablity
    if (!airQuality) {
        return <Skeleton className='h-[12rem] w-full col-span-2 md:col-span-full'/>
    }

  return (
    <div
      className="air-quality pt-6 px-4 h-[12rem] border rounded-lg flex flex-col gap-8
       dark:bg-dark-grey shadow-sm dark:shadow-none col-span-full sm-2:col-span-2 md:col-span-2 xl:col-span-2"
    >
      <h2 className="flex items-center gap-2 font-medium">
        {thermo}Air Quality
      </h2>
      <Progress value={airCO} max={100} className="progress" />
      <p className="text-sm">co: {airCO} no2: {airNO2} o3: {airO3} so2: {airSO2}</p>
      

    </div>
  )
}

export default AirQuality