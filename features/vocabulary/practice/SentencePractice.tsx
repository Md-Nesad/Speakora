import * as Speech from "expo-speech";
import React, { useState } from "react";
import { Button, Text, TextInput, View } from "react-native";

export default function SentencePractice({ item }: any) {
  console.log(item);
  const [sentence, setSentence] = useState("");
  const [result, setResult] = useState("");

  const handleSubmit = () => {
    if (!sentence.trim()) return;

    if (sentence.toLowerCase().includes(item.word.toLowerCase())) {
      setResult("Exelent. Keep up the good work");
      Speech.speak(result);
      setSentence("");
    } else {
      setResult("Try Again.");
      Speech.speak("Yor sentence is not correct.");
    }
  };

  return (
    <View>
      <Text style={{ color: "#F8FAFC" }}>Make your own sentence</Text>

      <TextInput
        placeholder="Write sentence..."
        value={sentence}
        onChangeText={setSentence}
        multiline
        style={{
          backgroundColor: "#111c33",
          color: "#fff",
          padding: 10,
          marginVertical: 10,
          height: 100,
        }}
      />

      <Button title="Save" onPress={handleSubmit} />

      <Text style={{ color: "white" }}>{result}</Text>
    </View>
  );
}
