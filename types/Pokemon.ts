export interface PokemonDetails {
    name: string;
    image: string;
    imageBack: string
    url: string
    types: PokemonTypes[]
}

export interface PokemonTypes {
    slot: number
    type: {
        name: string
        url: string
    }
}

export interface IcolorByTypes {
    grass: string
    fire: string
    water: string
    bug: string
    dark: string
    dragon: string
    electric: string
    fairy: string
    fighting: string
    flying: string
    ghost: string
    ground: string
    ice: string
    normal: string
    poison: string
    psychic: string
    rock: string
    steel: string
    unknown: string
}