// Un componente en REACT -> es una Función
// Un componente por archivo (un componente por módulo)
import './App.css'
import Contenedor from './components/Contenedor'
import Imagen from './components/Imagen'
import Parrafo from './components/Parrafo'
import TituloPrincipal from './components/TituloPrincipal'

const App = () => {

  const colorParrafos = [
    {id: 1, color: 'darkblue'},
    {id: 1, color: 'darorange'},
    {id: 1, color: 'darkkhaki'}
  ]

  return (
    <Contenedor>
      <h1>Hola mundo desde React</h1>

      <TituloPrincipal 
        texto="Título número 1" 
        color="blue"
      />

      <Parrafo 
        data="Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur molestias dolorem fugit sint quasi ipsa. Et vero a numquam alias."
        color={colorParrafos[0].color}
      />

      <Imagen url="/imgs/avion-01.webp" textoAlternativo="Este es un avión"/>

      <TituloPrincipal 
        texto="Título número 2" 
        color="green"
      />

      <Parrafo 
        data="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur, eveniet."
        color={colorParrafos[1].color}
      />

      <Imagen url="/imgs/avion-02.webp" textoAlternativo="Este es otro avión"/>

      <TituloPrincipal 
        texto="Título número 3"  
        color="red"
      />

      <Parrafo 
        data="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam, deleniti? Iusto minima aspernatur sapiente modi!"
        color={colorParrafos[2].color}
      />

      <Imagen url="/imgs/avion-03.webp" textoAlternativo="El último avión"/>
      
      </Contenedor>
  )
}

export default App