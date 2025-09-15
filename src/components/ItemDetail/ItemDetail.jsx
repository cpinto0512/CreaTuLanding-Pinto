import { Link } from "react-router-dom"
import ItemCount from "../ItemCount/ItemCount"
import "./ItemDetail.css"
import { useState } from "react"


const ItemDetail = ({ id, nombre, precio, img, stock }) => {

    const [agregarCantidad, setAgregarCantidad] = useState(0)
    
    const manejadorCantidad = (cantidad) => {
        setAgregarCantidad(cantidad);
        console.log("Productos agregados: " + cantidad)
    }

    return (
        <div className='ItemDetail'>
            <h2>Nombre: {nombre}</h2>
            <h3>Precio: S/{precio}</h3>
            <h3>ID: {id}</h3>
            <img src={img} alt={nombre}/>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error nihil dolore ducimus excepturi corporis optio libero ratione laboriosam qui ex deleniti, magnam beatae molestias id quisquam cumque aspernatur repudiandae explicabo.</p>
            {
                agregarCantidad > 0 ? <button><Link to ="/cart">Terminar Compra</Link></button>:  (<ItemCount inicial={1} stock={stock} funcionAgregar={manejadorCantidad}/>)
            }
        </div>
    )
}

export default ItemDetail