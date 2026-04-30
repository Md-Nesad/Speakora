import { Stack } from "expo-router";

export default function GrammerLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
        contentStyle: {
          backgroundColor: "#0b1220",
        },
      }}
    >
      <Stack.Screen name="index" options={{ title: "Grammer" }} />
      <Stack.Screen name="[id]" options={{ title: "Practice" }} />
    </Stack>
  );
}
