import { View, Text, StyleSheet } from "react-native";
import ProgressBar from "./ProgressBar";

export default function StepWrapper({ step, children }: any) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Step {step} of 5</Text>
      <ProgressBar step={step} />

      <View style={styles.content}>{children}</View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: "flex-start",
  },
  text: {
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 10,
  },
  content: {
    marginTop: 20,
    flex: 1,
  },
});