import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import { View } from "react-native";

export default function TabLayout() {
  return (
    <View style={{ flex: 1, backgroundColor: "#020617" }}>
      <Tabs
        screenOptions={{
          headerShown: false,
          sceneStyle: {
            backgroundColor: "#020617",
          },

          tabBarStyle: {
            backgroundColor: "#192641",
            borderTopWidth: 1,
            paddingTop: 5,
            paddingBottom: 20,
            height: 100,
            elevation: 0,
          },

          tabBarActiveTintColor: "#3B82F6",
          tabBarInactiveTintColor: "#bfcada",

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
