import * as Speech from "expo-speech";
import React from "react";
import { Button, Text, View } from "react-native";

export default function SpeakPractice({ item }: any) {
  const speak = () => {
    Speech.speak(item.word);
  };

  return (
    <View>
      <Text style={{ color: "#F8FAFC" }}>Tap and repeat the word</Text>

      <Button title="🎤 Hear Word" onPress={speak} />

      <Text style={{ color: "#CBD5E1", marginTop: 10 }}>
        Say the word loudly
      </Text>
    </View>
  );
}
