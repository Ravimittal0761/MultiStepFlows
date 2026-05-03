// src/utils/storage.ts
import AsyncStorage from "@react-native-async-storage/async-storage";

export const saveLocal = async (data: any) => {
  try {
    const jsonValue = JSON.stringify(data);
    await AsyncStorage.setItem("progress", jsonValue);
  } catch (e) {
    console.log("AsyncStorage Save Error:", e);
    throw e;
  }
};
export const loadLocal = async () => {
  const data = await AsyncStorage.getItem("progress");
  return data ? JSON.parse(data) : null;
};
