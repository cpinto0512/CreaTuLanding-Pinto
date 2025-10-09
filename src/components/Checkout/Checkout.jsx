import { useContext, useState } from "react"
import { carritoContext } from "../../context/CarritoContext"
import { db } from "../../services/config"
import { collection, addDoc } from "firebase/firestore"

const Checkout = () => {

    const [nombre,setNombre] = useState("")
    const [apellido, setApellido] = useState("")
    const [telefono,setTelefono] = useState("")
    const [mail,setMail] = useState("")
    const [mailConfirmacion,setMailconfirmacion] = useState("")
    const [error, setError] = useState("")
    const [ordenID, setOrdenID] = useState("")

    const {carrito, total, cantidadTotal, vaciarCarrito} = useContext(carritoContext)
    

    const manejadorFormulario = (event) =>{
        event.preventDefault();

        if(!nombre || !apellido ||!telefono||!mail||!mailConfirmacion){
            setError("Por favor completa todos los campos")
            return
        }

        if (mail !== mailConfirmacion){
            setError("Los campos de email no coinciden")
            return
        }

        const orden = {
            items: carrito.map (producto =>({
                id: producto.item.id,
                nombre: producto.item.nombre,
                cantidad: producto.cantidad
            })),
            total: total,
            fecha: new Date(),
            nombre,
            apellido,
            telefono,
            mail
        }

        addDoc(collection(db,"ordenes"),orden)
        .then(docRef=>{
            setOrdenID(docRef.id)
            vaciarCarrito()
        })
        .catch(error => {
            console.log("Error al crear la orden",error)
            setError("Se produjo un error al crear la orden")
        })

    }


  return (
    <div>
        <h2>Checkout</h2>
        <form onSubmit={manejadorFormulario}>
            
           <div className="col-md-4">
                <label htmlFor="email">Nombre:</label>
                <input className="form-control" type="text" name="Nombre" id="Nombre" onChange={(e)=>setNombre(e.target.value)}/>
            </div>

            <div className="col-md-4">
                <label htmlFor="Apellido">Apellido:</label>
                <input className="form-control" type="text" name="Apellido" id="Apellido" onChange={(e)=>setApellido(e.target.value)}/>
            </div>

            <div className="col-md-4">
                <label htmlFor="Telefono">Telefono:</label>
                <input className="form-control" type="text" name="Telefono" id="Telefono" onChange={(e)=>setTelefono(e.target.value)}/>
            </div>

            <div className="col-md-4">
                <label htmlFor="email">E-mail:</label>
                <input className="form-control" type="email" name="email" id="email"
                    placeholder="test@mail.com" onChange={(e)=>setMail(e.target.value)}/>
            </div>

            <div className="col-md-4">
                <label htmlFor="emailConfirmation">E-mail confirmation:</label>
                <input className="form-control" type="email" name="emailConfirmation" id="emailConfirmation"
                    placeholder="test@mail.com" onChange={(e)=>setMailconfirmacion(e.target.value)}/>
            </div>

            {
                error && (<p style={{color:"red"}}>{error}</p>)
            }
            
            <div className="col-xl-2 col-lg-4 col-md-4"><input id="checkoutButton" className="button" type="submit" value="Confirmar Compra"/>
            </div>
            
            {
                ordenID && (<strong>Gracias por tu compra. Tu número de orden es: {ordenID}</strong>)
            }

        </form>
    </div>
  )
}

export default Checkout