import React, { useEffect, useState, } from 'react'
import axios from 'axios';
import { useParams, useNavigate, Link } from "react-router-dom";

const Update = (props) => {

    const navigate = useNavigate()

    const { author_id } = useParams();
    const [name, setName] = useState('');
    const [err, setErr] = useState([])

    useEffect(() => {
        axios.get('http://localhost:8000/api/authors/' + author_id)
            .then(res => {
                const { name } = res.data
                setName(name);
            })
            .catch(err => console.group(err))
    }, [])

    const updateAuthor = e => {
        e.preventDefault();
        axios.put('http://localhost:8000/api/authors/' + author_id, {
            name
        })
            .then(res => navigate('/'))
            .catch(err => {
                console.log(err.response.data.errors)
                const errorResponse = err.response.data.errors;
                const errorArr = []; 
                for (const key of Object.keys(errorResponse)) {
                    errorArr.push(errorResponse[key].message)
                }
                setErr(errorArr)
            })
    }

    return (
        <div>
            <h1>Favorite Authors</h1>
            <Link to={"/"}>
                <p>Home</p>
            </Link>
            <h2>Update an Author</h2>
            <form onSubmit={updateAuthor}>
                <p>
                    <label>Name</label><br />
                    <input type="text"
                        name="name"
                        value={name}
                        onChange={(e) => { setName(e.target.value) }} />
                </p>
                <button onClick={() => (navigate('/'))} >Cancel </button>
                <button>Submit</button>
            </form>
            {
                err.map((errorMessage) => {
                    return (
                        <p> {errorMessage}</p>
                    )
                })
            }
        </div>
    )
}

export default Update;