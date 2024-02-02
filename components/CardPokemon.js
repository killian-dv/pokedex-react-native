import axios from "axios";
import { useEffect, useState } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { getBackgroundColor } from "../utils/utils";

export function CardPokemon({
  pokemonName,
  pokemonUrl,
  navigation,
  pokemonDataFromTeam,
}) {
  const [pokemonData, setPokemonData] = useState({});

  const fetchPokemon = async () => {
    const response = await axios.get(pokemonUrl);
    setPokemonData(response.data);
  };

  useEffect(() => {
    if (pokemonUrl) fetchPokemon();
    if (pokemonDataFromTeam) setPokemonData(pokemonDataFromTeam);
  }, []);

  const bgColor = getBackgroundColor(pokemonData?.types?.[0]?.type?.name);

  return (
    pokemonData && (
      <TouchableOpacity
        onPress={() => navigation.navigate("Details", { pokemonData })}
        style={{
          backgroundColor: bgColor,
          width: "50%",
          aspectRatio: 1,
          padding: 16,
          borderRadius: 8,
          position: "relative",
          overflow: "hidden",
        }}
      >
        <>
          <Text
            style={{
              color: "white",
              fontSize: 20,
              fontWeight: "bold",
              textTransform: "capitalize",
              marginBottom: 8,
            }}
          >
            {pokemonName}
          </Text>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              backgroundColor: "rgba(255, 255, 255, 0.5)",
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
                backgroundColor: "rgba(255, 255, 255, 0.5)",
                opacity: 50,
                borderRadius: 999,
                paddingHorizontal: 8,
                alignSelf: "flex-start",
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
          <View
            style={{
              position: "absolute",
              bottom: 0,
              right: 0,
              width: 120,
              height: 120,
            }}
          >
            <Image
              style={{ width: "100%", height: "100%" }}
              source={{
                uri: pokemonData?.sprites?.front_default,
              }}
            />
          </View>
        </>
      </TouchableOpacity>
    )
  );
}
