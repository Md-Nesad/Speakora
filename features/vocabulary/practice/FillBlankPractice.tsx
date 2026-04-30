import React, { useState } from "react";
import { Button, Text, TextInput, TouchableOpacity, View } from "react-native";

export default function FillBlankPractice({ item }: any) {
  console.log(item);
  const [answer, setAnswer] = useState("");
  const [result, setResult] = useState("");

  const checkAnswer = () => {
    const user = answer.trim().toLowerCase();
    const correct = item.sentence_en.trim().toLowerCase();

    if (user === correct) {
      setResult("✅ Correct!");
    } else {
      setResult("❌ Try again");
    }
  };

  const reset = () => {
    setAnswer("");
    setResult("");
  };

  return (
    <View>
      {/* Bengali sentence */}
      <Text style={{ color: "#F8FAFC", marginBottom: 8 }}>
        {item.sentence_bd}
      </Text>

      {/* English input */}
      <TextInput
        placeholder="Type English sentence"
        placeholderTextColor="#94a3b8"
        value={answer}
        onChangeText={setAnswer}
        style={{
          backgroundColor: "#111c33",
          color: "#fff",
          padding: 10,
          marginVertical: 10,
          borderRadius: 8,
        }}
      />

      <Button title="Check" onPress={checkAnswer} />

      {/* Result box */}
      {result !== "" && (
        <View style={{ marginTop: 10 }}>
          <Text style={{ color: "#CBD5E1" }}>{result}</Text>

          <TouchableOpacity
            onPress={reset}
            style={{
              marginTop: 8,
              backgroundColor: "#334155",
              padding: 8,
              borderRadius: 6,
              alignSelf: "flex-start",
            }}
          >
            <Text style={{ color: "#fff" }}>Close</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
}
