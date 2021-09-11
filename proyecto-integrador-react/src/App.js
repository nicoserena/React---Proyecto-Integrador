import './App.css';
import Musica from './Componentes/Musica/Musica'
import Navbar from './Componentes/Nav/Nav';
import Footer from './Componentes/Footer/Footer'
function App() {
  return (
    <div className="App">
      
        <Navbar/>
         <Musica />
        <Footer />
      
    </div>
  );
}

export default App;
