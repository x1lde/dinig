import { Pressable, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        {/* Logo / App Name */}
        <Text style={styles.title}>Welcome to the Home Screen!</Text>
        <Pressable style={styles.button} onPress={() => alert('Button Pressed!')}>
          <Text style={styles.buttonText}>Press Me</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}