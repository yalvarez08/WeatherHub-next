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

        const url =`http://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${latitude},${longitude}&aqi=yes&alerts=no`

        const response = await axios.get(url);
        console.log("Fetching weather data was successful!");

        return NextResponse.json(response.data);


    } catch (error) {
        console.log("Error fetching weather forecast data.");
        return new Response("Error getting forecast data:", {status: 500});
    }

}