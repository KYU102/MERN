import React, { useEffect, useState} from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import Update from '../components/Update'

const Detail = () => {

    // STATE FOR HOLDING ONE PRODUCT
    const [product, setProduct] = useState()

    //GET PATH VARIABLE FROM REACT ROUTER
    const { product_id } = useParams()

    useEffect(() => {
        axios.get("http://localhost:8000/api/products/"+product_id)
            .then(res => setProduct(res.data))
            .catch(err => console.log(err))
    }, [])

    return (
        <fieldset>
            <legend>Detail.jsx</legend>
            <div>
                <Update />
            {
                (product) ?
                    <div>
                        <h1>Title: {product.title}</h1>
                        <h1>Price: {product.price}</h1>
                        <h1>Description: {product.description}</h1>
                    </div> : <h1>Loading....</h1>
                    
            }
            <button>Delete</button>
            </div>
        </fieldset>
    )
}

export default Detail