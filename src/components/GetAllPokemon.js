import Axios from "axios";
import { useState } from 'react';

export function GetAllPokemon() {
    const pokemonArray = [useState("")];


    Axios.get('https://pokeapi.co/api/v2/pokemon?limit=4')
        .then(function (response) {
            pokemonArray.push(...response.data.results)
            pokemonArray.map((pokemon) => {
                return (
                    <div className="PokemonListContainer">
                        <h2 className="PokemonName">
                            Name: {pokemon.name}
                            {console.log(pokemon.name)}
                        </h2>
                    </div>
                )
            })

        })

}