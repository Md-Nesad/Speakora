import Lession from "@/features/shared/components/Lession";
import AlphabetBar from "@/features/vocabulary/components/AlphabetBar";
import { vocabulary } from "@/features/vocabulary/data/vocabularyData";
import { WordItem } from "@/features/vocabulary/types/vocabulary";
import React, { useState } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function VocabularyScreen() {
  const [selectedLetter, setSelectedLetter] = useState<string>("A");

  const group = vocabulary.find((g) => g.letter === selectedLetter);

  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <Lession title="Vocabulary" description="Learn step by step" />

      {/* Alphabet */}
      <View style={styles.alphabet}>
        <AlphabetBar selected={selectedLetter} onSelect={setSelectedLetter} />
      </View>

      {/* Words */}
      <View>
        {group?.words.map((item: WordItem) => (
          <TouchableOpacity key={item.id} style={styles.word}>
            <Text style={{ color: "#F8FAFC", fontSize: 16, fontWeight: "700" }}>
              {item.word}
            </Text>

            <Text style={styles.usMeaning}>🇺🇸 {item.meaning_en}</Text>

            <Text style={styles.bdMeaning}>🇧🇩 {item.meaning_bn}</Text>

            <Text style={styles.enSentence}>"{item.sentence_en}"</Text>

            {/* bangla */}
            <Text style={styles.bdSentence}>"{item.sentence_bd}"</Text>

            <Text style={styles.practice}>🔊 Tap to practice</Text>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#0b1220",
    paddingVertical: 5,
    paddingHorizontal: 16,
  },

  alphabet: { marginVertical: 20 },
  word: {
    backgroundColor: "#111c33",
    padding: 14,
    borderRadius: 12,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: "#576373",
  },
  usMeaning: { color: "#94a3b8", marginTop: 4 },
  bdMeaning: { color: "#94a3b8" },
  enSentence: {
    color: "#CBD5E1",
    marginTop: 6,
    fontStyle: "italic",
  },
  bdSentence: {
    color: "#CBD5E1",
    marginTop: 6,
    fontStyle: "italic",
  },
  practice: {
    marginTop: 8,
    color: "#3B82F6",
    fontWeight: "600",
  },
});
