import axios from "axios";
import { useEffect, useState } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { getBackgroundColor } from "../utils/utils";

export function CardPokemon({ pokemonName, pokemonUrl, navigation }) {
  const [pokemonData, setPokemonData] = useState({});

  const fetchPokemon = async () => {
    const response = await axios.get(pokemonUrl);
    setPokemonData(response.data);
  };

  useEffect(() => {
    fetchPokemon();
  }, []);

  return (
    <TouchableOpacity
      className={`w-[50%] aspect-square p-4 rounded relative overflow-hidden ${getBackgroundColor(
        pokemonData?.types?.[0]?.type?.name
      )}`}
      onPress={() => navigation.navigate("Details", { pokemonData })}
    >
      {pokemonData && (
        <>
          <Text className="text-white text-lg font-bold capitalize">
            {pokemonName}
          </Text>
          <View className="flex flex-row bg-slate-200/50 rounded-full self-start px-2">
            <Text className="text-white text-sm font-medium capitalize">
              {pokemonData?.types?.[0]?.type?.name}
            </Text>
          </View>
          {pokemonData?.types?.[1]?.type?.name && (
            <View className="flex flex-row bg-slate-200/50 rounded-full self-start px-2 mt-1">
              <Text className="text-white text-sm font-medium capitalize">
                {pokemonData?.types?.[1]?.type?.name}
              </Text>
            </View>
          )}
          <View className="w-32 h-32 absolute bottom-0 right-0">
            <Image
              className="w-full h-full"
              source={{
                uri: pokemonData?.sprites?.front_default,
              }}
            />
          </View>
        </>
      )}
    </TouchableOpacity>
  );
}
