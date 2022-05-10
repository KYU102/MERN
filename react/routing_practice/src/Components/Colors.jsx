import React, { useState } from 'react';
import { useParams } from 'react-router-dom';


const Colors = () => {

    const {word, color, bgColor} = useParams()
    return (
        <h1 style={{color:color, backgroundColor:bgColor}}>The Word is: {word}</h1>

    );
};

export default Colors; 
