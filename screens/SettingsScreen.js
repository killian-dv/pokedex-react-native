import * as ScreenOrientation from "expo-screen-orientation";
import React, { useState } from "react";
import { Switch, Text, View } from "react-native";

export function SettingsScreen() {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = async () => {
    if (isEnabled) {
      await ScreenOrientation.lockAsync(
        ScreenOrientation.OrientationLock.DEFAULT
      );
    } else {
      await ScreenOrientation.lockAsync(
        ScreenOrientation.OrientationLock.LANDSCAPE_RIGHT
      );
    }
    setIsEnabled((previousState) => !previousState);
  };
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
        Settings
      </Text>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          marginBottom: 10,
        }}
      >
        <Text className="text-lg">Landscape orientation</Text>
        <Switch
          trackColor={{ false: "#fefefe", true: "#fb6c6c" }}
          thumbColor={isEnabled ? "#fff" : "#fff"}
          ios_backgroundColor="#fefefe"
          onValueChange={toggleSwitch}
          value={isEnabled}
        />
      </View>
    </View>
  );
}
