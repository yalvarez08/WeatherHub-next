import { NextRequest, NextResponse } from "next/server";
import axios from "axios";

export async function GET(request: NextRequest) {
    try {
        const searchParams = request.nextUrl.searchParams;
        const latitude = searchParams.get("lat");
        const longitude = searchParams.get("lon");

        const url =`http://api.weatherapi.com/v1/forecast.json?key=${process.env.REACT_WEATHER_API_KEY}&q=${latitude},${longitude}&days=7&aqi=yes&alerts=yes`

        const response = await axios.get(url);
        return NextResponse.json(response.data);


    } catch (error) {
        console.log("Error fetching weather forecast data.");
        return new Response("Error getting forecast data:", {status: 500});
    }

}