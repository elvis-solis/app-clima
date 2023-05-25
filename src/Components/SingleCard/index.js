import React from 'react';
import dayjs from "dayjs";

const SingleCardComponents = ({ item, className, onClick }) => {
  // Obtener el índice del día de la semana para mostrar el nombre correcto
  const weekdayIndex = dayjs.unix(item.dt).day();

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

  return (
    <>
      <li key={item.moonrise} className={className} onClick={onClick}>
        <img
          className="day-icon"
          alt="rohit"
          src={`http://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`}
        />
        <span className="day-name">{WEEKDAYS[weekdayIndex].slice(0, 3)}</span>
        <span className="day-temp">{Math.round(item.temp.max)}°C</span>
      </li>
    </>
  );
};

export default SingleCardComponents;
