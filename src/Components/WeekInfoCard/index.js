import React, { useState, useEffect } from 'react';
import { UseWeatherAppContext } from '../../Context/Context';

import SingleCardComponents from '../SingleCard';

const WeekInfoCardComponents = () => {
  // Obtener el estado y el despachador del contexto
  let { state: { daily }, dispatch } = UseWeatherAppContext();

  // Estado para almacenar la tarjeta seleccionada
  const [selectedCard, setSelectedCard] = useState(0);

  // Actualizar el estado actual con los datos de la tarjeta seleccionada
  const updateCurrent = () => {
    return dispatch({
      type: 'SET_CURRENT',
      payload: daily[selectedCard]
    });
  };

  useEffect(() => {
    // Actualizar el estado actual al cargar el componente o al cambiar la tarjeta seleccionada
    updateCurrent();
    // eslint-disable-next-line
  }, [daily, selectedCard]);

  return (
    <>
      <div className='cardWrap'>
        <ul className='cardList'>
          {
            daily && daily.length > 0 ? daily.map((item, index) => {
              if (index < 7) {
                return (
                  <SingleCardComponents
                    className={index === selectedCard ? "active" : ""}
                    onClick={() => {
                      setSelectedCard(index);
                      updateCurrent();
                    }}
                    item={item}
                    key={index}
                  />
                );
              }
              return '';
            }) : ''
          }
        </ul>
      </div>
    </>
  );
};

export default WeekInfoCardComponents;
