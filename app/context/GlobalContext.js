"use Client";
import axios from "axios";
import React, { useContext, createContext, useState } from "react";
import { useEffect } from "react";

const GlobalContext = createContext();
const GlobalContextUpdate = createContext();


export const GlobalContextProvider = ( {children} ) => {
    const [weather, setWeather] = useState({});
    const [airQuality, setAirQuality] = useState({});
    
    const fetchForecast = async () => {
        try {
            const response = await axios.get("api/weather")
            setWeather(response.data)
            console.log("forecast data:", response.data);

        } catch(error) {
            console.log("Error fetching forecast:", error.message)
        }
    };
    const fetchAirQuality = async () => {
        try {
            const response = await axios.get("api/quality")
            setAirQuality(response.data)
            console.log("air quality data:", response.data);

        } catch(error) {
            console.log("Error fetching air quality:", error.message)
        }
    }

    useEffect(() => {
        fetchForecast();
        fetchAirQuality();
    }, [])


    return(
        <GlobalContext.Provider value={{weather, airQuality}}>
            <GlobalContextUpdate.Provider>
                {children}
            </GlobalContextUpdate.Provider>
        </GlobalContext.Provider>
    )
}

export const useGlobalContext = () => useContext(GlobalContext);
export const useGlobalContextUpdate = () => useContext(GlobalContextUpdate);
