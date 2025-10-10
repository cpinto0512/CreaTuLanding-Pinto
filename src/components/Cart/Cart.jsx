import { useContext } from 'react'
import { carritoContext } from '../../context/CarritoContext'
import { Link } from 'react-router-dom'
import CartItem from '../CartItem/CartItem'
import "./Cart.css"

import Swal from 'sweetalert2'



const Cart = () => {

    const { carrito, total, cantidadTotal, vaciarCarrito } = useContext(carritoContext)
    if (cantidadTotal === 0) {
        return (
            <div className='emptyCart'>
                <div className='emptyCartContainer'>
                    <h2>¡El carrito está vacio! Haz click en el botón Ver Productos para seguir comprando</h2>
                    <button ><Link to="/">Ver Productos</Link></button>
                </div>
            </div>
        )
    }

    const notificacionVaciarCarrito = () => {
    
            const swalWithBootstrapButtons = Swal.mixin({
                customClass: {
                    confirmButton: "btn btn-success",
                    cancelButton: "btn btn-danger"
                },
                buttonsStyling: true
            });
            swalWithBootstrapButtons.fire({
                title: "Are you sure?",
                text: "You won't be able to revert this!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonText: "Yes, delete it!",
                cancelButtonText: "No, cancel!",
                reverseButtons: true
            }).then((result) => {
                if (result.isConfirmed) {
                    swalWithBootstrapButtons.fire({
                        title: "Deleted!",
                        text: "Se vacio el carrito :(",
                        icon: "success"
                    });
                    vaciarCarrito()
                } else if (
                    result.dismiss === Swal.DismissReason.cancel
                ) {
                    swalWithBootstrapButtons.fire({
                        title: "Cancelled",
                        text: "Tu carrito sigue intacto :)",
                        icon: "error"
                    });
                }
            });
            
        }

    return (
        <div id='cartContainer'>
            <div id='cartProductsContainer'>
                {
                carrito.map(producto => <CartItem key={producto.item.id} {...producto} />)
            }
            </div>

            <h3>Total: S/{total}</h3>
            <h3>Cantidad de Items: {cantidadTotal} un</h3>
            <div className="cartButtonContainer">
                <button className='cartButton' onClick={() => notificacionVaciarCarrito()}>Vaciar Carrito</button>
                <button className='cartButton'><Link to="/">Seguir comprando</Link></button>
                <button className='cartButton'><Link to="/checkout">Finalizar compra</Link></button>
            </div>
        </div>

    )
}

export default Cart