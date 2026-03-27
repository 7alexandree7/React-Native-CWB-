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