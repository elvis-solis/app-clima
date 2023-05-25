import React from 'react';
import { UseWeatherAppContext } from '../../Context/Context';

const HumidityComponents = () => {

    // Obtener el estado actual y la ciudad del contexto
    let { state: { current, city } } = UseWeatherAppContext();
    console.log('myData', current, city);

    // Función para determinar el nivel de radiación UV
    const uvLevel = (uvIndex) => {
        if (uvIndex <= 2) return "Low";
        if (uvIndex <= 5) return "Medium";
        if (uvIndex <= 7) return "High";
        if (uvIndex > 7) return "Very High";
    };

    return (
        <>
            {
                // Renderizar los datos si el estado actual existe
                current ? (
                    <div className='humidityWrap'>
                        <div className='humidityData'>
                            <div className='title'>UV Index </div>
                            <div className='value'>{Math.round(current.uvi)} ({uvLevel(Math.round(current.uvi))})</div>
                        </div>
                        <div className='humidityData'>
                            <div className='title'>HUMIDITY </div>
                            <div className='value'>{current.humidity} %</div>
                        </div>
                        <div className='humidityData'>
                            <div className='title'>WIND </div>
                            <div className='value'>{Math.round(current.wind_speed)} km/h</div>
                        </div>
                        <div className='humidityData'>
                            <div className='title'>{city.city} - {city.admin_name} - Population</div>
                            <div className='value'>{parseFloat(city.population).toLocaleString('en')}</div>
                        </div>
                    </div>
                ) : null
            }
        </>
    )
}

export default HumidityComponents;
