import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate, Link} from 'react-router-dom'

const Dashboard = (props) => {

    // const navigate = useNavigate()

    // const [allTeams, setAllTeams] = useState([])

    // const { refreshState, refresh } = props

    // useEffect(() => {
    //     axios.get("http://localhost:8001/api/teams")
    //         .then(res => setAllTeams(res.data))
    //         .catch(err => console.log(err))
    // }, [refreshState])

    // const deleteTeam = (id) => {
    //     axios.delete("http://localhost:8000/api/teams/" + id)
    //         .then(res => refresh())
    //         .catch(err => console.log(err))
    // }


    return (
        <fieldset>
            <legend>Dashboard.jsx</legend>
            <Link to={"/"}>
                <p>Manage Player</p>
            </Link>
            <Link to={"/status/game/1"}>
                <p>Manage Status</p>
            </Link>

        </fieldset>
    )
}

export default Dashboard