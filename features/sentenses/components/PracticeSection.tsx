import React, { useState } from "react";
import { Button, Text, TextInput, View } from "react-native";

export default function PracticeSection({ sentence }: any) {
  const [input, setInput] = useState("");

  return (
    <View>
      <Text>Practice this:</Text>
      <Text>{sentence.en}</Text>

      <TextInput
        placeholder="Type or speak..."
        value={input}
        onChangeText={setInput}
      />

      <Button
        title="Check"
        onPress={() => {
          if (input.toLowerCase() === sentence.en.toLowerCase()) {
            alert("Correct ✅");
          } else {
            alert("Try again ❌");
          }
        }}
      />
    </View>
  );
}
