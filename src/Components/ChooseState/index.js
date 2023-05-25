import React, { useEffect } from 'react';
import cities from '../../Data/in.json';

import axios from "axios";

import  { UseWeatherAppContext } from '../../Context/Context';

const ChooseStateComponents = () => {

    // Obtener el estado y el despachador del contexto
    const { state: { city }, dispatch } = UseWeatherAppContext();

    // Manejar el cambio de selección del estado
    const handleChange = (e) => {
        // Filtrar la ciudad seleccionada en base al valor del select
        const selectedCity = cities.filter(
            (city) => city.city === e.target.value
        )[0];
        // Actualizar el estado con la ciudad seleccionada
        dispatch({
            type: 'SET_CITY',
            payload: { ...selectedCity }
        });
    }

    // Variables para la API
    const APIKEY = '34480b98aa332da53123a0ac63a4ea9d';
    let lat = city && city.lat ? city.lat : '';
    let long = city && city.lng ? city.lng : '';
    let exclude = 'hourly,minutely';
    const URL =  `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${long}&exclude=${exclude}&units=metric&lang=tr&appid=${APIKEY}`;
    
    // Función para obtener los datos de la API
    const fetchData = () => {
        axios(URL).then((data) => {
            // Obtener los datos diarios de la respuesta
            let _daily = data.data.daily;
            // Actualizar el estado con los datos diarios
            dispatch({
                type: 'SET_DAILY',
                payload: _daily
            });
        });
    };

    // Realizar la solicitud de los datos al cargar el componente o al cambiar la ciudad seleccionada
    useEffect(() => {
        fetchData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [city]);

    return (
        <div className='stateWrap'>
            <select className='stateMenu' defaultValue={city} onChange={handleChange}>
                {
                    // Renderizar las opciones de ciudades
                    cities && cities.length > 0  && cities.map((city) => {
                        return(
                            <option key={`${city.population}${city.lat}`} value={city.city}>
                                {city.city} -  {city.admin_name}
                            </option>
                        );
                    })
                }
            </select>
        </div>
    );
}

export default ChooseStateComponents;
