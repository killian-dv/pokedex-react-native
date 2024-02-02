import { ScrollView } from "react-native";
import { PokemonDetails } from "../components/PokemonDetails";

export function PokemonInfos({ route }) {
  const pokemonData = route.params.pokemonData;

  return (
    <ScrollView style={{ padding: 10, backgroundColor: "#fff" }}>
      <PokemonDetails pokemonInfos={pokemonData} />
    </ScrollView>
  );
}
