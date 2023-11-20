import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacit,
  Pressable,
} from "react-native";
import { useNavigation } from "@react-navigation/native"; // Importez useNavigation
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

export function Header({ title }) {
  const navigation = useNavigation(); // Utilisez useNavigation pour obtenir la navigation

  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 30, fontWeight: "bold" }}>{title}</Text>
      <Pressable
        style={{ flexDirection: "row", alignItems: "center" }}
        onPress={() => navigation.navigate("Account")}
      >
        <Image
          source={require("../assets/account.png")}
          style={{ height: 40, width: 40 }}
        />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 16,
  },
});
