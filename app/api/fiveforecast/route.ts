import { NextRequest, NextResponse } from "next/server";
import axios from "axios";

export async function GET(request: NextRequest) {
    try {
        const searchParams = request.nextUrl.searchParams;
        const apiKey = process.env.REACT_WEATHER_API_KEY;
        // const latitude = searchParams.get("lat");
        // const longitude = searchParams.get("lon");
        const latitude = 51.52;
        const longitude = -0.11;

        const url =`http://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${latitude},${longitude}&days=5&aqi=yes`

        const dailyRes = await fetch(url, {
            next: {revalidate: 3600},
        });
        
        console.log("Fetching five day data was successful!");
        const dailyData = await dailyRes.json();
        return NextResponse.json(dailyData);

    } catch (error) {
        console.log("Error fetching daily forecast data.");
        return new Response("Error getting daily data:", {status: 500});
    }

}