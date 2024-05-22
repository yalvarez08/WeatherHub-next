"use client"
import { useGlobalContext } from '@/app/context/GlobalContext'
import { cloudy, drizzleIcon, partlyCloudy, rain, snow, sunny, thunder } from '@/app/utils/Icons';
import React, { useState } from 'react'

function Temperature() {
    const {forecast} = useGlobalContext();
    const {current, timezone, name, condition} = forecast;
    const temp = current?.temp_f;
    const feelsTemp = current?.feelslike_f;
    console.log('current temp in F:', temp);
    console.log('feels like:', feelsTemp);
    const [localTime, setLocalTime] = useState("");
    const [currentDay, setCurrentDay] = useState("");

    const tempDescription = current?.condition.text;
    //console.log(tempDescription);
    
    const getIcon = () => {
        switch (tempDescription) {
            case "Partly cloudy":
                return partlyCloudy;
            case "Cloudy":
                return cloudy;
            case "Sunny":
                return sunny;
            case "Light drizzle":
                return drizzleIcon;
            case "Light rain":
                return rain;
            case "Light snow":
                return snow;
            case "Heavy snow":
                return snow;
            case "Moderate or heavy rain with thunder":
                return thunder;
            case "Patchy light rain with thunder":
                return thunder;
        }
    }

    if(!forecast) {
        return <div>Loading...</div>;
    }
    

  return (
    <div className='pt-6 pb-5 border rounded-lg flex-col justify-between dark:bg-dark-grey shadow-sm dark:shadow-none'>
        Temperature
    </div>
  )
  
}

export default Temperature