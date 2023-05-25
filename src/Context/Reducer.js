// Reducer para gestionar el estado de la aplicación
export const WeatherReducer = (state, action) => {
    switch (action.type) {
      case 'SET_CITY':
        // Actualizar la ciudad en el estado
        return {
          ...state,
          city: action.payload
        };
      case 'SET_CURRENT':
        // Actualizar los datos del clima actual en el estado
        return {
          ...state,
          current: action.payload
        };
      case 'SET_DAILY':
        // Actualizar los datos del pronóstico diario en el estado
        return {
          ...state,
          daily: action.payload
        };
      default:
        // Devolver el estado sin realizar cambios
        return { ...state };
    }
  };
  