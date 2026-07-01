// rafce

const TituloPrincipal = (props) => {
  const mostrarProps = () => {
    console.log(props) // {texto, color}
    console.log(props.texto)
    console.log(props.color)
  }

  //mostrarProps()

  return (
    <h2 style={{ color: props.color, textDecoration: 'underline' }}>{props.texto}</h2>
  )
}

export default TituloPrincipal
