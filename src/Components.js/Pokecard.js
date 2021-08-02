import React from 'react';


const Pokecard = ({name, id, type, exp}) => {
    //let imgSrc = `${POKE_API}${props.id}`
    return (
        <div className='Pokecard'>
            <h1>{name}</h1>
            <img src="imgSrc" alt={name}/>
            <div>Type: {type}</div>
            <div>EXP: {exp}</div>
        </div>
    );
};

export default Pokecard;