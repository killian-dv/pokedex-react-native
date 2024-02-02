import * as ScreenOrientation from "expo-screen-orientation";
import * as SMS from "expo-sms";
import React, { useEffect, useState } from "react";
import {
  Switch,
  Text,
  TextInput,
  View,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";

export function SettingsScreen() {
  const [isEnabled, setIsEnabled] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState("");
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

  const sendMessage = async () => {
    const isAvailable = await SMS.isAvailableAsync();
    if (isAvailable) {
      const { result } = await SMS.sendSMSAsync(
        [phoneNumber],
        "Pika Pika Pikachu !!!⚡️",
        {
          attachments: {
            uri: "https://www.icegif.com/wp-content/uploads/2021/11/icegif-110.gif",
            mimeType: "image/gif",
            filename: "pikachu.gif",
          },
        }
      );
    } else {
      // misfortune... there's no SMS available on this device
    }
  };
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View
        style={{
          padding: 10,
          backgroundColor: "#fff",
          minHeight: "100%",
          flex: 1,
        }}
      >
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
        <View
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            marginBottom: 10,
          }}
        >
          <Text className="text-lg">
            Enter your phone number to have a surprise
          </Text>
          <TextInput
            style={{
              padding: 10,
              height: 40,
              backgroundColor: "#f1f1f1",
              borderRadius: 8,
            }}
            onChangeText={setPhoneNumber}
            value={phoneNumber}
            keyboardType="numeric"
            returnKeyType="done"
            onSubmitEditing={() => sendMessage()}
          />
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}
