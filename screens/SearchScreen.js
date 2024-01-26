import Ionicons from "@expo/vector-icons/Ionicons";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { FlatList, TextInput, View } from "react-native";
import { CardPokemon } from "../components/CardPokemon";

export function SearchScreen({ navigation }) {
  const [pokemonList, setPokemonList] = useState([]);
  const [filteredPokemonList, setFilteredPokemonList] = useState([]);
  const [clicked, setClicked] = useState(false);

  const gap = 8;

  const fetchPokemonList = async () => {
    const response = await axios.get(
      `https://pokeapi.co/api/v2/pokemon/?limit=1000`
    );
    setPokemonList(response.data.results);
  };

  useEffect(() => {
    fetchPokemonList();
  }, []);
  return (
    <View className="p-2 bg-white">
      {/* <Text>Search</Text> */}
      <View className="w-full flex-row h-12 items-center bg-zinc-100 rounded-full px-2 mb-4 space-x-2">
        <Ionicons name="ios-search" size="20" color="#3e424b" />
        <TextInput
          placeholder="Search Pokemon"
          // onChangeText={(searchString) => {
          //   this.setState({ searchString });
          // }}
          className="flex-1 h-full"
          underlineColorAndroid="transparent"
          enterKeyHint="search"
          onFocus={() => {
            setClicked(true);
          }}
        />
      </View>
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
        />
      )}
    </View>
  );
}
