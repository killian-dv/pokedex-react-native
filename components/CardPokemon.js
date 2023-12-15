import { useEffect, useState } from "react";
import { Text, TouchableOpacity, Image, View } from "react-native";
import axios from "axios";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

export function CardPokemon({ pokemonName, pokemonUrl, navigation }) {
  const [pokemonData, setPokemonData] = useState({});

  const fetchPokemon = async () => {
    const response = await axios.get(pokemonUrl);
    setPokemonData(response.data);
  };

  useEffect(() => {
    fetchPokemon();
  }, []);

  const getBackgroundColor = (type) => {
    switch (type) {
      case "normal":
        return "bg-gray-400";
      case "fighting":
        return "bg-red-600";
      case "flying":
        return "bg-blue-300";
      case "poison":
        return "bg-purple-600";
      case "ground":
        return "bg-yellow-800";
      case "rock":
        return "bg-yellow-600";
      case "bug":
        return "bg-teal-500";
      case "ghost":
        return "bg-violet-400";
      case "steel":
        return "bg-gray-500";
      case "fire":
        return "bg-red-500";
      case "water":
        return "bg-sky-400";
      case "grass":
        return "bg-emerald-400";
      case "electric":
        return "bg-yellow-300";
      case "psychic":
        return "bg-pink-500";
      case "ice":
        return "bg-blue-200";
      case "dragon":
        return "bg-red-900";
      case "dark":
        return "bg-gray-900";
      case "fairy":
        return "bg-pink-300";
      case "unknown":
        return "bg-gray-200";
      case "shadow":
        return "bg-gray-900";
      default:
        return "bg-slate-200";
    }
  };

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
