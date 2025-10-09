import { BrowserRouter, Route, Routes } from "react-router-dom"
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer"
import ItemListContainer from "./components/ItemListContainer/ItemListContainer"
import NavBar from "./components/NavBar/NavBar"
import { CarritoProvider } from "./context/CarritoContext"
import Cart from "./components/Cart/Cart"
import Checkout from "./components/Checkout/Checkout"
import "./App.css"
import 'bootstrap/dist/css/bootstrap.min.css'

const App = () => {

  return (
    <>

      <BrowserRouter>
      <CarritoProvider>
        <NavBar />
        <Routes>
          <Route path="/" element={<ItemListContainer/>}/>
          <Route path="/categoria/:idCat" element={<ItemListContainer/>}/>
          <Route path="/item/:idItem" element={<ItemDetailContainer/>}/>
          <Route path="/cart" element={<Cart/>}/>
          <Route path="/checkout" element={<Checkout/>}/>
        </Routes>
        </CarritoProvider>
      </BrowserRouter>
      
    </>
  )
}

export default App