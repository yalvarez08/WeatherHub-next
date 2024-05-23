import axios from "axios";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
    try {
        const searchParams = request.nextUrl.searchParams;
        const apiKey = process.env.REACT_WEATHER_API_KEY;
        // const latitude = searchParams.get("lat");
        // const longitude = searchParams.get("lon");
        const latitude = 51.52;
        const longitude = -0.11;

        const url =`http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${latitude},${longitude}&aqi=yes`

        const res = await axios.get(url);
        console.log("Fetching air quality data was successful!");

        return NextResponse.json(res.data);
    } catch(error) {
        console.log("Error in fetching current air quality", error);
        return new Response("Error getting air quality data", {status: 500});
    }
    
}