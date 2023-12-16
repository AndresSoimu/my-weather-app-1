import { useEffect, useState } from 'react'
export function useApi() {
   const [city, setCity] = useState('madrid')
   const [data, setData] = useState()

   const capitalizedCity = city[0].toUpperCase() + city.slice(1)

   const API_URL = `http://api.weatherapi.com/v1/forecast.json?key=0b97edb45004482bbd672641232602&q=${capitalizedCity}&days=5&aqi=no&alerts=no`

   useEffect(() => {
     async function callApi() {
       try {
         const response = await fetch(API_URL)
         if (!response.ok) {
           throw new Error('error fetching API')
         }
         const data = await response.json()
         setData(data)
       } catch (error) {
         console.error(error)
       }
     }
     callApi()
   }, [city])
 return  {data, setCity}
 }

