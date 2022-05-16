import React, {useEffect} from 'react'
import axios from 'axios'
import {useParams} from 'react-router-dom'

const Detail = () => {

    const {product_id} = useParams()

useEffect(() => {
    axios.get("http://localhost:8000/api/products/"+product_id)
        .then(res => )
        .catch(err => )
})

    return (
        <div>Detail</div>
    )
}

export default Detail