// app/(tabs)/sentence/_layout.tsx
import { Stack } from "expo-router";

export default function SentenceLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
        contentStyle: {
          backgroundColor: "#0b1220",
        },
      }}
    >
      <Stack.Screen name="index" options={{ title: "Sentence" }} />
      <Stack.Screen name="[type]" options={{ title: "Practice" }} />
    </Stack>
  );
}
