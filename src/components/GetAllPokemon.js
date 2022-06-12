import Axios from "axios";
export function GetAllPokemon() {
    const pokemonArray = [];

    Axios.get('https://pokeapi.co/api/v2/pokemon?limit=4')
        .then(function (response) {
            pokemonArray.push(...response.data.results)
            return (
                pokemonArray.map((pokemon) => (
                    <div className="PokemonListContainer">
                        <h2 className="PokemonName">
                            Name: {pokemon.name}
                            {console.log(pokemon.name)}
                        </h2>
                    </div>
                ))
            )
        })

}