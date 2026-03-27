import { colorsByType } from "@/CONST/colorsByType";
import { IcolorByTypes, PokemonDetails } from "@/types/Pokemon";
import { Link } from "expo-router";
import { useEffect, useState } from "react";
import { Image, ScrollView, Text, View, } from "react-native";
import { styles } from "@/styles/index.styles";


export default function Index() {

  const [pokemons, setPokemons] = useState<PokemonDetails[]>([]);

  useEffect(() => {
    fetchPokemons();
  }, [])


  async function fetchPokemons() {
    try {
      const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=20');
      const data = await response.json();

      const detailedPokemons = await Promise.all(
        data.results.map(async (pokemon: PokemonDetails) => {
          const res = await fetch(pokemon.url);
          const details = await res.json();
          return {
            name: pokemon.name,
            image: details.sprites.front_default,
            imageBack: details.sprites.back_default,
            types: details.types
          }
        })
      )
      setPokemons(detailedPokemons);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <ScrollView style={styles.scrollView} contentContainerStyle={styles.container}>
      {pokemons.map((pokemon) => (
        <Link href={"/details"} key={pokemon.name}>
          <View
            style={[
              styles.card,
              { backgroundColor: colorsByType[pokemon.types[0].type.name as keyof IcolorByTypes] + '60' }
            ]}
          >
            <Text style={styles.name}>{pokemon.name}</Text>
            <View style={styles.typesContainer}>
              {pokemon.types.map((typeObj) => (
                <Text style={styles.type} key={typeObj.slot}>{typeObj.type.name}</Text>
              ))}
            </View>
            <View style={styles.containerImg}>
              <Image source={{ uri: pokemon.image }} width={150} height={150} />
              <Image source={{ uri: pokemon.imageBack }} width={150} height={150} />
            </View>
          </View>
        </Link>
      ))}
    </ScrollView>
  );
}

