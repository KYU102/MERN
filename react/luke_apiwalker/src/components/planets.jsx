import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router';

const Planets = () => {
    const { id } = useParams()
    const [apiState, setAPIState] = useState()
    const [err, setErr] = useState()

    useEffect(() => {
        axios.get(`https://swapi.dev/api/planets/${id}`) // MAKING A REQUEST TO GITHUB API
            .then(successResponse => {
                console.log("success" + successResponse.data)
                setAPIState(successResponse.data)
                setErr()
            })                  // Taking the response data and storing it in state
            .catch(err => {
                setAPIState("")
                setErr("these are not the droids you are looking for")
            })
    }, [id])

    const showPlanets = () => {
        return (
            <fieldset>
                <legend>FetchPlanets.jsx</legend>
                {
                    apiState ?
                        <div>
                            <h1> Name: {apiState.name}</h1>
                            <h2> CLimate: {apiState.climate}</h2>
                            <h2> Terrain: {apiState.terrain}</h2>
                            <h2> Surface Water: {apiState.surface_water}</h2>
                            <h2> Population: {apiState.population}</h2>
                        </div>
                        : <h1> Loading...</h1>
                }
            </fieldset>
        )
    }

    const showError = () => {
        return (
            <div>
                <p>{err}</p>
                <img src='https://i.ytimg.com/vi/pUZo2Do2mcY/maxresdefault.jpg' />
            </div>
        )
    }

    return (
        <fieldset>
            <legend>FetchPeople.jsx</legend>
            {
                err ?
                    showError() : showPlanets()
            }
        </fieldset>
    )
}

export default Planets