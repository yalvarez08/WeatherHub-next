import { NextRequest, NextResponse } from "next/server";

export async function GET(request: any) {
    const { searchParams } = new URL(request.url);
    const address = searchParams.get("address");
    const latitude = searchParams.get("lat");
    const longitude = searchParams.get("long");


    let url = "";
    if(address) {
        url = 
        `http://api.weatherapi.com/v1/forecast.json?key=${process.env.REACT_WEATHER_API_KEY}&q=${address}&days=7&aqi=yes&alerts=yes`
    } else {
        url = 
        `http://api.weatherapi.com/v1/forecast.json?key=${process.env.REACT_WEATHER_API_KEY}&q=${latitude},${longitude}&days=7&aqi=yes&alerts=yes`
    }

    const res = await fetch(url);
    const data = await res.json();
    return NextResponse.json( {data});
}