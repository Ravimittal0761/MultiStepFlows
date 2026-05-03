// src/screens/Step2.tsx
import { useContext, useState } from "react";
import { Alert, Text, TouchableOpacity, View, StyleSheet } from "react-native";
import StepWrapper from "../src/components/StepWrapper";
import { FormContext } from "../src/context/FormContext";
import { useRouter } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import AsyncStorage from "@react-native-async-storage/async-storage";
export default function Step2() {
  const router = useRouter();
  const { formData, setFormData } = useContext(FormContext);

  const [selectedGoal, setSelectedGoal] = useState(formData?.goal || "");

  const selectGoal = (goal: string) => {
    setSelectedGoal(goal);
    setFormData({ ...formData, goal });
  };

  const handleNext = async ()  => {
    if (!selectedGoal) return Alert.alert("Select goal");

    if (selectedGoal === "Fitness") {
       await AsyncStorage.setItem("currentStep", "3");
      router.push("/(screens)/ExtraStep");
    } else {
       await AsyncStorage.setItem("currentStep", "4")
      router.push("/(screens)/Step3");
    }
  };

  return (
      <SafeAreaView style={styles.safe} edges={["top", "bottom"]}>
    <StepWrapper step={2}>
      <View style={styles.container}>
        <Text style={styles.title}>Select Your Goal</Text>
        <Text style={styles.subtitle}>Choose one to continue</Text>

        {/* Option Cards */}
        <TouchableOpacity
          style={[
            styles.card,
            selectedGoal === "Fitness" && styles.selectedCard,
          ]}
          onPress={() => selectGoal("Fitness")}
        >
          <Text
            style={[
              styles.cardText,
              selectedGoal === "Fitness" && styles.selectedText,
            ]}
          >
            Fitness
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.card,
            selectedGoal === "Study" && styles.selectedCard,
          ]}
          onPress={() => selectGoal("Study")}
        >
          <Text
            style={[
              styles.cardText,
              selectedGoal === "Study" && styles.selectedText,
            ]}
          >
            Study
          </Text>
        </TouchableOpacity>

        {/* Buttons */}
        <View style={styles.buttonRow}>
          <TouchableOpacity
            style={styles.backBtn}
            onPress={() => router.back()}
          >
            <Text style={styles.backText}>Back</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              styles.nextBtn,
              !selectedGoal && { opacity: 0.5 },
            ]}
            onPress={handleNext}
            disabled={!selectedGoal}
          >
            <Text style={styles.nextText}>Next</Text>
          </TouchableOpacity>
        </View>
      </View>
    </StepWrapper>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    marginTop: 10,
  },
  safe: {
    flex: 1,
    backgroundColor: "#f5f7fb",
  },
  title: {
    fontSize: 22,
    fontWeight: "700",
    color: "#111827",
    marginBottom: 5,
  },

  subtitle: {
    fontSize: 14,
    color: "#6B7280",
    marginBottom: 20,
  },

  card: {
    padding: 18,
    borderWidth: 1,
    borderColor: "#E5E7EB",
    borderRadius: 12,
    marginBottom: 12,
    backgroundColor: "#fff",
  },

  selectedCard: {
    borderColor: "#171985",
    backgroundColor: "#EEF2FF",
  },

  cardText: {
    fontSize: 16,
    color: "#374151",
    fontWeight: "600",
  },

  selectedText: {
    color: "#600d4d",
  },

  buttonRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 25,
  },

  backBtn: {
    padding: 12,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#D1D5DB",
    width: "45%",
    alignItems: "center",
  },

  backText: {
    color: "#374151",
    fontWeight: "600",
  },

  nextBtn: {
    padding: 12,
    borderRadius: 10,
    backgroundColor: "#171985",
    width: "45%",
    alignItems: "center",
  },

  nextText: {
    color: "#fff",
    fontWeight: "600",
  },
});