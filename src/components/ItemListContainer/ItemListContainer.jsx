import { useState, useEffect } from 'react'
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom'
import { collection, getDocs, query, where } from 'firebase/firestore'
import { db } from '../../services/config'
import Loader from '../Loader/Loader'

const ItemListContainer = () => {

    const [productos, setproductos] = useState([])
    const [loading, setLoading] = useState(false)

    const { idCat } = useParams()

    useEffect(() => {
        setLoading(true)
        const funcionProductos = idCat ? query(collection(db, "productos"), where("idCat", "==", idCat)) : collection(db, "productos");

        getDocs(funcionProductos)
            .then(res => {
                const nuevosProductos = res.docs.map(doc => {
                    const data = doc.data()
                    return { id: doc.id, ...data }
                })
                setproductos(nuevosProductos)
            })
            .catch(error => console.log(error))
            .finally(() => {
                setLoading(false)
            })

    }, [idCat])

    return (
        <main className='bodyContainer'>
            <h2>Productos {idCat}</h2>
            {loading ? <Loader /> : <ItemList productos={productos} />}
        </main>

    )
}

export default ItemListContainer