import React, { useState } from "react";
import { Button, Text, View } from "react-native";

export default function TestSection({ data }: any) {
  const [index, setIndex] = useState(0);

  const current = data[index];

  return (
    <View>
      <Text>Translate:</Text>
      <Text>{current.bn}</Text>

      <Button
        title="Show Answer"
        onPress={() => {
          alert(current.en);
        }}
      />

      <Button
        title="Next"
        onPress={() => {
          setIndex((prev) => (prev + 1) % data.length);
        }}
      />
    </View>
  );
}
