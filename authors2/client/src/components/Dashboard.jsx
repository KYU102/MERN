import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate} from 'react-router-dom'

const Dashboard = (props) => {

    const navigate = useNavigate()

    const [allAuthors, setAllAuthors] = useState([])

    const { refreshState, refresh } = props

    useEffect(() => {
        axios.get("http://localhost:8001/api/authors")
            .then(res => setAllAuthors(res.data)) 
            .catch(err => console.log(err))
    }, [refreshState])

    const deleteAuthor = (id) => {
        axios.delete("http://localhost:8001/api/authors/" + id)
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