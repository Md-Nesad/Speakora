import React from "react";
import { ScrollView, StyleSheet, Text, TouchableOpacity } from "react-native";

type Props = {
  selected: string;
  onSelect: (letter: string) => void;
};

const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

export default function AlphabetBar({ selected, onSelect }: Props) {
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      {letters.map((letter) => (
        <TouchableOpacity
          key={letter}
          onPress={() => onSelect(letter)}
          activeOpacity={0.7}
          style={[styles.item, selected === letter && styles.active]}
        >
          <Text style={styles.text}>{letter}</Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  item: {
    padding: 10,
    marginRight: 6,
    borderRadius: 8,
    backgroundColor: "#111c33",
    borderWidth: 0.5,
    borderColor: "#3f444a",
  },
  active: {
    backgroundColor: "#3B82F6",
    borderWidth: 0,
  },
  text: {
    color: "#F8FAFC",
    fontWeight: "700",
  },
});
