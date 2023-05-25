// Importar estilos CSS
import './App.css';
// Importar el componente HomeComponents desde el archivo "./Components/Home"
import HomeComponents from './Components/Home';

// Función principal de la aplicación
function App() {
  // Retornar la estructura principal de la aplicación
  return (
    // Div principal con la clase "App"
    <div className="App">
      {/* Renderizar el componente HomeComponents */}
      <HomeComponents />
    </div>
  );
}

// Exportar la función App como el componente principal de la aplicación
export default App;

























