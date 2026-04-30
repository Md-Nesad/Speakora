import { useLocalSearchParams } from "expo-router";
import { ScrollView, StyleSheet, Text, View } from "react-native";

import { sentenceData } from "@/features/sentenses/data/sentenseData";
import { StructureType } from "@/features/sentenses/types";
import { useMemo } from "react";

export default function SentenceDetails() {
  const { type } = useLocalSearchParams<{ type: StructureType }>();

  // type safety fallback
  const validType: StructureType = useMemo(() => {
    if (type === "can" || type === "could") return type;
    return "can";
  }, [type]);

  const data = sentenceData[validType];

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>{data.title}</Text>
      <Text style={styles.desc}>{data.description}</Text>

      {data.examples.map((item) => (
        <View key={item.id} style={styles.card}>
          <Text style={styles.en}>{item.en}</Text>
          <Text style={styles.bn}>{item.bn}</Text>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  title: { fontSize: 22, fontWeight: "bold" },
  desc: { marginBottom: 15, color: "gray" },
  card: {
    padding: 12,
    backgroundColor: "#fff",
    marginBottom: 10,
    borderRadius: 8,
  },
  en: { fontSize: 16, fontWeight: "600" },
  bn: { fontSize: 14, color: "gray" },
});
