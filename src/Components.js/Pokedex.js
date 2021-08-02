import React from 'react';
import Pokecard from './Pokecard';
import { list } from '../List';

const Pokedex = () => {

    return (
        <div>
            <h1>Pokedex</h1>
            {list.map((p) => (
                <Pokecard id={p.id} name={p.name} type={p.type} exp={p.exp}/>
            ))}
        </div>
    );
}
export default Pokedex;