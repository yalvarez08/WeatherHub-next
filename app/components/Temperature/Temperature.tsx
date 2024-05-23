"use client"
import { useGlobalContext } from '@/app/context/GlobalContext'
import { 
    cloudy, 
    drizzleIcon, 
    partlyCloudy, 
    rain, 
    snow, 
    sunny, 
    thunder,
    navigation } from '@/app/utils/Icons';
import moment from 'moment';
import React, { useState, useEffect } from 'react'

function Temperature() {
    const {weather} = useGlobalContext();
    const {current, forecast, condition, location} = weather;
    const maxTemp = forecast?.forecastday[0].day.maxtemp_f;
    const minTemp = forecast?.forecastday[0].day.mintemp_f;
    const timeZone = location?.localtime;
    const name = location?.name;
    const temp = current?.temp_f;
    const feelsTemp = current?.feelslike_f;
    console.log('current temp in F:', temp);
    console.log('feels like:', feelsTemp);

    //real-time info
    const [localTime, setLocalTime] = useState("");
    const [currentDay, setCurrentDay] = useState("");
    
    const tempDescription = current?.condition.text;
    //console.log(tempDescription);
    
    const renderIcon = () => {
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
            default:
                return sunny;
        }
    }

    //real-time time
    useEffect(() => {
        const interval = setInterval(() => {
            const localMoment = moment().utcOffset(timeZone / 60);
    //         // reformat in 24 hour
            const formattedTime = localMoment.format("HH:mm");
    //         // day of the week
            const day = localMoment.format("dddd");

            setLocalTime(formattedTime);
            setCurrentDay(day);
        }, 100)
        //clear interval
        return () => clearInterval(interval);
    }, []);


    if(!weather) {
        return <div>Loading...</div>;
    }
    
  return (
    <div className='pt-6 pb-5 px-4 border rounded-lg flex-col justify-between dark:bg-dark-grey shadow-sm dark:shadow-none'>
        <p className='flex justify-between items-center'>
            <span className='font-medium'>{currentDay}</span>
            <span className='font-medium'>{localTime}</span>
            </p>
        <p className='pt-2 font-bold flex gap-1'>
            <span>{name}</span>
            <span>{navigation}</span>
        </p>
        <p className='py-10 text-9xl font-bold self-center'>{temp}°</p>
        <div>
            <div>
                <span>{renderIcon()}</span>
                <p className='pt-2 capitalize text-lg font-medium'>{tempDescription}</p>
            </div>
            <p className="flex items-center gap-2">
                <span>Low: {maxTemp}°</span>
                <span>High: {minTemp}°</span>
            </p>
        </div>
    </div>
  )
  
}

export default Temperature