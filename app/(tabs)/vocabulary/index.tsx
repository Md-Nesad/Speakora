import Lession from "@/features/shared/components/Lession";
import AlphabetBar from "@/features/vocabulary/components/AlphabetBar";
import { categories } from "@/features/vocabulary/data/categories";
import { vocabulary } from "@/features/vocabulary/data/vocabularyData";
import { WordItem } from "@/features/vocabulary/types/vocabulary";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function VocabularyScreen() {
  const router = useRouter();
  const [selectedLetter, setSelectedLetter] = useState<string>("A");
  const [selectedCategory, setSelectedCategory] = useState<string>(
    "Student Vocabulary 🎓",
  );

  const group = vocabulary.find((g) => g.letter === selectedLetter);

  const filteredWords =
    group?.words.filter((w) => w.category === selectedCategory) || [];

  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <Lession title="Vocabulary" description="Learn step by step" />

      {/* Alphabet */}
      <View style={styles.alphabet}>
        <AlphabetBar selected={selectedLetter} onSelect={setSelectedLetter} />
      </View>

      {/* category  */}
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={{ marginBottom: 16 }}
      >
        {categories.map((cat) => (
          <TouchableOpacity
            key={cat}
            onPress={() => setSelectedCategory(cat)}
            style={[
              styles.categoryItem,
              selectedCategory === cat && styles.categoryActive,
            ]}
          >
            <Text style={styles.categoryText}>{cat}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      {/* Words */}
      <View>
        {filteredWords.map((item: WordItem) => (
          <TouchableOpacity
            key={item.id}
            style={styles.word}
            onPress={() =>
              router.push({
                pathname: "/vocabulary/practice",
                params: {
                  word: JSON.stringify(item),
                },
              })
            }
          >
            <Text style={{ color: "#F8FAFC", fontSize: 16, fontWeight: "700" }}>
              {item.word}
            </Text>

            <Text style={styles.usMeaning}>🇺🇸 {item.meaning_en}</Text>

            <Text style={styles.bdMeaning}>🇧🇩 {item.meaning_bn}</Text>

            <Text style={styles.enSentence}>"{item.sentence_en}"</Text>

            {/* bangla */}
            <Text style={styles.bdSentence}>"{item.sentence_bd}"</Text>

            <View style={styles.practiceRow}>
              {item.practice?.speak && (
                <Text style={styles.practice}>🎤 Speak</Text>
              )}

              {item.practice?.fill_blank && (
                <Text style={styles.practice}>✏️ Fill</Text>
              )}

              {item.practice?.make_sentence && (
                <Text style={styles.practice}>🧠 Sentence</Text>
              )}

              {item.practice?.listen_repeat && (
                <Text style={styles.practice}>🔊 Listen</Text>
              )}
            </View>
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
  // practice: {
  //   marginTop: 8,
  //   color: "#3B82F6",
  //   fontWeight: "600",
  // },
  categoryItem: {
    paddingVertical: 8,
    paddingHorizontal: 12,
    marginRight: 8,
    borderRadius: 8,
    backgroundColor: "#111c33",
    borderWidth: 1,
    borderColor: "#576373",
  },

  categoryActive: {
    backgroundColor: "#3B82F6",
  },

  categoryText: {
    color: "#F8FAFC",
    fontWeight: "600",
  },

  practiceRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8,
    marginTop: 8,
  },

  practice: {
    color: "#3B82F6",
    fontWeight: "600",
    marginRight: 10,
  },
});
