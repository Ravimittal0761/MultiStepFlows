import { useRouter } from "expo-router";
import { useContext, useState } from "react";
import { Alert, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import StepWrapper from "../src/components/StepWrapper";
import { FormContext } from "../src/context/FormContext";
import AsyncStorage from "@react-native-async-storage/async-storage";
const options = ["Gym", "Yoga", "Running", "Reading", "Gaming"];

export default function Step3() {
  const router = useRouter();
  const { formData, setFormData } = useContext(FormContext);
  const [selected, setSelected] = useState<string[]>(
    formData.preferences || [],
  );

  const toggleSelect = (item: string) => {
    if (selected.includes(item)) {
      setSelected(selected.filter((i) => i !== item));
    } else {
      setSelected([...selected, item]);
    }
  };

  const handleNext = async () => {
    if (selected.length === 0) {
      return Alert.alert("Please select at least one preference");
    }

    setFormData({ ...formData, preferences: selected });
await AsyncStorage.setItem("currentStep", "5");
    router.push("/(screens)/Summary");
  };

  return (
    <SafeAreaView style={styles.safe}>
      <StepWrapper step={4}>
        <Text style={styles.title}>Select Preferences</Text>

        {options.map((item) => (
          <TouchableOpacity
            key={item}
            style={[styles.option, selected.includes(item) && styles.selected]}
            onPress={() => toggleSelect(item)}
          >
            <Text>{item}</Text>
          </TouchableOpacity>
        ))}

        <View style={styles.btnRow}>
          <TouchableOpacity onPress={() => router.back()} style={styles.btn}>
            <Text style={styles.btnText}>Back</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={handleNext} style={styles.btn}>
            <Text style={styles.btnText}>Next</Text>
          </TouchableOpacity>
        </View>
      </StepWrapper>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: "#fff" },

  title: {
    fontSize: 18,
    marginBottom: 10,
    fontWeight: "bold",
  },

  option: {
    padding: 12,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 14,
    
    marginVertical: 5,
  },

  selected: {
    backgroundColor: "#EEF2FF",
    borderColor: "#171985",
  },

  btnRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
    color:''
  },

  btn: {
    padding: 12,
    backgroundColor: "#171985",
    borderRadius: 20,
    justifyContent:'space-between',
    width: 100,
     color:'#661111',
    alignItems: "center",
  },
  btnText: {
    color: "#fff",
    fontWeight: "600",
  },
});
