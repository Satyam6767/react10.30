import React, { useState } from 'react'

function Weather() {


    const [city, setcity] = useState("")
    const [weather, setweather] = useState(null)

    const API_KEY = "4969542ebab4341abc4fc3dda7c042fd"


    const getWeather = async () => {
        try {
            const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`)
            const data = await response.json()
            // console.log(data)
            if(data.cod === "404"){
                alert("city not found")
            }
            setweather(data)
        }

        catch(error){
            console.log("something error ", error)
        }
    }

    return (
        <div style={{border:"2px solid red", width:"300px" }}>

            <div >
                <h1>Weather Data</h1>
                <input type='text' placeholder='Enter city' value={city} onChange={(e) => setcity(e.target.value)} />
                <button onClick={getWeather}>Search</button>
            </div>

            {
                weather &&  weather.main && (
                    <>
                    <h1>{weather.name}</h1>
                    <h2>Temperature: {weather.main.temp}</h2>
                    <h2>Description: {weather.weather[0].description}</h2>
                    </>
                )
            }

            <div>
            </div>
        </div>
    )
}

export default Weather