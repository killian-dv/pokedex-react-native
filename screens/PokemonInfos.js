import { Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export function PokemonInfos({ route }) {
  const pokemonData = route.params.pokemonData;

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
    <View className="p-2">
      <View>
        <Text className="text-xl">{pokemonData.name}</Text>
      </View>
    </View>
  );
}
