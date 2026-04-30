import React from "react";
import { StyleSheet, Text, View } from "react-native";

interface Lession {
  title: string;
  description: string;
}

export default function Lession({ title, description }: Lession) {
  return (
    <View>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.description}>{description}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    color: "#F8FAFC",
    fontSize: 22,
    fontWeight: "700",
  },
  description: {
    marginTop: 5,
    fontSize: 15,
    color: "#94A3B8",
  },
});
