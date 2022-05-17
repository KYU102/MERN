import React, { useEffect, useState,  } from 'react'
import axios from 'axios';
import { useParams, useNavigate} from "react-router-dom";
    
const Update = (props) => {

const navigate = useNavigate()

    const { product_id } = useParams();
    const [title, setTitle] = useState('');
    const [price, setPrice] = useState(0);
    const [description, setDescription] = useState('');
    
    useEffect(() => {
        axios.get('http://localhost:8000/api/products/' + product_id)
            .then(res => {
                const {title, price, description} = res.data
                setTitle(title);
                setPrice(price);
                setDescription(description);
            })
            .catch(err => console.group(err))
    }, [])
    
    const updateProduct = e => {
        e.preventDefault();
        axios.put('http://localhost:8000/api/products/' + product_id, {
            title,
            price,
            description
        })
            .then(res => navigate('/'))
            .catch(err => console.error(err));
    }
    
    return (
        <div>
            <h1>Update a Product</h1>
            <form onSubmit={updateProduct}>
                <p>
                    <label>Title</label><br />
                    <input type="text" 
                    name="title" 
                    value={title} 
                    onChange={(e) => { setTitle(e.target.value) }} />
                </p>
                <p>
                    <label>Price</label><br />
                    <input type="number" 
                    name="price"
                    value={price} 
                    onChange={(e) => { setPrice(e.target.value) }} />
                </p>
                <p>
                    <label>Description</label><br />
                    <input type="text" 
                    name="description"
                    value={description} 
                    onChange={(e) => { setDescription(e.target.value) }} />
                </p>
                <button>Submit</button>
            </form>
        </div>
    )
}
    
export default Update;