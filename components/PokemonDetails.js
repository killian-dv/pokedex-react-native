import Ionicons from "@expo/vector-icons/Ionicons";
import * as Haptics from "expo-haptics";
import { useEffect, useState } from "react";
import { Alert, Image, Text, TouchableOpacity, View } from "react-native";
import {
  getAllKeys,
  getBackgroundColor,
  getData,
  removeData,
  storeData,
} from "../utils/utils";

export function PokemonDetails({ pokemonInfos }) {
  const pokemonData = pokemonInfos;
  const [isLiked, setIsLiked] = useState(false);

  useEffect(() => {
    getData("pokemon[" + pokemonData.id.toString() + "]").then((data) => {
      if (data) {
        setIsLiked(true);
      }
    });
  }, []);

  const toggleLike = async () => {
    if (!isLiked) {
      const allKeys = await getAllKeys();
      const pokemonKeys = allKeys?.filter((key) => key.startsWith("pokemon["));
      if (pokemonKeys.length > 5) {
        Alert.alert("You can only have 6 liked pokemons");
        return;
      } else {
        setIsLiked(!isLiked);
        storeData("pokemon[" + pokemonData.id.toString() + "]", pokemonData);
      }
    } else if (isLiked) {
      removeData("pokemon[" + pokemonData.id.toString() + "]");
      setIsLiked(!isLiked);
    }
  };

  return (
    <>
      <View
        style={{
          position: "relative",
          overflow: "hidden",
          borderRadius: 16,
          aspectRatio: 1,
          padding: 16,
          backgroundColor: getBackgroundColor(
            pokemonData?.types?.[0]?.type?.name
          ),
        }}
      >
        <Image
          style={{
            width: "100%",
            height: "100%",
          }}
          source={{
            uri: pokemonData?.sprites?.front_default,
          }}
        />
        <TouchableOpacity
          style={{
            position: "absolute",
            top: 10,
            right: 10,
            zIndex: 999,
            backgroundColor: "white",
            borderRadius: 999,
            paddingHorizontal: 8,
            height: 40,
            width: 40,
            justifyContent: "center",
            alignItems: "center",
            display: "flex",
          }}
          onPress={() => {
            toggleLike();
            Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
          }}
        >
          <Ionicons
            name={isLiked ? "ios-heart" : "ios-heart-outline"}
            size={24}
            color="red"
          />
        </TouchableOpacity>
      </View>
      <View
        className="w-full"
        style={{
          width: "100%",
        }}
      >
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            marginTop: 10,
            marginBottom: 10,
          }}
        >
          <Text className="flex-1 text-3xl font-bold capitalize">
            {pokemonData.name}
          </Text>
          <View className="flex-2 flex-row items-center gap-2">
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                backgroundColor: getBackgroundColor(
                  pokemonData?.types?.[0]?.type?.name
                ),
                opacity: 50,
                borderRadius: 999,
                paddingHorizontal: 8,
                alignSelf: "flex-start",
                marginBottom: 6,
              }}
            >
              <Text
                style={{
                  color: "white",
                  fontSize: 15,
                  textTransform: "capitalize",
                }}
              >
                {pokemonData?.types?.[0]?.type?.name}
              </Text>
            </View>
            {pokemonData?.types?.[1]?.type?.name && (
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  backgroundColor: getBackgroundColor(
                    pokemonData?.types?.[1]?.type?.name
                  ),
                  opacity: 50,
                  borderRadius: 999,
                  paddingHorizontal: 8,
                  alignSelf: "flex-start",
                  marginBottom: 6,
                }}
              >
                <Text
                  style={{
                    color: "white",
                    fontSize: 15,
                    textTransform: "capitalize",
                  }}
                >
                  {pokemonData?.types?.[1]?.type?.name}
                </Text>
              </View>
            )}
          </View>
        </View>
        <View
          className="mt-2 max-w-full"
          style={{ marginTop: 10, maxWidth: "auto" }}
        >
          <View
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 10,
            }}
          >
            {pokemonData?.stats?.map((stat, index) => (
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                  maxWidth: "auto",
                  minWidth: 0,
                }}
                key={index}
              >
                <Text style={{ textTransform: "capitalize", fontWeight: 500 }}>
                  {stat.stat.name}
                </Text>
                <View
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                    maxWidth: 220,
                    minWidth: 0,
                  }}
                >
                  <Text
                    style={{
                      fontWeight: "bold",
                      fontSize: 16,
                      marginRight: 8,
                      textTransform: "capitalize",
                    }}
                  >
                    {stat.base_stat}
                  </Text>
                  <View
                    style={{
                      width: "100%",
                      flex: 1,
                      height: 10,
                      backgroundColor: "rgba(0, 0, 0, 0.1)",
                      borderRadius: 999,
                      overflow: "hidden",
                    }}
                  >
                    <View
                      style={{
                        width: `${stat.base_stat}%`,
                        borderRadius: 999,
                        backgroundColor: getBackgroundColor(
                          pokemonData?.types?.[0]?.type?.name
                        ),
                        height: "100%",
                      }}
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
