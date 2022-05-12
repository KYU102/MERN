import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router';

const People = () => {
    const { id } = useParams()
    const [apiState, setAPIState] = useState()
    const [err, setErr] = useState(null)


    useEffect(() => {
        axios.get(`https://swapi.dev/api/people/${id}`) // MAKING A REQUEST TO GITHUB API
            .then(successResponse => {
                console.log("success" + successResponse.data)
                setAPIState(successResponse.data)
                setErr(null)
            })                  // Taking the response data and storing it in state
            .catch(err => {
                setAPIState("")
                setErr("these are not the droids you are looking for")
            })

    }, [id])

    const showPeople = () => {
        return (
            <fieldset>
                <legend>FetchPeople.jsx</legend>
                {
                    apiState ?
                        <div>
                            <h1> Name: {apiState.name}</h1>
                            <h2> Height: {apiState.height}</h2>
                            <h2> Mass: {apiState.mass}</h2>
                            <h2> Skin Color: {apiState.skin_color}</h2>
                            <h2> Hair Color: {apiState.hair_color}</h2>

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
            <img src='https://i.ytimg.com/vi/pUZo2Do2mcY/maxresdefault.jpg'/>
            </div>
        )
    }


    return (
        <fieldset>
            <legend>FetchPeople.jsx</legend>
            {
                err ?
                    showError() : showPeople()
            }
        </fieldset>
    )
}

export default People