import { useRouter } from "expo-router";
import { Pressable, StyleSheet, Text, View } from "react-native";

export default function Landing() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.headerBox}>
        <Text style={styles.welcome}>👋 Welcome to English Journey</Text>
        <Text style={styles.motivation}>
          Learn step by step — Grammar, Vocabulary, Sentence building & Practice
          tests. Improve your speaking confidence daily 🚀
        </Text>
      </View>

      {/* Feature Cards */}
      <View style={styles.cardContainer}>
        <View style={styles.card}>
          <Text style={styles.cardTitle}>📘 Grammar</Text>
          <Text style={styles.cardText}>
            Clear rules with simple real-life examples.
          </Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.cardTitle}>📚 Vocabulary</Text>
          <Text style={styles.cardText}>
            Learn useful words for daily conversation.
          </Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.cardTitle}>🗣 Sentence Practice</Text>
          <Text style={styles.cardText}>
            Build correct English sentences easily.
          </Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.cardTitle}>🧪 Test Yourself</Text>
          <Text style={styles.cardText}>
            Track progress with simple practice tests.
          </Text>
        </View>
      </View>

      {/* Button */}
      <Pressable
        style={styles.button}
        onPress={() => router.replace("/(tabs)/grammer")}
      >
        <Text style={styles.buttonText}>Start Learning 🚀</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
  },

  headerBox: {
    marginBottom: 20,
  },

  welcome: {
    fontSize: 24,
    fontWeight: "700",
    textAlign: "center",
    color: "#E2E8F0",
  },

  motivation: {
    marginTop: 10,
    textAlign: "center",
    color: "#94A3B8",
    fontSize: 14,
    lineHeight: 20,
  },

  cardContainer: {
    marginTop: 20,
    gap: 12,
  },

  card: {
    backgroundColor: "#111827",
    padding: 15,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: "#1F2937",
  },

  cardTitle: {
    fontSize: 16,
    fontWeight: "600",
    color: "#F1F5F9",
  },

  cardText: {
    marginTop: 5,
    fontSize: 13,
    color: "#9CA3AF",
    lineHeight: 18,
  },

  button: {
    marginTop: 25,
    backgroundColor: "#3B82F6",
    paddingVertical: 14,
    borderRadius: 12,
    alignItems: "center",
  },

  buttonText: {
    color: "white",
    fontWeight: "600",
    fontSize: 16,
  },
});
