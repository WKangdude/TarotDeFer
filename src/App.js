import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/header.jsx';
/* import Foto from './img/fotofer.png'; */
import Ritual from './components/ritual.jsx';
import CardDetails from './components/CardDetails.jsx'; // Importa el componente de detalles de la tarjeta
import Agendar from './components/Agendar.jsx';

function App() {
  return (
    <Router>
      <div className="bg-principal">
      
        {/* Define las rutas de tu aplicación */}
        <Routes>
          {/* Ruta principal, que muestra el contenido original */}
          <Route path="/" element={
            <>
            <Header />
              <div className="bg-gold flex flex-col justify-center items-center my-4 gap-2 py-9 shadow-sm md:flex-row md:gap-5">
                {/* <img src={Foto} alt="Foto de Fernanda" /> */}
                <div className='w-4/5'>
                  <h2 className="text-white text-3xl text-center">Hola! Mi nombre es Fernanda y tu proxima brujita de confianza 🕯️🤍</h2>
                  <h3 className='text-center mt-3' >Mi compromiso es resolver tus dudas utilizando mis habilidades y dones con el tarot y cumplir
                  tus objetivos personales, laborales y amorosos atraves de mi magia.</h3>
                </div>
              </div>
              <div className="flex justify-center mt-9">
                <div className="flex flex-col w-4/5 justify-center">
                  <h2 className="text-gold text-5xl mb-2">Sobre mi</h2>
                  <p className="text-white text-left text-md">
                    Soy una bruja enfocada en distintas ramas (mancias).
                  </p>
                  <p className="text-white text-left text-md mt-2">
                    Me inicie en este camino desde los 8 años con dones tales como sentir vibras y visualizar la energia de las personas que fueron potencializandoce con los años.
                  </p>
                  <p className="text-white text-left text-md mt-2">
                    Experta en tarot y rituales de todo tipo con sus exepciones, también tengo un diplomado en numerología pitagorica.
                  </p>
                </div>
              </div>
              <Ritual />
            </>
          } />

          {/* Ruta para los detalles de cada tarjeta */}
          <Route path="/details" element={<CardDetails />} />
          <Route path='/agendar' element={<Agendar/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
