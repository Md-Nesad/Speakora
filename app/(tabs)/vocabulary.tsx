import React from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const vocabularyData = [
  { id: "1", word: "Apple", meaning: "A fruit", bangla: "একটি ফল" },
  { id: "2", word: "Book", meaning: "Something you read", bangla: "পড়ার বই" },
  {
    id: "3",
    word: "Cat",
    meaning: "A small animal",
    bangla: "একটি ছোট প্রাণী (বিড়াল)",
  },
  {
    id: "4",
    word: "Dog",
    meaning: "A loyal pet animal",
    bangla: "বিশ্বস্ত পোষা প্রাণী (কুকুর)",
  },
  { id: "5", word: "Eat", meaning: "To take food", bangla: "খাওয়া" },
  {
    id: "6",
    word: "Friend",
    meaning: "A close companion",
    bangla: "ঘনিষ্ঠ বন্ধু",
  },
  { id: "7", word: "Good", meaning: "Something positive", bangla: "ভালো" },
  { id: "8", word: "House", meaning: "A place to live", bangla: "বাড়ি" },
  { id: "9", word: "Ice", meaning: "Frozen water", bangla: "বরফ" },
  { id: "10", word: "Joy", meaning: "Happiness", bangla: "আনন্দ" },
  { id: "11", word: "Kind", meaning: "Being nice to others", bangla: "দয়ালু" },
  { id: "12", word: "Love", meaning: "Deep affection", bangla: "ভালোবাসা" },
];

export default function Vocabulary() {
  const renderItem = ({ item }: any) => {
    const firstLetter = item.word.charAt(0);

    return (
      <View style={styles.card}>
        {/* Letter Badge */}
        <View style={styles.badge}>
          <Text style={styles.badgeText}>{firstLetter}</Text>
        </View>

        {/* Word Info */}
        <View style={styles.textContainer}>
          <Text style={styles.word}>{item.word}</Text>

          <Text style={styles.meaning}>Meaning: {item.meaning}</Text>

          <Text style={styles.bangla}>বাংলা: {item.bangla}</Text>
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container} edges={["top"]}>
      {/* Header */}
      <View style={styles.headerBox}>
        <Text style={styles.header}>📚 Vocabulary</Text>
        <Text style={styles.subHeader}>
          Learn English words with Bangla meaning
        </Text>
      </View>

      {/* List */}
      <FlatList
        data={vocabularyData}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingBottom: 30,
        }}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#020617",
    paddingHorizontal: 16,
  },

  headerBox: {
    marginTop: 10,
    marginBottom: 15,
  },

  header: {
    fontSize: 30,
    fontWeight: "700",
    color: "#F8FAFC",
  },

  subHeader: {
    fontSize: 14,
    color: "#94A3B8",
    marginTop: 4,
  },

  card: {
    flexDirection: "row",
    alignItems: "center",

    backgroundColor: "#0F172A",
    padding: 16,
    borderRadius: 18,

    marginBottom: 14,

    borderWidth: 1,
    borderColor: "#1E293B",
  },

  badge: {
    width: 48,
    height: 48,
    borderRadius: 14,

    backgroundColor: "#2563EB",

    alignItems: "center",
    justifyContent: "center",

    marginRight: 14,
  },

  badgeText: {
    fontSize: 18,
    fontWeight: "700",
    color: "#FFFFFF",
  },

  textContainer: {
    flex: 1,
  },

  word: {
    fontSize: 18,
    fontWeight: "700",
    color: "#F1F5F9",
  },

  meaning: {
    fontSize: 14,
    color: "#94A3B8",
    marginTop: 3,
  },

  bangla: {
    fontSize: 14,
    color: "#38BDF8",
    marginTop: 4,
    fontWeight: "500",
  },
});
