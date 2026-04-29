import { Stack } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

export default function RootLayout() {
  return (
    <View style={styles.container}>
      <Stack
        screenOptions={{
          contentStyle: {
            backgroundColor: "#0b1220",
          },

          headerStyle: {
            backgroundColor: "#111c33",
          },

          headerShadowVisible: false,

          headerTitleAlign: "center",

          headerTitle: () => (
            <View style={styles.headerTitle}>
              <Text style={styles.appName}>Speakora</Text>

              <Text style={styles.appTagline}>Learn • Speak • Grow</Text>
            </View>
          ),
        }}
      >
        <Stack.Screen
          name="index"
          options={{
            headerShown: false,
          }}
        />

        <Stack.Screen
          name="(tabs)"
          options={{
            headerShown: false,
          }}
        />

        <Stack.Screen
          name="grammer/[id]"
          options={{
            title: "Lesson",
          }}
        />
      </Stack>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0b1220",
  },
  headerTitle: {
    alignItems: "center",
  },
  appName: {
    color: "#F8FAFC",
    fontSize: 20,
    fontWeight: "700",
    letterSpacing: 0.6,
  },
  appTagline: {
    color: "#94a3b8",
    fontSize: 11,
    marginTop: 2,
    paddingBottom: 5,
  },
});
