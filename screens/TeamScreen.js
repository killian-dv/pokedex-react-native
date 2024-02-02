import { useFocusEffect } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { FlatList, Text, View } from "react-native";
import { CardPokemon } from "../components/CardPokemon";
import { getAllKeys, multiGet } from "../utils/utils";

export function TeamScreen({ navigation }) {
  const [pokemonList, setPokemonList] = useState([]);

  const gap = 8;

  useFocusEffect(
    React.useCallback(() => {
      const fetchData = async () => {
        try {
          const keys = await getAllKeys();
          const filteredKeys = keys?.filter((key) =>
            key.startsWith("pokemon[")
          );
          const pokemonDataPairs = await multiGet(filteredKeys);
          const pokemonValues = pokemonDataPairs.map(([key, value]) =>
            JSON.parse(value)
          );
          console.log("pokemonData", pokemonValues);
          setPokemonList(pokemonValues);
        } catch (error) {
          console.error("Error retrieving keys:", error);
        }
      };

      fetchData();
    }, [])
  );

  useEffect(() => {
    console.log("hello");
  }, []);

  return (
    <View style={{ padding: 10, backgroundColor: "#fff", minHeight: "100%" }}>
      <Text
        className="text-3xl font-bold"
        style={{
          fontSize: 30,
          fontWeight: "bold",
          marginBottom: 10,
          color: "#3e424b",
        }}
      >
        My Team
      </Text>
      {pokemonList && (
        <FlatList
          data={pokemonList}
          numColumns={2}
          contentContainerStyle={{ gap }}
          columnWrapperStyle={{ gap }}
          renderItem={({ item }) => (
            <CardPokemon
              pokemonName={item.name}
              navigation={navigation}
              pokemonDataFromTeam={item}
            />
          )}
          keyExtractor={(item) => item.id}
        />
      )}
    </View>
  );
}
