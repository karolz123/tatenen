

import Comentarios from './componentes/comentarios'
import 'bootstrap/dist/css/bootstrap.css'
import Footer from './componentes/footer'
import './app.css'


function App() {


  return (
    <>
      <Comentarios titulo ="PITCHBOOK"/>
      <Footer mensaje="¿Tienes alguna duda, sugerencia, petición o reclamo? Comunícate en cualquiera de nuestros medios de comunicación." url="./src/IMG/Iconos/Nuevos/Recurso 5icons.png" telefono= "./src/IMG/Iconos/Nuevos/Recurso 6icons.png" what= "./src/IMG/Iconos/Nuevos/Recurso 7icons.png" insta= "./src/IMG/Iconos/Nuevos/Recurso 8icons.png" face= "./src/IMG/Iconos/Nuevos/Recurso 9icons.png" nu = '+57 301 2497450' />
    </>
  )
}

export default App
