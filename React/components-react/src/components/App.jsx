function Button(props) {
  return <button onClick={props.onClick}>Clique Aqui!</button>
}

function App() {

  const handleClick = () => {
    alert('Botao Clicado!')
  }


  return (
    <>
      <Button onClick={handleClick}>Clique Aqui!</Button>
    </>
  )
}

export default App
