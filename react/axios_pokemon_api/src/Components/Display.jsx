import React, { useEffect, useState } from 'react'
import axios from 'axios'

const MainUseEffect = (props) => {
    const [apiState, setAPIState] = useState()

    useEffect(() => {
        axios.get("https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0") // MAKING A REQUEST TO GITHUB API
            .then(successResponse => {
                console.log("SUCCESS: ", successResponse.data)
                setAPIState(successResponse.data.results) // Taking the response data and storing it in state
            }) // successful response
            .catch(errorResponse => console.log("ERROR: ", errorResponse)) // unsuccessful response
    }, [])

    return (
        <fieldset>
            <legend>MainUseEffect.jsx</legend>
            {
                apiState &&
                
                apiState.map(poke => {
                    return(
                        <h1>{poke.name}</h1>
                    )
                })
            }
        </fieldset>
    )
}

export default MainUseEffect