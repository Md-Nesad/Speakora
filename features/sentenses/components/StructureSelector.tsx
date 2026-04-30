import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

type Props = {
  selected: string;
  onSelect: (value: string) => void;
};

export default function StructureSelector({ selected, onSelect }: Props) {
  return (
    <View style={styles.container}>
      {["can", "could"].map((item) => (
        <TouchableOpacity
          key={item}
          style={[styles.button, selected === item && styles.active]}
          onPress={() => onSelect(item)}
        >
          <Text style={styles.text}>{item.toUpperCase()}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flexDirection: "row", gap: 10 },
  button: {
    padding: 12,
    backgroundColor: "#eee",
    borderRadius: 8,
  },
  active: {
    backgroundColor: "#4CAF50",
  },
  text: {
    fontWeight: "bold",
  },
});
