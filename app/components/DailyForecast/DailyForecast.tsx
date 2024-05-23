"use client"
import { useGlobalContext } from '@/app/context/GlobalContext'
import { Skeleton } from '@/components/ui/skeleton';
import { 
    cloudy, 
    drizzleIcon, 
    partlyCloudy, 
    rain, 
    snow, 
    sunny, 
    thunder,
    navigation } from '@/app/utils/Icons';
import React from 'react'
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel';
import moment from 'moment';

function DailyForecast() {
    const {fiveForecast, weather, forecast, current} = useGlobalContext();
    const dailyList = fiveForecast.forecast?.forecastday;

    if(!fiveForecast || !dailyList) {
        return <Skeleton className='h-[12rem] w-full' />
    }

    console.log(dailyList);
    const today = new Date();
    const todayStr = today.toISOString().split("T")[0];
    const todayForecast = dailyList.filter((forecastday: {date: string}) => {
        return forecastday.date.startsWith(todayStr)
    });

    const tempDescription = current?.condition.text;
    const renderIcon = () => {
        switch (tempDescription) {
            case "Partly cloudy":
                return partlyCloudy;
            case "Cloudy":
                return cloudy;
            case "Overcast":
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

  return (
    <div className="air-quality pt-6 px-4 h-[12rem] border rounded-lg flex flex-col gap-8
    dark:bg-dark-grey shadow-sm dark:shadow-none col-span-full sm-2:col-span-2 md:col-span-2 xl:col-span-2"
    >
     <div className="h-full flex gap-10 overflow-hidden">
        {todayForecast.length < 1 ? (
          <div className="flex justify-center items-center">
            <h1 className="text-[3rem] line-through text-rose-500">
              No Data Available!
            </h1>
          </div>
        ) : (
          <div className="w-full">
            <Carousel>
              <CarouselContent>
                {todayForecast?.map(
                  (forecastday: {date: string}) => {
                    return (
                      <CarouselItem
                        key={forecastday.date}
                        className="flex flex-col gap-4 basis-[8.5rem] cursor-grab"
                      >
                        <p className=" text-gray-300">
                          {forecastday.date}
                        </p>
                        <p>{renderIcon()}</p>
                        <p className="mt-4">
                          {current?.temp_f}°F
                        </p>
                      </CarouselItem>
                    );
                  }
                )}
              </CarouselContent>
            </Carousel>
          </div>
        )}
      </div>
    </div>
  )
}

export default DailyForecast