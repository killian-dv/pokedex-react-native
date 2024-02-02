import Ionicons from "@expo/vector-icons/Ionicons";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { ScrollView, StyleSheet, Text, TextInput, View } from "react-native";
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
    <ScrollView style={styles.container}>
      <View style={styles.searchbar}>
        <Ionicons name="ios-search" size={20} color="#3e424b" />
        <TextInput
          placeholder="Search Pokemon"
          onChangeText={(searchString) => {
            setSearchString(searchString.toLowerCase());
          }}
          onSubmitEditing={() => fetchPokemonList()}
          value={searchString}
          enterKeyHint="search"
          onFocus={() => {
            setClicked(true);
          }}
          onBlur={() => {
            setClicked(false);
          }}
          style={styles.input}
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
          <View style={{ height: 30 }}></View>
        </>
      ) : (
        <View style={styles.content}>
          <Text style={styles.text}>No Pokemon Found</Text>
        </View>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  searchbar: {
    width: "100%",
    height: 50,
    backgroundColor: "#f1f1f1",
    borderRadius: 20,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 10,
    marginBottom: 20,
    gap: 10,
  },
  input: {
    display: "flex",
    flexDirection: "row",
    flex: 1,
    height: 40,
  },
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#333333",
  },
});
