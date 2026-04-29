import FeatureCard from "@/features/landing/components/FeatureCard";
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
        <FeatureCard />
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
