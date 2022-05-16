import React,{useState} from 'react'
import axios from 'axios'



const Form = (props) => {

    // DECLARE STATE
    const [title, setTitle] = useState("")
    const [price, setPrice] = useState(0)
    const [description, setDescription] = useState("")

    //DESTRUCTURE
    const {refresh} = props

    // HANDLER FUNCTIONS
    const submitHandler = event => {
        event.preventDefault()
        //CREATE AN OBJECT WITH THE PRODUCT INFO
        const productObj = {
            title,
            price,
            description
        }
        // MAKE POST REQUEST TO EXPRESS WITH prodcutObj
        axios.post("http://localhost:8000/api/products/new", productObj)
        .then(res => {
            refresh(),
            setTitle(""),
            setPrice(0),
            setDescription("")
        .catch(err => console.log(err))

    }


    return (
        <fieldset>
            <legend>Form.jsx</legend>
            <form onSubmit={submitHandler}>
                <p>
                    Title:
                    <input type="text" name="title" onChange = {(e) => setTitle(e.target.value)} value={title}/>
                </p>
                <p>
                    Price:
                    <input type="number" name="price" onChange = {(e) => setPrice(e.target.value)} />
                </p>
                <p>
                    Description:
                    <input type="text" name="description" onChange = {(e) => setDescription(e.target.value)}/>
                </p>
                <button>Create</button>
            </form>
        </fieldset>
    )
}

export default Form