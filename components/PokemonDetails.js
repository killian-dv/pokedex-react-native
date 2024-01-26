import { Image, Text, View } from "react-native";
import { getBackgroundColor } from "../utils/utils";

export function PokemonDetails({ pokemonInfos }) {
  const pokemonData = pokemonInfos;

  return (
    <>
      <View
        className={`aspect-square p-4 rounded-2xl overflow-hidden ${getBackgroundColor(
          pokemonData?.types?.[0]?.type?.name
        )}`}
      >
        <Image
          className="w-full h-full"
          source={{
            uri: pokemonData?.sprites?.front_default,
          }}
        />
      </View>
      <View className="w-full">
        <View className="flex gap-4 flex-row items-center mt-1">
          <Text className="flex-1 text-3xl font-bold capitalize">
            {pokemonData.name}
          </Text>
          <View className="flex-2 flex-row items-center gap-2">
            <View
              className={`flex flex-row bg-slate-200/50 rounded-full self-start px-2 ${getBackgroundColor(
                pokemonData?.types?.[0]?.type?.name
              )} opacity-70`}
            >
              <Text className="text-white text-sm font-medium capitalize">
                {pokemonData?.types?.[0]?.type?.name}
              </Text>
            </View>
            {pokemonData?.types?.[1]?.type?.name && (
              <View
                className={`flex flex-row bg-slate-200/50 rounded-full self-start px-2 mt-1 ${getBackgroundColor(
                  pokemonData?.types?.[1]?.type?.name
                )} opacity-70`}
              >
                <Text className="text-white text-sm font-medium capitalize">
                  {pokemonData?.types?.[1]?.type?.name}
                </Text>
              </View>
            )}
          </View>
        </View>
        <View className="mt-2 max-w-full">
          <View className="flex flex-column gap-2 mt-2 max-w-full min-w-0">
            {pokemonData?.stats?.map((stat, index) => (
              <View
                className="flex-row items-center justify-between max-w-full min-w-0"
                key={index}
              >
                <Text className="font-medium capitalize">{stat.stat.name}</Text>
                <View className="w-[200px] max-w-[200px] min-w-0 flex-row items-center">
                  <Text className="font-bold text-lg capitalize mr-2">
                    {stat.base_stat}
                  </Text>
                  <View className="w-full flex-1 h-2 bg-gray-200 rounded-full mt-1">
                    <View
                      className={`h-full bg-green-200 rounded-full`}
                      style={{ width: `${stat.base_stat}%` }}
                    />
                  </View>
                </View>
              </View>
            ))}
          </View>
        </View>
      </View>
    </>
  );
}
