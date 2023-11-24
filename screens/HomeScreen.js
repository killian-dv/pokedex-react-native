import { useSafeAreaInsets } from "react-native-safe-area-context";
import { StyleSheet, Text, View } from "react-native";
import { Header } from "../components/Header";

export function HomeScreen() {
  return (
    <View>
      <Text className="text-3xl">Pokedex</Text>
    </View>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     paddingTop: 40,
//     paddingHorizontal: 16,
//     backgroundColor: "#fff",
//   },
// });
