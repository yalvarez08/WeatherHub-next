"use Client";
import axios from "axios";
import React, { useContext, createContext, useState } from "react";
import { useEffect } from "react";

const GlobalContext = createContext();
const GlobalContextUpdate = createContext();


export const GlobalContextProvider = ( {children} ) => {
    const [forecast, setForecast] = useState({});
    
    const fetchForecast = async () => {
        try {
            const response = await axios.get("api/weather")

        } catch(error) {
            console.log("Error fetching forecast:", error.message)
        }
    };

    useEffect(() => {
        fetchForecast();
    }, [])


    return(
        <GlobalContext.Provider value="hello">
            <GlobalContextUpdate.Provider>
                {children}
            </GlobalContextUpdate.Provider>
        </GlobalContext.Provider>
    )
}

export const useGlobalContext = () => useContext(GlobalContext);
export const useGlobalContextUpdate = () => useContext(GlobalContextUpdate);
