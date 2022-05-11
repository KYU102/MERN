import React from 'react'
import { useState } from 'react';
import { Outlet, useNavigate } from 'react-router';

const Search = () => {
    const navigate = useNavigate()

    const [category, setCategory] = useState("people");
    const [id, setId] = useState();

    const submitHandler = (e) => {
        e.preventDefault()
        navigate(`/${category}/${id}`)
    }
    
    
    return (
        <div>
            <form onSubmit={submitHandler}>
            Search for:
            <select onChange={(event) => setCategory(event.target.value) } name="category">
                <option value="people">People</option>
                <option value="planets">Planets</option>
            </select>

                <label>
                    ID:
                    <input onChange={(event) => setId(event.target.value) } type="number" name="id" />
                </label>
                <button>Search</button>
            </form>
            <Outlet />
        </div>
    )

}

export default Search