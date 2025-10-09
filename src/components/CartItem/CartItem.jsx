import { useContext } from "react"
import { carritoContext } from "../../context/CarritoContext"


const CartItem = ({item,cantidad}) => {

    const {eliminarProducto}=useContext(carritoContext)


  return (
    <div>
        <h4>{item.nombre}</h4>
        <p>Cantidad: {cantidad}</p>
        <p>Precio: S/{item.precio}</p>
        <button onClick={()=>eliminarProducto(item.id)}>Eliminar</button>
        <hr />
    </div>
  )
}

export default CartItem