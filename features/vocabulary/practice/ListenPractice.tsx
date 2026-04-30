import * as Speech from "expo-speech";
import React from "react";
import { Button, Text, View } from "react-native";

export default function ListenPractice({ item }: any) {
  const speakWord = () => {
    Speech.speak(item.word);
  };

  const speakSentence = () => {
    Speech.speak(item.sentence_en);
  };

  return (
    <View>
      <Text style={{ color: "#CBD5E1", marginBottom: 10 }}>
        Listen and repeat
      </Text>

      <Button title="🔊 Listen Word" onPress={speakWord} />

      <Button title="🔊 Listen Sentence" onPress={speakSentence} />
    </View>
  );
}
