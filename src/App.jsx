import ItemListContainer from "./components/ItemListContainer/ItemListContainer"
import NavBar from "./components/NavBar/NavBar"

const App = () => {

  const item = { 
    nombre:"Almendras",
    precio: 8
  }

  return (
    <>
      <NavBar/>
      <ItemListContainer producto={item}/>
    </>
  )
}

export default App