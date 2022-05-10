import React, { useState } from 'react';
import { useParams } from 'react-router-dom';


const Word = () => {

    const {word} = useParams()
    return (
        isNaN(word) ? 
        <h1>The Word is: {word}</h1>
        :  <h1>The Number is: {word}</h1>

    );
};

export default Word; 
