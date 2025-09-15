import {useState,useEffect} from 'react'
import { getProductos, getProdByCategory } from '../../Asycmocks'
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom'

const ItemListContainer = () => {

    const [productos,setproductos] = useState([])

    const {idCat} = useParams()

    useEffect(()=>{
        const funcionProductos = idCat ? getProdByCategory : getProductos;

        funcionProductos(idCat)
         .then(respuesta=>setproductos(respuesta))
         .catch(error => console.log(error))
    },[idCat])

    return (
        <>
        <h2>Mis Productos</h2>
        <ItemList productos={productos}/>
        </>
        
    )
}

export default ItemListContainer