import { Stack } from "expo-router";
import React from "react";
import { StatusBar } from "react-native";
import { FormProvider } from "../src/context/FormContext";
export default function Layout() {
  return (
    <React.Fragment>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="#1a1616"
        hidden={false}
      />
      <FormProvider>
        <Stack screenOptions={{ headerShown: false }}>
          <Stack.Screen name="index" />
          <Stack.Screen name="Step1" />
          <Stack.Screen name="Step2" />
          <Stack.Screen name="Step3" />
          <Stack.Screen name="ExtraStep" />
          <Stack.Screen name="Summary" />
        </Stack>
      </FormProvider>
    </React.Fragment>
  );
}
