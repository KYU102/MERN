import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate, Link } from "react-router-dom";


const Form = (props) => {

    const navigate = useNavigate()
    const [err, setErr] = useState([])
    const [name, setName] = useState("")

    const { refresh } = props

    const submitHandler = event => {
        event.preventDefault()
        const authorObj = {
            name
        }
        axios.post("http://localhost:8001/api/authors/new", authorObj)
            .then(res => {
                navigate('/')
                refresh()
                setName("")
            })
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
        <fieldset>
            <legend>Form.jsx</legend>
            <h1>Favorite Authors</h1>
            <Link to={"/"}>
                <p>Home</p>
            </Link>
            <form onSubmit={submitHandler}>
                <h2>Add a new author</h2>
                <p>
                    Name:
                    <input type="text" name="name" onChange={(e) => setName(e.target.value)} value={name} />
                </p>
                <button onClick={() => (navigate('/'))} >Cancel </button>
                <button>Create</button>
            </form>
            {
                err.map((errorMessage) => {
                    return (
                        <p> {errorMessage}</p>
                    )
                })
            }
        </fieldset>
    )
}

export default Form