import { useState, createContext, use, Children } from "react";
import Swal from 'sweetalert2'
import 'sweetalert2/src/sweetalert2.scss'



export const carritoContext = createContext({
    carrito: [],
    total: 0,
    cantidadTotal: 0
});

export const CarritoProvider = ({ children }) => {

    const [carrito, setCarrito] = useState([])
    const [total, setTotal] = useState(0)
    const [cantidadTotal, setCantidadTotal] = useState(0)

    const agregarCarrito = (item, cantidad) => {
        const productoExistente = carrito.find(prod => prod.item.id === item.id)

        if (!productoExistente) {
            setCarrito(prev => [...prev, { item, cantidad }])
            setCantidadTotal(prev => prev + cantidad)
            setTotal(prev => prev + (item.precio * cantidad))
        } else {
            const carritoActualizado = carrito.map(prod => {
                if (prod.item.id === item.id) {
                    return { ...prod, cantidad: prod.cantidad + cantidad }
                } else {
                    return prod
                }
            })
            setCarrito(carritoActualizado)
            setCantidadTotal(prev => prev + cantidad)
            setTotal(prev => prev + (item.precio * cantidad))
        }

    }

    const eliminarProducto = (id) => {
        const productoEliminado = carrito.find(prod => prod.item.id === id)
        const carritoActualizado = carrito.filter(prod => prod.item.id != id)

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
                    text: "Este item fue eliminado del carrito.",
                    icon: "success"
                });
                setCarrito(carritoActualizado)
                setCantidadTotal(prev => prev - productoEliminado.cantidad)
                setTotal(prev => prev - (productoEliminado.item.precio * productoEliminado.cantidad))
            } else if (
                result.dismiss === Swal.DismissReason.cancel
            ) {
                swalWithBootstrapButtons.fire({
                    title: "Cancelled",
                    text: "Este item siguen en el carrito :)",
                    icon: "error"
                });
            }
        });



    }

    const vaciarCarrito = () => {
        setCarrito([])
        setCantidadTotal(0)
        setTotal(0)
    }

    return (
        <carritoContext.Provider value={{ carrito, total, cantidadTotal, agregarCarrito, eliminarProducto, vaciarCarrito }}>
            {children}
        </carritoContext.Provider>

    )

}