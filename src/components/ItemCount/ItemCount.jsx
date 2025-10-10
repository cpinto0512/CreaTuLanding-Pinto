import { useState } from 'react'
import { Link } from 'react-router-dom'
import "./ItemCount.css"
import { toast, Bounce } from "react-toastify"

const ItemCount = ({inicial, stock, funcionAgregar}) => {

    const [contador, setContador] = useState(inicial)

    const incrementar = () => {
        if (contador < stock) {
            setContador(contador + 1)
        }
    }

    const decrementar = () => {
        if (contador > inicial ) {
            setContador(contador - 1)
        }
    }

    const notificationAgregarCarrito = () =>{
        toast.success("Producto agregado al carrito satisfactoriamente", {
                position: "top-center",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                transition: Bounce,
            })
            funcionAgregar(contador)
    }
        return (
        <>
        <div className='divItemCount'>
            <button onClick={incrementar}>+</button>
            <p>{contador}</p>
            <button onClick={decrementar}>-</button>
        </div>
        <div className='divButtons'>
            <button><Link to ="/">Regresar al inicio</Link></button>
            <button onClick={()=>notificationAgregarCarrito()}>Agregar al carrito</button>
            </div>
        </>
    )
}

export default ItemCount