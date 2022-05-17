import React, { useEffect, useState} from 'react'
import axios from 'axios'
import { useParams, Link, useNavigate } from 'react-router-dom'

const Detail = () => {

    const navigate = useNavigate()
    // STATE FOR HOLDING ONE PRODUCT
    const [product, setProduct] = useState()

    //GET PATH VARIABLE FROM REACT ROUTER
    const { product_id } = useParams()

    useEffect(() => {
        axios.get("http://localhost:8000/api/products/"+product_id)
            .then(res => setProduct(res.data))
            .catch(err => console.log(err))
    }, [])

    const deleteProduct = (id) => {
        axios.delete("http://localhost:8000/api/products/"+id)
            .then(res => navigate("/"))
            .catch(err => console.log(err))
    }

    return (
        <fieldset>
            <legend>Detail.jsx</legend>
            <div>
            {
                (product) ?
                    <div>
                        <h1>Title: {product.title}</h1>
                        <h1>Price: {product.price}</h1>
                        <h1>Description: {product.description}</h1>
                        <Link to={"/"+product_id+"/edit"}>
                        Edit
                        </Link>
                    </div> : <h1>Loading....</h1>
                    
            }
            <button onClick={(e) => deleteProduct(product._id)}>Delete</button>
            </div>
        </fieldset>
    )
}

export default Detail