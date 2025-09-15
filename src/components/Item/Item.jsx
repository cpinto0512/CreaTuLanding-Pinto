import { Link } from "react-router-dom"
import "./Item.css"

const Item = ({id,nombre,precio,img,idCat}) => {
  return (
    <div className='cardProducto'>
        <img src={img} alt={nombre} />
        <h3>Nombre: {nombre}</h3>
        <p>Precio: S/{precio}</p>
        <p>ID: {id}</p> 
        <p>Categoria: {idCat}</p>
        <Link to={`/item/${id}`}><button>Ver Detalles</button></Link>
    </div>
  )
}

export default Item