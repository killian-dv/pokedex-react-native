import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Home } from "./pages/Home";

export default function App() {
  return (
    <SafeAreaProvider>
      <Home />
      <StatusBar style="auto" />
    </SafeAreaProvider>
  );
}
