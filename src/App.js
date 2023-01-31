import './index.css';
import Cards from "./Components/Cards";
import Header from "./Components/Header";
import Footer from './Components/Footer';

function App() {
  return (
    <div className="App">
      <Header title="Galería de imágenes con React" />
      <div className="cardsbox"><Cards title="Harry Potter" src="https://i.pinimg.com/originals/75/f9/fb/75f9fbc728e718398f0d7b1719b83742.jpg" desc="Harry es huérfano y vive con los Dursley, que son negligentes y abusivos. En su 11° cumpleaños se entera que es mago y asistirá al Colegio Hogwarts de Magia y Hechicería. Allí aprende sobre el mundo mágico, sus padres, y su conexión con el Señor Tenebroso."/>
      <Cards title="Hermione Granger" src="https://i.pinimg.com/564x/aa/d5/98/aad5982dee2d0164d2d8de6724d9ff38.jpg" desc="Hermione es una brillante estudiante de Gryffindor nacida de padres muggles, se caracteriza por su inteligencia, buen rendimiento, responsabilidad y compañerismo. Esto la convirtió en la mejor amiga de Harry y Ron desde su primer año en Hogwarts."/>
      <Cards title="Ronald Weasley" src="https://i.pinimg.com/564x/d6/7a/b9/d67ab9a3fac17ceb82a6dcd112b57a77.jpg" desc="Es el sexto de los siete hijos Weasley. Es hijo de Arthur y Molly y hermano de Bill, Charlie, Percy, los gemelos Fred y George y la pequeña Ginny. Si bien sus notas no son las mejores, es un gran amigo y tiene una gran habilidad para el ajedrez mágico."/></div>

     <Footer />
    </div>
  );
}

export default App;
