import { useEffect, useState } from "react"
import ItemDetail from "../ItemDetail/ItemDetail"
import { useParams } from "react-router-dom"
import { getDoc, doc } from 'firebase/firestore'
import { db } from '../../services/config'
import Loader from '../Loader/Loader'



const ItemDetailContainer = () => {
  const [producto, setProducto] = useState(null)
  const [loading, setLoading] = useState(false)

  const { idItem } = useParams()

  useEffect(() => {
    setLoading(true)
    const nuevoDoc = doc(db, "productos", idItem)

    getDoc(nuevoDoc)
      .then(res => {
        const data = res.data()
        const nuevoProducto = { id: res.id, ...data }
        setProducto(nuevoProducto)
      })
      .catch(error => console.log(error))
      .finally(() => {
        setLoading(false)
      })
  }, [idItem])

  return (
    <>
      <main>
        <h2>Detalle del producto</h2>
        {loading ? <Loader /> : <ItemDetail {...producto} />}
      </main>
    </>
  )
}

export default ItemDetailContainer