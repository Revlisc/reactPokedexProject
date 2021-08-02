import React from 'react';
const POKE_API = ;

const Pokecard = () => {
    let imgSrc = `${POKE_API}${props.id}`
    return (
        <div className='Pokecard'>
            <h1>{props.name}</h1>
            <img src="imgSrc" alt={props.name}/>
            <div>Type: {props.type}</div>
            <div>EXP: {props.exp}</div>
        </div>
    );
};

export default Pokecard;