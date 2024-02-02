import axios from "axios";
import React, { useEffect, useState } from "react";
import { FlatList, Text, View } from "react-native";
import { CardPokemon } from "../components/CardPokemon";

export function HomeScreen({ navigation }) {
  const [pokemonList, setPokemonList] = useState([]);
  const limit = 20;
  const [offset, setOffset] = useState(0);

  const gap = 8;

  const fetchPokemonList = async () => {
    const response = await axios.get(
      `https://pokeapi.co/api/v2/pokemon/?limit=${limit}&offset=${offset}`
    );
    setPokemonList((prevList) => [...prevList, ...response.data.results]);
  };

  useEffect(() => {
    fetchPokemonList();
  }, [offset]);

  return (
    <View style={{ padding: 10, backgroundColor: "#fff" }}>
      <Text
        className="text-3xl font-bold"
        style={{
          fontSize: 30,
          fontWeight: "bold",
          marginBottom: 10,
          color: "#3e424b",
        }}
      >
        Pokedex
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
              pokemonUrl={item.url}
              navigation={navigation}
            />
          )}
          keyExtractor={(item) => item.url}
          onEndReached={() => {
            setOffset(offset + limit);
          }}
          onEndReachedThreshold={0.5}
        />
      )}
    </View>
  );
}
