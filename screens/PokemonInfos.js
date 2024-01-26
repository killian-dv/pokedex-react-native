import { ScrollView } from "react-native";
import { PokemonDetails } from "../components/PokemonDetails";

export function PokemonInfos({ route }) {
  const pokemonData = route.params.pokemonData;

  return (
    <ScrollView className="p-2 bg-white">
      <PokemonDetails pokemonInfos={pokemonData} />
    </ScrollView>
  );
}
