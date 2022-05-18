import React, { useState } from 'react'
import Dashboard from '../components/Dashboard'
import Form from './Form'
import { Link } from 'react-router-dom'

const Main = () => {

    const [refreshState, setRefresh] = useState(false)
    const refresh = () => {
        setRefresh(!refreshState)
    }

    return (
            <fieldset>
                <legend>Main.jsx</legend>
                <div>
                    <h1>Favorite Authors</h1>
                    <Link to={"/new"}>
                        <h3>Add New Author</h3>
                    </Link>
                    <h3>We have quotes by:</h3>
                    <Dashboard refresh={refresh} refreshState={refreshState} />
                </div>
            </fieldset>
    )
}

export default Main