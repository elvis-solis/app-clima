import React from 'react';
import dayjs from "dayjs";
import { UseWeatherAppContext } from '../../Context/Context';

const LeftComponents = () => {

    // Array de nombres de días de la semana en español
    const WEEKDAYS = [
        "Domingo",
        "Lunes",
        "Martes",
        "Miércoles",
        "Jueves",
        "Viernes",
        "Sábado",
    ];

    // Obtener la ciudad y el estado actual del contexto
    const { state: { city, current } } = UseWeatherAppContext();

    // Si no hay datos actuales, mostrar "Loading..."
    if (!current) return <div>Loading...</div>;

    // Obtener el índice del día de la semana para mostrar el nombre correcto
    const weekdayIndex = dayjs.unix(current.dt).day();

    return (
        <>
            <div className='leftWrap'>
                <div className='dateWrap'>
                    <h2>{WEEKDAYS[weekdayIndex]}</h2>
                    <span className="dateDay">
                        {dayjs.unix(current.dt).format("DD MMM YYYY")}
                    </span>
                    <span className="locationName">{city.city} - {city.admin_name} - {city.country}</span>
                </div>
                <div className="weatherContainer">
                    <img
                        className="weatherIcon"
                        alt="myit"
                        src={`http://openweathermap.org/img/wn/${current.weather[0].icon}.png`}
                    />
                    <h1 className="weatherTemp">{Math.round(current.temp.max)}°C</h1>
                    <h3 className="weatherDesc">{current.weather[0].main}</h3>
                </div>
            </div>
        </>
    )
}

export default LeftComponents;
