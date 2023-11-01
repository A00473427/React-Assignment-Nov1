import React, { useCallback, useEffect, useState } from 'react'
import './index.css';
import cold from "../../assets/images/cold.png";
import mild from "../../assets/images/mild.png";
import sunny from "../../assets/images/sunny.png";

const WEATHER_TYPES_IMAGES = {
    COLD: cold,
    MILD: mild,
    SUNNY: sunny
}

const WEATHER_TYPE = {
    F: 'F',
    C: 'C'
}

export default function WeatherWidget() {

    const [tempUnit ,setTempUnit] = useState(WEATHER_TYPE.C);
    const [tempInCelcius, setTempInCelcius] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [currentImage, setCurrentImage] = useState();
    // const [temp,setTemp] = useState(0)
    // const [imgname, setImgname] = useState('cold')
    // const [varname, setVarname] = useState("Change to °F")
    // const [tempsymbol, setTempSymbol] = useState("°C")

    useEffect(() => {
        fetch('https://api.openweathermap.org/data/2.5/weather?lat=44.64&lon=-63.57&appid=1848b86e45210756f99502b35a9a8875')
        .then(res=>res.json())
        .then(result=>{
            setTempInCelcius(result.main.temp - 273.15)

            if ((result.main.temp - 273.15) >= 20)
            {
                setCurrentImage(WEATHER_TYPES_IMAGES.SUNNY);
            }

            
            if ((result.main.temp - 273.15) > 10 & (result.main.temp - 273.15) <= 20)
            {
                setCurrentImage(WEATHER_TYPES_IMAGES.MILD);
            }


            if ((result.main.temp - 273.15) <= 10)
            {
                setCurrentImage(WEATHER_TYPES_IMAGES.COLD);
            }
            setIsLoading(false);
        })
    },[])


    const convertToF = () => {
        return (tempInCelcius * 9/5 + 32);
    }

    const onCheckBoxClick = useCallback(() => {
        setTempUnit(tempUnit === WEATHER_TYPE.F ? WEATHER_TYPE.C : WEATHER_TYPE.F);
    }, [tempUnit])

    return (
        <>
            <img src={currentImage} alt="weather"/>
            
            <div className='temp'>
                {Math.round(tempUnit === WEATHER_TYPE.F ? convertToF(tempInCelcius) :tempInCelcius)}
                <span className='unit'>°{tempUnit}</span>
            </div>

            <label className="wraper" for="temp-toggle">
                <div className="switch-wrap" >
                    <input type="checkbox" id="temp-toggle" checked={tempUnit === WEATHER_TYPE.F}/>
                    <div className="switch" onClick={onCheckBoxClick}></div>
                </div>
            </label>
        </>
    )
}