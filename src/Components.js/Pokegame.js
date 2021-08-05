import React from 'react';
import { list } from '../List';
import Pokedex from './Pokedex';

const Pokegame = () => {
    
    let hand1 = [];
    let hand2 = [list];
    while(hand1.length < hand2.length) {
        let rand = Math.floor(Math.random * hand2.length);
        let randPoke = hand2.splice(rand, 1)[0];
        hand1.push(randPoke);
    }
    let exp1 = hand1.reduce((exp, pokemon) => exp + pokemon.exp, 0);
    let exp2 = hand2.reduce((exp, pokemon) => exp + pokemon.exp, 0);
    return (
        <div>
            <h1>Pokegame</h1>
            <Pokedex pokemon={hand1} xp={exp1} isWinner={exp1 > exp2}/>
            <Pokedex pokemon={hand2} xp={exp2} isWinner={exp2 > exp1}/>
        </div>
    );
};

export default Pokegame;
