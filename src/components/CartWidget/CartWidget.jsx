import { Link } from "react-router-dom"
import { carritoContext } from "../../context/CarritoContext"
import { useContext } from "react"


const CartWidget = () => {

    const imgCarrito = "https://www.freeiconspng.com/thumbs/cart-icon/cart-icon-14.png"
    const {cantidadTotal}=useContext(carritoContext)

  return (
    <div>
      <Link to="/cart">
      <img  src={imgCarrito} alt="Imagen del carrito de compras" style={{maxHeight:'50px', maxWidth:'50px'}}/>
      </Link>
      {
        cantidadTotal>0 && <strong>{cantidadTotal}</strong>
      }
    </div>
  )
}

export default CartWidget