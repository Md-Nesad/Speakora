import { StyleSheet, Text, View } from "react-native";
import { features } from "../data/featureCard";

export default function FeatureCard() {
  return (
    <>
      {features.map((feature) => (
        <View key={feature.id} style={styles.card}>
          <Text style={styles.title}>{feature.title}</Text>
          <Text style={styles.text}>{feature.text}</Text>
        </View>
      ))}
    </>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#111827",
    padding: 15,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: "#576373",
  },

  title: {
    fontSize: 16,
    fontWeight: "600",
    color: "#F1F5F9",
  },

  text: {
    marginTop: 5,
    fontSize: 13,
    color: "#9CA3AF",
    lineHeight: 18,
  },
});
