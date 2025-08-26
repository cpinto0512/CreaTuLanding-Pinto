import React from 'react'

const ItemListContainer = ({producto}) => {
    return (
        <ul>
            <li>{producto.nombre}</li>
        </ul>
    )
}

export default ItemListContainer