import { useRouter } from "expo-router";
import { useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function SplashScreen() {
  const router = useRouter();

useEffect(() => {
  const checkStep = async () => {
    const step = await AsyncStorage.getItem("currentStep");

    const navigate = (step: string | null) => {
      if (step === "2") {
        router.replace("/(screens)/Step2");
      } else if (step === "3") {
        router.replace("/(screens)/ExtraStep");
      } else if (step === "4") {
        router.replace("/(screens)/Step3");
      } else if (step === "5") {
        router.replace("/(screens)/Summary");
      } else {
        router.replace("/(screens)/Step1");
      }
    };

    setTimeout(() => {
      navigate(step);
    }, 2000);
  };

  checkStep();
}, []);

  return (
    <View style={styles.container}>
      <Text style={styles.logo}>FlowMate</Text>
      <Text style={styles.tagline}>Go with the flow, effortlessly...</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#6366F1",
  },
  logo: {
    fontSize: 38,
    color: "#fff",
    fontWeight: "bold",
    marginBottom: 10,
  },
  tagline: {
    color: "#E0E7FF",
    fontSize: 14,
  },
});