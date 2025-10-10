import { useState } from 'react'
import { Link } from 'react-router-dom'
import "./ItemCount.css"

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

        return (
        <>
        <div className='divItemCount'>
            <button onClick={incrementar}>+</button>
            <p>{contador}</p>
            <button onClick={decrementar}>-</button>
        </div>
        <div className='divButtons'>
            <button><Link to ="/">Regresar al inicio</Link></button>
            <button onClick={()=>funcionAgregar(contador)}>Agregar al carrito</button>
            </div>
        </>
    )
}

export default ItemCount