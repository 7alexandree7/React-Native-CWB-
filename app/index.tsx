import { colorsByType } from "@/CONST/colorsByType";
import { IcolorByTypes } from "@/types/Pokemon";
import { Link } from "expo-router";
import { FlatList, Image, ScrollView, Text, View, } from "react-native";
import { styles } from "@/styles/index.styles";
import { usePokemons } from "@/hooks/usePokemons";


export default function Index() {

  const { pokemons, loading, error } = usePokemons();

  if (loading) return <Text>Carregando...</Text>;
  if (error) return <Text>{error}</Text>;

  return (
    <FlatList
      style={styles.scrollView}
      contentContainerStyle={styles.container}
      data={pokemons}
      keyExtractor={(pokemon) => pokemon.name}
      renderItem={({ item: pokemon }) => (

        <Link
          style={[
            styles.card,
            { backgroundColor: colorsByType[pokemon.types[0].type.name as keyof IcolorByTypes] + '60' }
          ]}
          href={{ pathname: "/details", params: { name: pokemon.name } }}
        >

          <View>
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
      )}
    />
  )
}
