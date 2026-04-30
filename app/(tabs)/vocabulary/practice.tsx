import FillBlankPractice from "@/features/vocabulary/practice/FillBlankPractice";
import ListenPractice from "@/features/vocabulary/practice/ListenPractice";
import SentencePractice from "@/features/vocabulary/practice/SentencePractice";
import VoicePractice from "@/features/vocabulary/practice/VoicePractice";
// import VoicePractice from "@/features/vocabulary/practice/VoicePractice";
import { useLocalSearchParams } from "expo-router";
import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";

export default function PracticeScreen() {
  const { word } = useLocalSearchParams();

  const item = JSON.parse(word as string);

  const [mode, setMode] = useState("listen");

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{item.word}</Text>

      {/* Mode Tabs */}
      <View style={styles.tabs}>
        <Text onPress={() => setMode("listen")}>🔊</Text>
        <Text onPress={() => setMode("speak")}>🎤</Text>
        <Text onPress={() => setMode("fill")}>✏️</Text>
        <Text onPress={() => setMode("sentence")}>🧠</Text>
      </View>

      {/* Render Modes */}

      {mode === "listen" && <ListenPractice item={item} />}

      {mode === "speak" && <VoicePractice item={item} />}

      {mode === "fill" && <FillBlankPractice item={item} />}

      {mode === "sentence" && <SentencePractice item={item} />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0b1220",
    padding: 16,
  },

  title: {
    color: "#F8FAFC",
    fontSize: 24,
    fontWeight: "700",
    marginBottom: 20,
  },

  tabs: {
    flexDirection: "row",
    gap: 20,
    marginBottom: 20,
  },
});
