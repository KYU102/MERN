import React, { useEffect } from 'react'
import {useState} from 'react'
import axios from 'axios'

const Dashboard = (props) => {
    
    const [allProducts, setAllProducts] = useState([])

    const {refreshState} = props

    useEffect(() => {
        axios.get("http://localhost:8000/api/products")
        .then(res => setAllProducts(res.data))
        .catch(err => console.log(err))
    }, [refreshState])

    return (
        <fieldset>
            <legend>Dashboard.jsx</legend>
            <div>
                {
                    allProducts.map ((product, index) => {
                    return(
                        <div key ={index}>
                            <h1>{product.title}</h1>
                        </div>
                    )
                })
                }
            </div>
        </fieldset>
    )
}

export default Dashboard