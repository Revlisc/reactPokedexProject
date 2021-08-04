import React from 'react';
import Pokecard from './Pokecard';
import { list } from '../List';
import '../Pokedex-card.css';

const Pokedex = () => {

    return (
        <div>
        
            <h1>Pokedex</h1>
            <div className='Pokedex-card'>
                {list.map((p) => (
                    <Pokecard id={p.id} name={p.name} type={p.type} exp={p.exp}/>
                ))}
            </div>
        </div>
    );
}
export default Pokedex;