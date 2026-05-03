import { View, StyleSheet } from "react-native";

export default function ProgressBar({ step }: any) {
  return (
    <View style={styles.bg}>
      <View style={[styles.fill, { width: `${(step / 5) * 100}%` }]} />
    </View>
  );
}

const styles = StyleSheet.create({
  bg: {
    height: 8,
    backgroundColor: "#e9cbcb",
    borderRadius: 10,
    overflow: "hidden",
  },
  fill: {
    backgroundColor: "#001879",
    height: "100%",
  },
});