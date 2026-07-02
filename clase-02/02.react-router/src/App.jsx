// rafce

import Contador from "./components/estados/Contador"
import TituloPrincipal from "./components/TituloPrincipal"

const App = () => {
  return (
    <>
      <TituloPrincipal texto="Titulo Principal"/>
      <TituloPrincipal texto="Otro Titulo"/>
      <Contador valorInicial={22}/>
  </>
  )
}

export default App