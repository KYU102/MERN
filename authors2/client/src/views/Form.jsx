import React, { useState } from 'react'
import axios from 'axios'
import { useParams, useNavigate } from "react-router-dom";


const Form = (props) => {

    const navigate = useNavigate()
    const [err,setErr] = useState([])

    // DECLARE STATE
    const [name, setName] = useState("")

    //DESTRUCTURE
    const { refresh } = props

    // HANDLER FUNCTIONS
    const submitHandler = event => {
        event.preventDefault()
        //CREATE AN OBJECT WITH THE AUTHOR INFO
        const authorObj = {
            name
        }
        // MAKE POST REQUEST TO EXPRESS WITH authorObj
        axios.post("http://localhost:8000/api/authors/new", authorObj)
            .then(res => {
                navigate('/')
                refresh()
                setName("")
            })
            .catch(err => {
                console.log(err.response.data.errors)
                const errorResponse = err.response.data.errors; // Get the errors from err.response.data
                const errorArr = []; // Define a temp error array to push the messages in
                for (const key of Object.keys(errorResponse)) { // Loop through all errors and get the messages
                    errorArr.push(errorResponse[key].message)
                }
                setErr(errorArr)
            })
    }

    return (
        <fieldset>
            <legend>Form.jsx</legend>
            <form onSubmit={submitHandler}>
                <p>
                    Name:
                    <input type="text" name="name" onChange={(e) => setName(e.target.value)} value={name} />
                </p>
                <button onClick={() => (navigate('/'))} >Cancel </button>
                <button>Create</button>
            </form>
            {
                err.map((errorMessage) => {
                    return(
                        <p> {errorMessage}</p>
                    )
                })
            }
        </fieldset>
    )
}

export default Form