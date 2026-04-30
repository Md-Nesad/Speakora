import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import stringSimilarity from "string-similarity";

export default function VoicePractice({ item }: any) {
  const [spokenText, setSpokenText] = useState("");
  const [accuracy, setAccuracy] = useState<number | null>(null);

  // 📊 Calculate Accuracy
  const calculate = (text: string) => {
    setSpokenText(text);

    const score =
      stringSimilarity.compareTwoStrings(
        item.sentence_en.toLowerCase(),
        text.toLowerCase(),
      ) * 100;

    setAccuracy(Math.round(score));
  };

  // 🔄 Reset
  const reset = () => {
    setSpokenText("");
    setAccuracy(null);
  };

  return (
    <View style={styles.container}>
      {/* 🎯 Original Sentence */}
      <Text style={styles.title}>Speak this sentence:</Text>
      <Text style={styles.sentence}>{item.sentence_en}</Text>

      {/* ✍️ Input (Temporary Speech Replacement) */}
      <TextInput
        style={styles.input}
        placeholder="Type what you spoke..."
        placeholderTextColor="#64748b"
        value={spokenText}
        onChangeText={calculate}
      />

      {/* 📝 Spoken Text */}
      {spokenText ? (
        <>
          <Text style={styles.resultLabel}>You said:</Text>
          <Text style={styles.spoken}>{spokenText}</Text>
        </>
      ) : null}

      {/* 📊 Accuracy */}
      {accuracy !== null && (
        <Text style={styles.accuracy}>Accuracy: {accuracy}%</Text>
      )}

      {/* 🔄 Reset */}
      {(spokenText || accuracy !== null) && (
        <TouchableOpacity style={styles.resetBtn} onPress={reset}>
          <Text style={styles.resetText}>Try Again</Text>
        </TouchableOpacity>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: "#020617",
    borderRadius: 12,
  },
  title: {
    color: "#94a3b8",
    fontSize: 14,
    marginBottom: 8,
  },
  sentence: {
    color: "#fff",
    fontSize: 18,
    marginBottom: 20,
    fontWeight: "600",
  },
  input: {
    backgroundColor: "#1e293b",
    color: "#fff",
    padding: 12,
    borderRadius: 8,
  },
  resultLabel: {
    marginTop: 20,
    color: "#94a3b8",
  },
  spoken: {
    color: "#22c55e",
    fontSize: 16,
    marginTop: 5,
  },
  accuracy: {
    marginTop: 15,
    fontSize: 18,
    color: "#facc15",
    fontWeight: "700",
  },
  resetBtn: {
    marginTop: 15,
    alignItems: "center",
  },
  resetText: {
    color: "#ef4444",
  },
});
