import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import {GET_POKEMONS} from '../graphql/get-pokemons';

export const PokemonContainer= () => {

const { data: { pokemons = []}= {}} = useQuery(GET_POKEMONS, {
    variables: { first: 9 },
})

return (
    <div className="container">
        {pokemons &&
            pokemons.map((pokemon => JSON.stringify(pokemon))
            
    
)}</div>)}
       


