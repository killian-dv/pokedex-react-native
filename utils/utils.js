import AsyncStorage from "@react-native-async-storage/async-storage";

export const getBackgroundColor = (type) => {
  switch (type) {
    case "normal":
      return "#9CA3AF";
    case "fighting":
      return "#EF4444";
    case "flying":
      return "#60A5FA";
    case "poison":
      return "#8B5CF6";
    case "ground":
      return "#FBBF24";
    case "rock":
      return "#F59E0B";
    case "bug":
      return "#10B981";
    case "ghost":
      return "#7C3AED";
    case "steel":
      return "#6B7280";
    case "fire":
      return "#DC2626";
    case "water":
      return "#3B82F6";
    case "grass":
      return "#10B981";
    case "electric":
      return "#FBBF24";
    case "psychic":
      return "#EC4899";
    case "ice":
      return "#60A5FA";
    case "dragon":
      return "#DC2626";
    case "dark":
      return "#4B5563";
    case "fairy":
      return "#EC4899";
    case "unknown":
      return "#F9FAFB";
    case "shadow":
      return "#4B5563";
    default:
      return "#F9FAFB";
  }
};

export const storeData = async (key, value) => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem(key, jsonValue);
  } catch (e) {
    // saving error
  }
};

export const getData = async (key) => {
  try {
    const jsonValue = await AsyncStorage.getItem(key);
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (e) {
    // error reading value
  }
};

export const getAllKeys = async () => {
  try {
    const keys = await AsyncStorage.getAllKeys();
    return keys;
  } catch (e) {
    // error reading value
  }
};

export const multiGet = async (keys) => {
  try {
    const values = await AsyncStorage.multiGet(keys);
    return values;
  } catch (e) {
    // read error
  }
};

export const removeData = async (key) => {
  try {
    await AsyncStorage.removeItem(key);
  } catch (e) {
    // remove error
  }
};
