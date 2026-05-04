// src/screens/Summary.tsx
import { useContext,useEffect } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useRouter } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { FormContext } from "../src/context/FormContext";

export default function Summary() {
  const router = useRouter();
  const { formData } = useContext(FormContext);

useEffect(() => {
  const checkData = async () => {
    const data = await AsyncStorage.getItem("progress");
    console.log("Saved Data ", JSON.parse(data || "{}"));
  };

  checkData();
}, []);
  return (
    <SafeAreaView style={styles.safe} edges={["top", "bottom"]}>
      <ScrollView contentContainerStyle={styles.container}>
        
        {/* Header */}
        <View style={styles.headerContainer}>
          <Text style={styles.headerText}>Summary</Text>
        </View>

       
        <View style={styles.card}>
          
          
          <View style={styles.rowBetween}>
            <View style={styles.halfBox}>
              <Text style={styles.label}>Age</Text>
              <Text style={styles.value}>{formData.age || "-"}</Text>
            </View>

            <View style={styles.halfBox}>
              <Text style={styles.label}>Goal</Text>
              <Text style={styles.value}>{formData.goal || "-"}</Text>
            </View>
          </View>

    
          <View style={styles.divider} />

          <View style={styles.fullRow}>
            <Text style={styles.label}>Preferences</Text>
            <Text style={styles.value}>
              {formData.preferences?.length
                ? formData.preferences.join(", ")
                : "-"}
            </Text>
          </View>

          <View style={styles.divider} />

         
          <View style={styles.fullRow}>
            <Text style={styles.label}>Extra</Text>
            <Text style={styles.value}>{formData.extra || "-"}</Text>
          </View>

        </View>

       
        <TouchableOpacity
          style={styles.button}
          onPress={() => router.push("/(screens)/Step1")}
        >
          <Text style={styles.buttonText}>Edit Responses</Text>
        </TouchableOpacity>

      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: "#f2f4f8",
  },

  container: {
    padding: 20,
  },

  headerContainer: {
    backgroundColor: "#171985",
    paddingVertical: 18,
    borderRadius: 14,
    marginBottom: 20,
    elevation: 4,
  },

  headerText: {
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
    color: "#fff",
  },

  card: {
    backgroundColor: "#fff",
    borderRadius: 18,
    padding: 20,
    elevation: 5,
  },

  rowBetween: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  halfBox: {
    width: "48%",
  },

  fullRow: {
    marginVertical: 10,
  },

  label: {
    fontSize: 13,
    color: "#888",
    marginBottom: 4,
  },

  value: {
    fontSize: 16,
    fontWeight: "600",
    color: "#222",
  },

  divider: {
    height: 1,
    backgroundColor: "#eee",
    marginVertical: 12,
  },

  button: {
    marginTop: 30,
    backgroundColor: "#171985",
    padding: 15,
    borderRadius: 12,
    alignItems: "center",
    elevation: 3,
  },

  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
});