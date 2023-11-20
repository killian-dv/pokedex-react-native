import { Text, View, StyleSheet, Image, TouchableOpacity } from "react-native";

export function Header({ title }) {
  const onPress = () => {
    alert("Hello");
  };
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 30, fontWeight: "bold" }}>{title}</Text>
      <TouchableOpacity
        style={{ flexDirection: "row", alignItems: "center" }}
        onPress={onPress}
      >
        <Image
          source={require("../assets/account.png")}
          style={{ height: 40, width: 40 }}
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 16,
    backgroundColor: "#fff",
  },
});
