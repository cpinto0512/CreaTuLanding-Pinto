import React, { useState } from 'react'

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
        <div>
            <button onClick={incrementar}>+</button>
            <p>{contador}</p>
            <button onClick={decrementar}>-</button>
        </div>
        <div style={{padding: "15px"}}><button onClick={()=>funcionAgregar(contador)}>Agregar al carrito</button></div>
        </>
    )
}

export default ItemCount