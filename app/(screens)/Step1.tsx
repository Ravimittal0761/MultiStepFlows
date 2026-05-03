// app/index.tsx (Step1)

import AsyncStorage from "@react-native-async-storage/async-storage";
import { useRouter } from "expo-router";
import { useContext, useState } from "react";
import {
  Alert,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import StepWrapper from "../src/components/StepWrapper";
import { FormContext } from "../src/context/FormContext";
import { saveProgress } from "../src/services/api";
export default function Step1() {
  const router = useRouter();
  const { formData, setFormData } = useContext(FormContext);
  const [age, setAge] = useState(formData?.age || "");

  const handleNext = async () => {
    if (!age) return Alert.alert("Validation", "Age is required");

    const updatedData = { ...formData, age };
    // console.log("Before Save:", updatedData);
    setFormData(updatedData);
    await AsyncStorage.setItem("currentStep", "2");
    try {
      await saveProgress(updatedData);
    } catch (e) {
      Alert.alert("Error", "Failed to save", [
        { text: "Retry", onPress: () => saveProgress(updatedData) },
        { text: "Continue", style: "cancel" },
      ]);
    }

    router.push("/(screens)/Step2");
  };

  return (
    <SafeAreaView style={styles.safe} edges={["top", "bottom"]}>
      <StepWrapper step={1}>
        <Text style={styles.label}>Enter Your Age</Text>

        <TextInput
          placeholder="e.g. 22"
          value={age}
          onChangeText={setAge}
          style={styles.input}
          keyboardType="numeric"
        />

        <TouchableOpacity style={styles.button} onPress={handleNext}>
          <Text style={styles.buttonText}>Next</Text>
        </TouchableOpacity>
      </StepWrapper>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: "#f5f7fb",
  },

  label: {
    fontSize: 16,
    marginBottom: 8,
    fontWeight: "600",
  },

  input: {
    borderWidth: 1,
    borderColor: "#ddd",
    padding: 14,
    borderRadius: 10,
    backgroundColor: "#fff",
  },

  button: {
    marginTop: 20,
    backgroundColor: "#171985",
    padding: 14,
    borderRadius: 10,
    alignItems: "center",
  },

  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
});
