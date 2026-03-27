import { PokemonDetails } from "@/types/Pokemon";

export async function fetchPokemons(): Promise<PokemonDetails[]> {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=151');
    const data = await response.json();

    return Promise.all(
        data.results.map(async (pokemon: PokemonDetails) => {
            const res = await fetch(pokemon.url);
            const details = await res.json();
            return {
                name: pokemon.name,
                image: details.sprites.front_default,
                imageBack: details.sprites.back_default,
                types: details.types
            };
        })
    );
}

export async function fetchPokemonByName(name: string) {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
    const data = await res.json();
    return data;
}