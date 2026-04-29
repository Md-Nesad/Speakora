import { grammarData } from "@/features/grammer/data/grammer";
import Lession from "@/features/shared/components/Lession";
import { MaterialIcons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { useState } from "react";
import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";

export default function Grammar() {
  const router = useRouter();
  const [openId, setOpenId] = useState<string | null>(null);

  const toggle = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        <Lession
          title="Grammer"
          description="Learn English grammar step by step with structured lessons and real examples. You don’t need to memorize all grammar rules to speak English. By practicing these core grammar patterns repeatedly, you will be able to speak English fluently."
        />

        {grammarData.map((topic, index) => (
          <View key={topic.id}>
            {/* CARD */}
            <Pressable style={styles.card} onPress={() => toggle(topic.id)}>
              <View style={styles.cardLeft}>
                {/* TOP: ICON + CHAPTER */}
                <View style={styles.cardHeader}>
                  <MaterialIcons
                    name="menu-book"
                    size={18}
                    color="#2563EB"
                    style={styles.icon}
                  />

                  <Text style={styles.cardText}>Chapter {index + 1}</Text>
                </View>

                {/* BOTTOM: TITLE */}
                <Text style={styles.cardTitle}>{topic.title}</Text>
              </View>

              {/* ARROW */}
              <Text style={styles.arrow}>
                {openId === topic.id ? "−" : "+"}
              </Text>
            </Pressable>

            {/* SUBTOPICS */}
            {openId === topic.id && (
              <View style={styles.subContainer}>
                {topic.children.map((sub) => (
                  <Pressable
                    key={sub.id}
                    style={styles.subCard}
                    onPress={() => router.push(`/grammer/${sub.id}`)}
                  >
                    <Text style={styles.subCardText}>{sub.title}</Text>
                    <Text style={styles.subArrow}>›</Text>
                  </Pressable>
                ))}
              </View>
            )}
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 5,
    paddingHorizontal: 16,
  },

  heading: {
    fontSize: 26,
    fontWeight: "800",
    color: "#F1F5F9",
    marginTop: 10,
  },

  card: {
    marginTop: 15,
    backgroundColor: "#111827",
    padding: 16,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: "#576373",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  cardLeft: {
    flex: 1,
  },

  cardHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 6,
  },

  icon: {
    marginRight: 6,
  },

  cardText: {
    fontSize: 15,
    fontWeight: "600",
    color: "#2563EB",
    letterSpacing: 0.5,
  },

  cardTitle: {
    color: "#E2E8F0",
    fontWeight: "700",
    fontSize: 17,
  },

  arrow: {
    color: "#3B82F6",
    fontSize: 25,
    paddingLeft: 10,
  },

  subContainer: {
    marginLeft: 12,
    marginTop: 8,
    borderLeftWidth: 1,
    borderLeftColor: "#404956",
    paddingLeft: 10,
  },

  subCard: {
    backgroundColor: "#0F172A",
    padding: 12,
    borderRadius: 10,
    marginBottom: 8,
    borderWidth: 1,
    borderColor: "#404956",
    flexDirection: "row",
    justifyContent: "space-between",
  },

  subCardText: {
    color: "#94A3B8",
    fontSize: 15,
  },

  subArrow: {
    color: "#3B82F6",
    fontSize: 20,
  },
});
