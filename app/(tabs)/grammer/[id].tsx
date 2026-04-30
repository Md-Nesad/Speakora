import { useLocalSearchParams } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

export default function GrammarDetails() {
  const { id } = useLocalSearchParams<{ id: string }>();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{id}</Text>

      <Text style={styles.content}>
        Lesson content for "{id}"{"\n\n"}
        এখানে তুমি API / JSON / Firebase থেকে full lesson load করতে পারো।
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingVertical: 30,
  },

  title: {
    fontSize: 22,
    fontWeight: "800",
    color: "#F1F5F9",
    textTransform: "capitalize",
  },

  content: {
    marginTop: 20,
    color: "#CBD5E1",
    fontSize: 15,
    lineHeight: 22,
  },
});
