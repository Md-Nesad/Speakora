import { StructureType } from "@/features/sentenses/types";
import Lession from "@/features/shared/components/Lession";
import { useRouter } from "expo-router";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function SentenceHome() {
  const router = useRouter();

  const handlePress = (type: any) => {
    router.push(`/sentence/${type}`);
  };

  return (
    <View style={styles.container}>
      <Lession
        title="Choose Structure"
        description="Choose a structure type to practice sentences"
      />

      <View style={{ marginTop: 20 }}>
        {["can", "could"].map((item) => (
          <TouchableOpacity
            key={item}
            style={styles.button}
            onPress={() => handlePress(item as StructureType)}
          >
            <Text style={styles.text}>{item.toUpperCase()}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 5,
    paddingHorizontal: 16,
  },

  title: { fontSize: 20, marginBottom: 20, color: "#F1F5F9" },
  button: {
    padding: 15,
    backgroundColor: "#4CAF50",
    marginBottom: 10,

    borderRadius: 8,
  },
  text: { color: "#fff", textAlign: "center" },
});
