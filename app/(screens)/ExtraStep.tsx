// src/screens/ExtraStep.tsx
import { useContext, useState } from "react";
import {
  Text,
  TextInput,
  TouchableOpacity,
  View,
  StyleSheet,
} from "react-native";
import StepWrapper from "../src/components/StepWrapper";
import { FormContext } from "../src/context/FormContext";
import { useRouter } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import AsyncStorage from "@react-native-async-storage/async-storage";
export default function ExtraStep() {
  const router = useRouter();
  const { formData, setFormData } = useContext(FormContext);
  const [extra, setExtra] = useState("");

  return (
    <SafeAreaView style={styles.safe} edges={["top", "bottom"]}>
      <StepWrapper step={3}>
        
        <View style={styles.container}>
          
          {/* Label */}
          <Text style={styles.label}>Workout Preference</Text>

          {/* Input */}
          <TextInput
            placeholder="e.g. Gym, Yoga, Running"
            placeholderTextColor="#94A3B8"
            value={extra}
            onChangeText={setExtra}
            style={styles.input}
          />

          {/* Button */}
          <TouchableOpacity
            style={styles.button}
            activeOpacity={0.8}
           onPress={async () => {   
  setFormData({ ...formData, extra });
  await AsyncStorage.setItem("currentStep", "4");
  router.push("/(screens)/Step3");
}}
          >
            <Text style={styles.buttonText}>Next</Text>
          </TouchableOpacity>

        </View>

      </StepWrapper>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: "#F8FAFC",
  },

  container: {
    marginTop: 20,
  },

  label: {
    fontSize: 18,
    fontWeight: "600",
    color: "#0F172A",
    marginBottom: 10,
  },

  input: {
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
    borderColor: "#E2E8F0",
    borderRadius: 12,
    padding: 14,
    fontSize: 16,
    color: "#0F172A",
    marginBottom: 25,
  },

  button: {
    backgroundColor: "#0b0d7b",
    padding: 16,
    borderRadius: 12,
    alignItems: "center",
    shadowColor: "#6366F1",
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 3,
  },

  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
});