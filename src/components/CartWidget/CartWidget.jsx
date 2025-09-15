import React from 'react'

const CartWidget = () => {

    const imgCarrito = "https://www.freeiconspng.com/thumbs/cart-icon/cart-icon-14.png"

  return (
    <div>
        <img  src={imgCarrito} alt="Imagen del carrito de compras" style={{maxHeight:'50px', maxWidth:'50px'}}/>
    </div>
  )
}

export default CartWidget