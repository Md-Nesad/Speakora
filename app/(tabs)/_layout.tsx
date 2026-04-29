import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

export default function TabsLayout() {
  return (
    <View style={styles.container}>
      <Tabs
        screenOptions={{
          sceneStyle: {
            backgroundColor: "#0b1220",
          },

          headerStyle: {
            backgroundColor: "#111c33",
          },

          headerShadowVisible: false,

          headerTitleAlign: "center",

          headerTitle: () => (
            <View style={{ alignItems: "center" }}>
              <Text style={styles.appName}>Speakora</Text>

              <Text style={styles.appTagline}>Learn • Speak • Grow</Text>
            </View>
          ),

          tabBarStyle: {
            backgroundColor: "#0b1220",
            borderTopWidth: 0,
            height: 100,
            paddingBottom: 10,
            paddingTop: 8,
          },

          tabBarActiveTintColor: "#3B82F6",
          tabBarInactiveTintColor: "#64748b",

          tabBarLabelStyle: {
            fontSize: 11,
            fontWeight: "600",
          },
        }}
      >
        <Tabs.Screen
          name="grammer"
          options={{
            title: "Grammar",
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="book-outline" size={size} color={color} />
            ),
          }}
        />

        <Tabs.Screen
          name="vocabulary"
          options={{
            title: "Words",
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="library-outline" size={size} color={color} />
            ),
          }}
        />

        <Tabs.Screen
          name="sentense"
          options={{
            title: "Sentence",
            tabBarIcon: ({ color, size }) => (
              <Ionicons
                name="chatbubble-ellipses-outline"
                size={size}
                color={color}
              />
            ),
          }}
        />

        <Tabs.Screen
          name="conversation"
          options={{
            title: "Conversations",
            tabBarIcon: ({ color, size }) => (
              <Ionicons
                name="chatbubble-ellipses-outline"
                size={size}
                color={color}
              />
            ),
          }}
        />

        <Tabs.Screen
          name="test"
          options={{
            title: "Test",
            tabBarIcon: ({ color, size }) => (
              <Ionicons
                name="checkmark-done-circle-outline"
                size={size}
                color={color}
              />
            ),
          }}
        />
      </Tabs>
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
