import { Link } from "react-router-dom"
import ItemCount from "../ItemCount/ItemCount"
import "./ItemDetail.css"
import { useState,useContext } from "react"

import { carritoContext } from "../../context/CarritoContext"
import { ToastContainer} from "react-toastify"


const ItemDetail = ({id, idCat, nombre, precio, img, stock, descripcion }) => {

    const [agregarCantidad, setAgregarCantidad] = useState(0)

    const {agregarCarrito} = useContext(carritoContext)
    
    const manejadorCantidad = (cantidad) => {
        setAgregarCantidad(cantidad);
        
        const item={id,nombre,precio}
        agregarCarrito(item,cantidad)
    }

    return (
        <div className="detailContainer">
            <div className='ItemDetail'>
            <h2>{`${nombre} ${idCat}`}</h2>
            <h3>S/{precio}</h3>
            
            <img src={img} alt={nombre}/>
            <p>{descripcion}</p>
            {
                agregarCantidad > 0 ? <div className="ItemDetailButtonsContainer"><button><Link to ="/">Volver a Productos</Link></button>
                <button><Link to ="/cart">Terminar Compra</Link></button></div>:  (<ItemCount inicial={1} stock={stock} funcionAgregar={manejadorCantidad}/>)
            }
            <ToastContainer />
        </div>
        </div>
    )
}

export default ItemDetail