import { useEffect, useState } from "react";
import { fetchPokemonByName, fetchPokemons } from "@/services/pokemonService";
import { PokemonDetails } from "@/types/Pokemon";

export function usePokemons() {
    const [pokemons, setPokemons] = useState<PokemonDetails[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        fetchPokemons()
            .then(setPokemons)
            .catch(() => setError("Erro ao carregar pokémons"))
            .finally(() => setLoading(false));
    }, []);

    return { pokemons, loading, error };
}



export const usePokemonsDetails = (name: string) => {

    const [pokemon, setPokemon] = useState<any>(null)
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        fetchPokemonByName(name)
            .then(setPokemon)
            .catch(() => setError("Erro ao carregar pokémons"))
            .finally(() => setLoading(false));
    }, []);

    return { pokemon, loading, error };
}