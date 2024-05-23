"use client";
import React from 'react'
import { useGlobalContext } from '@/app/context/GlobalContext';
import { Skeleton } from '@/components/ui/skeleton';
import { sun } from '@/app/utils/Icons';

const UVIndex = () => {
    const {weather} = useGlobalContext();
    const {current, forecast} = weather;
    const uv = current?.uv;

    if (!uv) {
        return <Skeleton className="h-[12rem] w-full" />;
    }

    const uvLevel = (uv: number) => {
        if (uv <= 2) {
          return {
            text: "Low",
            protection: "No protection required.",
          };
        } else if (uv <= 5) {
          return {
            text: "Moderate",
            protection: "Stay in shaded areas.",
          };
        } else if (uv <= 7) {
          return {
            text: "High",
            protection: "Wear a hat and sunglasses.",
          };
        } else if (uv <= 10) {
          return {
            text: "Very High",
            protection: "Apply sunscreen, stay indoors if possible.",
          };
        } else if (uv > 10) {
          return {
            text: "Extreme",
            protection: "Extreme heat! Avoid being outside.",
          };
        } else {
          return {
            text: "Extreme",
            protection: "Avoid being outside.",
          };
        }};

  return (
    <div className="pt-6 pb-5 px-4 h-[12rem] border rounded-lg flex flex-col gap-5 dark:bg-dark-grey shadow-sm dark:shadow-none">
      <div className="top">
        <h2 className="flex items-center gap-2 font-medium">{sun} Uv Index</h2>
        <div className="pt-4 flex flex-col gap-1">
          <p className="text-2xl">
            {uv}
            <span className="text-sm">
              - {uvLevel(uv).text}
            </span>
          </p>
        </div>
      </div>

      <p className="text-sm">{uvLevel(uv).protection}</p>
    </div>
  )
}

export default UVIndex