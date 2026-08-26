import { Pressable, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { router } from 'expo-router';
import { useState } from 'react';

export default function OnboardingScreen() {
    const [role, setRole] = useState<'venter' | 'listener' | null>(null);

    const handleContinue = () => {
        if (!role) return;

        router.push({
        pathname: '/onboarding/identity',
        params: {
            role,
        },
        });
    };

    return (
        <SafeAreaView style={styles.container}>
        <View style={styles.content}>

            {/* Header */}
            <View>
            <Text style={styles.logo}>DINIG</Text>

            <Text style={styles.title}>
                What brings you here?
            </Text>

            <Text style={styles.subtitle}>
                You can talk, listen, or simply take a moment for yourself.
            </Text>
            </View>

            {/* Options */}
            <View style={styles.options}>

            <Pressable
                style={[
                styles.option,
                role === 'venter' && styles.selectedOption,
                ]}
                onPress={() => setRole('venter')}
            >
                <Text style={styles.icon}>💬</Text>

                <View style={styles.optionText}>
                <Text style={styles.optionTitle}>
                    I want to vent
                </Text>

                <Text style={styles.optionDescription}>
                    Share what's on your mind with someone willing to listen.
                </Text>
                </View>
            </Pressable>

            <Pressable
                style={[
                styles.option,
                role === 'listener' && styles.selectedOption,
                ]}
                onPress={() => setRole('listener')}
            >
                <Text style={styles.icon}>👂</Text>

                <View style={styles.optionText}>
                <Text style={styles.optionTitle}>
                    I'm ready to listen
                </Text>

                <Text style={styles.optionDescription}>
                    Give someone your time and a space to be heard.
                </Text>
                </View>
            </Pressable>

            </View>

            {/* Continue */}
            <Pressable
            style={[
                styles.button,
                !role && styles.disabledButton,
            ]}
            disabled={!role}
            onPress={handleContinue}
            >
            <Text style={styles.buttonText}>
                Continue
            </Text>
            </Pressable>

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
    paddingHorizontal: 24,
    paddingTop: 24,
    paddingBottom: 32,
    justifyContent: 'space-between',
    },

    logo: {
    fontSize: 18,
    fontWeight: '600',
    color: '#6B6257',
    marginBottom: 48,
    },

    title: {
    fontSize: 32,
    fontWeight: '700',
    color: '#292724',
    lineHeight: 40,
    marginBottom: 12,
    },

    subtitle: {
    fontSize: 16,
    color: '#6B6257',
    lineHeight: 24,
    },

    options: {
    gap: 14,
    },

    option: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#E1DBD1',
    borderRadius: 18,
    padding: 18,
    },

    selectedOption: {
    borderColor: '#5F6F52',
    backgroundColor: '#EEF1E9',
    borderWidth: 2,
    },

    icon: {
    fontSize: 28,
    marginRight: 16,
    },

    optionText: {
    flex: 1,
    },

    optionTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#292724',
    marginBottom: 5,
    },

    optionDescription: {
    fontSize: 14,
    color: '#7D756B',
    lineHeight: 20,
    },

    button: {
    backgroundColor: '#5F6F52',
    paddingVertical: 18,
    borderRadius: 16,
    alignItems: 'center',
    },

    disabledButton: {
    backgroundColor: '#C8C3BA',
    },

    buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
    },
});