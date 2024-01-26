import Ionicons from "@expo/vector-icons/Ionicons";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { ScrollView, Text, TextInput, View } from "react-native";
import { PokemonDetails } from "../components/PokemonDetails";

export function SearchScreen() {
  const [filteredPokemonList, setFilteredPokemonList] = useState();
  const [clicked, setClicked] = useState(false);
  const [searchString, setSearchString] = useState("");

  const fetchPokemonList = async () => {
    await axios
      .get(`https://pokeapi.co/api/v2/pokemon/${searchString.toLowerCase()}`)
      .then((response) => {
        setFilteredPokemonList(response.data);
        // console.log("response", response.data);
      })
      .catch((error) => {
        console.log(error);
        console.log("searchString", searchString);
      });
  };

  const resetPokemonList = () => {
    setFilteredPokemonList();
  };

  useEffect(() => {
    if (searchString === "") {
      resetPokemonList();
    }
  }, [searchString]);

  useEffect(() => {
    filteredPokemonList &&
      console.log("filteredPokemonList", filteredPokemonList);
  }, [filteredPokemonList]);

  return (
    <ScrollView className="px-2 pt-2 bg-white">
      <View className="w-full flex-row h-12 items-center bg-zinc-100 rounded-full px-4 mb-4 space-x-2">
        <Ionicons name="ios-search" size={20} color="#3e424b" />
        <TextInput
          placeholder="Search Pokemon"
          onChangeText={(searchString) => {
            setSearchString(searchString.toLowerCase());
          }}
          onSubmitEditing={() => fetchPokemonList()}
          value={searchString}
          className="flex-1 h-full"
          enterKeyHint="search"
          onFocus={() => {
            setClicked(true);
          }}
          onBlur={() => {
            setClicked(false);
          }}
        />
        {clicked && (
          <Ionicons
            name="ios-close"
            size={20}
            color="#3e424b"
            onPress={() => {
              setSearchString("");
            }}
          />
        )}
      </View>

      {filteredPokemonList ? (
        <>
          <PokemonDetails pokemonInfos={filteredPokemonList} />
          <View className="h-4"></View>
        </>
      ) : (
        <View className="flex-1 justify-center items-center">
          <Text className="text-2xl font-bold text-gray-400">
            No Pokemon Found
          </Text>
        </View>
      )}
    </ScrollView>
  );
}
