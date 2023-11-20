import { Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export function Account() {
  const insets = useSafeAreaInsets();
  return (
    <View style={{ flex: 1, paddingTop: insets.top }}>
      <Text>Account</Text>
    </View>
  );
}
