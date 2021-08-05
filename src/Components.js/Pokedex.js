import React from 'react';
import Pokecard from './Pokecard';
import { list } from '../List';
//import '../Pokedex-card.css';

const Pokedex = ({xp, pokemon, isWinner}) => {

    return (
        <div>
        
            <h1>Pokedex</h1>
            <p>Total Experience: {xp}</p>
            <p>{isWinner ? "WINNER" : "LOSER"}</p>
            <div className='Pokedex-card'>
                {list.map((p) => (
                    <Pokecard id={p.id} name={p.name} type={p.type} exp={p.exp}/>
                ))}
            </div>
        </div>
    );
}
export default Pokedex;