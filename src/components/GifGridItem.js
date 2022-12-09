import React from 'react'
import { useState } from 'react';

export const GifGridItem = ({ title, url }) => {

    const [copiado, setCopiado] = useState('');

    const copyToClipboard = () => {
        navigator.clipboard.writeText(url)
        .then(() => {
            setCopiado('Copiado');
            setTimeout(() => {
                setCopiado('');
            }, 3000);
            console.log("Text copied to clipboard...")
         });
    }

    return (
        <div className="card animate__animated animate__fadeIn">
            <img src={ url } alt={ title } />
            <p> { title } </p>
            <div >{copiado}</div>
            <input readOnly type='text' onClick={copyToClipboard} value={url} ></input>
        </div>
    )
}
