import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link, useNavigate} from 'react-router-dom'

const Dashboard = (props) => {

    const navigate = useNavigate()

    // STATE TO HOLD ALL BOOKS COMING FROM DB
    const [allAuthors, setAllAuthors] = useState([])

    // DESTRUCTURE FROM PROPS
    const { refreshState, refresh } = props

    useEffect(() => {
        // MAKE A CALL TO EXPRESS, GET ALL BOOKS
        axios.get("http://localhost:8000/api/authors")
            .then(res => setAllAuthors(res.data))  // INCOMING BOOKS ARE SET TO STATE
            .catch(err => console.log(err))
    }, [refreshState])

    const deleteAuthor = (id) => {
        axios.delete("http://localhost:8000/api/authors/" + id)
            .then(res => refresh())
            .catch(err => console.log(err))
    }


    return (
        <fieldset>
            <legend>Dashboard.jsx</legend>
            {
                allAuthors.map((author, index) => {
                    return (
                        <div key={index}>
                            <table>
                                <tr>
                                    <th>Author</th>
                                    <th>Actions</th>
                                </tr>
                                <tr>
                                    <td>{author.name}</td>
                                    <td>
                                        <button onClick = {() => (navigate('/'+author._id))} >Edit </button>
                                        <button onClick={() => deleteAuthor(author._id)}>Delete</button>
                                    </td>
                                </tr>
                            </table>
                            {/* <Link to={"/" + author._id}>
                                <p>edit</p>
                            </Link> */}
                            
                            
                        </div>
                    )
                })
            }
        </fieldset>
    )
}

export default Dashboard