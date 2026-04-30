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
      <Stack.Screen name="index" options={{ title: "Vocabulary" }} />
      <Stack.Screen name="[word]" options={{ title: "Practice" }} />
    </Stack>
  );
}
