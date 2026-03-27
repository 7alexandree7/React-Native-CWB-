import { usePokemonsDetails } from "@/hooks/usePokemons";
import { useLocalSearchParams } from "expo-router";
import { Image, ScrollView, Text } from "react-native";
import { styles } from "@/styles/details.styles";


export default function Details() {

  const { name } = useLocalSearchParams();
  const { loading, pokemon } = usePokemonsDetails(name as string);

  if ( !pokemon || loading ) return <Text>Carregando...</Text>;

  return (
    <>
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.name}>{pokemon.name}</Text>

        <Image
          source={{ uri: pokemon.sprites.other["official-artwork"].front_default }}
          width={250}
          height={250}
          style={{ alignSelf: 'center' }}
        />

        <Text style={styles.label}>Altura: {pokemon.height / 10}m</Text>
        <Text style={styles.label}>Peso: {pokemon.weight / 10}kg</Text>
        <Text style={styles.label}>Experiência base: {pokemon.base_experience}</Text>

        <Text style={styles.section}>Stats</Text>
        {pokemon.stats.map((s: any) => (
          <Text key={s.stat.name}>{s.stat.name}: {s.base_stat}</Text>
        ))}
      </ScrollView>
    </>
  );
}
