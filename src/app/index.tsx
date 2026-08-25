import { Pressable, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { router } from 'expo-router';

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        {/* Logo / App Name */}
        <View style={styles.hero}>
          <Text style={styles.logo}>DINIG</Text>

          <Text style={styles.headline}>
            You're heard.
          </Text>

          <Text style={styles.description}>
            A place to talk. A place to listen. A place to be heard.
          </Text>
        </View>

        {/* Actions */}
        <View style={styles.actions}>
          <Pressable
            style={styles.primaryButton}
            onPress={() => router.push('/onboarding')}
          >
            <Text style={styles.primaryButtonText}>Get Started</Text>
          </Pressable>
        </View>

        {/* Footer */}
        <Text style={styles.footer}>
          Every conversation starts with someone willing to listen.
        </Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7F4EE',
  },

  content: {
    flex: 1,
    justifyContent: 'space-between',
    paddingHorizontal: 24,
    paddingTop: 40,
    paddingBottom: 32,
  },

  hero: {
    flex: 1,
    justifyContent: 'center',
  },

  logo: {
    fontSize: 18,
    fontWeight: '600',
    color: '#6B6257',
    marginBottom: 32,
  },

  headline: {
    fontSize: 42,
    fontWeight: '700',
    color: '#292724',
    lineHeight: 50,
    letterSpacing: -1,
    marginBottom: 20,
  },

  description: {
    fontSize: 17,
    color: '#6B6257',
    lineHeight: 26,
    maxWidth: 320,
  },

  actions: {
    gap: 12,
  },

  primaryButton: {
    backgroundColor: '#5F6F52',
    paddingVertical: 18,
    borderRadius: 16,
    alignItems: 'center',
  },

  primaryButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },

  secondaryButton: {
    borderWidth: 1,
    borderColor: '#D8D1C5',
    paddingVertical: 18,
    borderRadius: 16,
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },

  secondaryButtonText: {
    color: '#3E3A35',
    fontSize: 16,
    fontWeight: '600',
  },

  footer: {
    textAlign: 'center',
    color: '#91897E',
    fontSize: 13,
    lineHeight: 20,
    marginTop: 20,
  },
});