// rafce

import Contenedor from "./components/Contenedor"
import Contador from "./components/estados/Contador"
import TituloPrincipal from "./components/TituloPrincipal"

const App = () => {
  return (
    <Contenedor>
      <TituloPrincipal texto="Titulo Principal"/>
      <TituloPrincipal texto="Otro Titulo"/>
      <Contador valorInicial={22}/>
    </Contenedor>
  )
}

export default App