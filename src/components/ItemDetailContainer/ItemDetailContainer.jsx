import { useEffect, useState } from "react"
import { getProductDetail } from "../../Asycmocks"
import ItemDetail from "../ItemDetail/ItemDetail"
import { useParams } from "react-router-dom"


const ItemDetailContainer = () => {
  const [productos,setproductos] = useState(null)
  
  const {idItem} = useParams()

    useEffect(()=>{
        getProductDetail(idItem)
         .then(respuesta=>setproductos(respuesta))
         .catch(error => console.log(error))
    },[idItem])

    return (
        <>
        <h2>Mis Productos</h2>
        <ItemDetail {...productos}/>
        </>
    )
}

export default ItemDetailContainer