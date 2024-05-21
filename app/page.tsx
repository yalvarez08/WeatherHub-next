"use client";
import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";

const Home = () => {
  
  const [data, setData] = useState(null);
  const [location, setLocation] = useState("boston");
  const [error, setError] = useState("");

  // const url = `http://api.weatherapi.com/v1/forecast.json?key=${process.env.REACT_WEATHER_API_KEY}&q=${location}&days=7&aqi=yes&alerts=yes
  // `

  async function fetchData(cityName: string) {
    try {
      const response = await fetch("http://localhost:3000/api/weather?address=" + cityName);
      const jsonData = (await response.json()).data;
      setData(jsonData);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchData("boston");
  }, [])

  

  return (
    <main className="mx-[1rem] lg:mx-[2rem] xl:mx-[6rem] 2xl:mx-[16rem] m-auto">
      <Navbar />
    </main>
  )
}

export default Home