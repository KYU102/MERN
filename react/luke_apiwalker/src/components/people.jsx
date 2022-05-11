import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router';

const People = () => {
    const { id } = useParams()
    const [apiState, setAPIState] = useState()

    useEffect(() => {
        axios.get(`https://swapi.dev/api/people/${id}`) // MAKING A REQUEST TO GITHUB API
            .then(successResponse => {
                console.log("success" + successResponse.data)
                setAPIState(successResponse.data)
            })                  // Taking the response data and storing it in state
            .catch (errorResponse => console.log("ERROR: ", errorResponse))

    }, [id])




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
                {/* hotwire to display */}
                {

                    // apiState &&

                    // apiState.map(poke => {
                    //     return(
                    //         <h1>{poke.name}</h1>
                    //     )
                    // })


                    // useing a turnary to display
                    // (apiState) ?
                    //     <>
                    //         {apiState.map((person, index) => {
                    //             return (
                    //                 <div key={index}>
                    //                     <h1>{person.name} {index}</h1>
                    //                     <p>Height: {person.height}</p>
                    //                     <p>Mass: {person.mass}</p>
                    //                     <p>Hair Color: {person.hair_color}</p>
                    //                     <p>Skin Color: {person.skin_color}</p>
                    //                 </div>
                    //             )
                    //         })}
                    //     </> : null
                }
            </fieldset>
        )
    }

export default People