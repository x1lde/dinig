import { router, useLocalSearchParams } from 'expo-router';
import { useState } from 'react';
import {
    Pressable,
    StyleSheet,
    Text,
    TextInput,
    View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const avatars = ['🌙', '🌿', '☁️', '⭐', '🌻', '🍃', '🪐', '🌊'];

export default function IdentityScreen() {
    const { role } = useLocalSearchParams<{
        role: 'venter' | 'listener';
    }>();

    const [name, setName] = useState('');
    const [selectedAvatar, setSelectedAvatar] = useState('🌙');

    const canContinue = name.trim().length >= 2;

    const handleContinue = () => {
        if (!canContinue) return;

        router.push({
        pathname: '/onboarding/country',
        params: {
            role,
            name: name.trim(),
            avatar: selectedAvatar,
        },
        });
    };

    return (
        <SafeAreaView style={styles.container}>
        <View style={styles.content}>

            {/* Header */}
            <View>
            <Text style={styles.progress}>
                1 OF 3
            </Text>

            <Text style={styles.title}>
                Create your identity.
            </Text>

            <Text style={styles.subtitle}>
                You don't need to share your real name. Choose something
                that feels like you.
            </Text>
            </View>

            {/* Identity preview */}
            <View style={styles.identitySection}>
            <View style={styles.avatarPreview}>
                <Text style={styles.avatarPreviewText}>
                {selectedAvatar}
                </Text>
            </View>

            <Text style={styles.previewName}>
                {name.trim() || 'Your Dinig name'}
            </Text>

            <Text style={styles.previewLabel}>
                Your anonymous identity
            </Text>
            </View>

            {/* Form */}
            <View>
            <Text style={styles.label}>
                Dinig name
            </Text>

            <TextInput
                value={name}
                onChangeText={setName}
                placeholder="e.g. Moonlit"
                placeholderTextColor="#AAA39A"
                maxLength={20}
                autoCapitalize="words"
                style={styles.input}
            />

            <Text style={styles.characterCount}>
                {name.length}/20
            </Text>

            <Text style={styles.label}>
                Choose an avatar
            </Text>

            <View style={styles.avatarGrid}>
                {avatars.map((avatar) => {
                const selected = avatar === selectedAvatar;

                return (
                    <Pressable
                    key={avatar}
                    onPress={() => setSelectedAvatar(avatar)}
                    style={[
                        styles.avatar,
                        selected && styles.selectedAvatar,
                    ]}
                    >
                    <Text style={styles.avatarText}>
                        {avatar}
                    </Text>
                    </Pressable>
                );
                })}
            </View>
            </View>

            {/* Continue */}
            <Pressable
            onPress={handleContinue}
            disabled={!canContinue}
            style={[
                styles.button,
                !canContinue && styles.disabledButton,
            ]}
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

    progress: {
        fontSize: 12,
        fontWeight: '600',
        letterSpacing: 1,
        color: '#8C847A',
        marginBottom: 24,
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

    identitySection: {
        alignItems: 'center',
        marginVertical: 20,
    },

    avatarPreview: {
        width: 84,
        height: 84,
        borderRadius: 42,
        backgroundColor: '#EEF1E9',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 12,
    },

    avatarPreviewText: {
        fontSize: 40,
    },

    previewName: {
        fontSize: 18,
        fontWeight: '600',
        color: '#292724',
    },

    previewLabel: {
        fontSize: 13,
        color: '#91897E',
        marginTop: 4,
    },

    label: {
        fontSize: 14,
        fontWeight: '600',
        color: '#4A453F',
        marginBottom: 8,
    },

    input: {
        height: 54,
        backgroundColor: '#FFFFFF',
        borderWidth: 1,
        borderColor: '#D8D1C5',
        borderRadius: 14,
        paddingHorizontal: 16,
        fontSize: 16,
        color: '#292724',
    },

    characterCount: {
        alignSelf: 'flex-end',
        fontSize: 12,
        color: '#9A9288',
        marginTop: 6,
        marginBottom: 18,
    },

    avatarGrid: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: 10,
    },

    avatar: {
        width: 52,
        height: 52,
        borderRadius: 14,
        backgroundColor: '#FFFFFF',
        borderWidth: 1,
        borderColor: '#E1DBD1',
        alignItems: 'center',
        justifyContent: 'center',
    },

    selectedAvatar: {
        borderWidth: 2,
        borderColor: '#5F6F52',
        backgroundColor: '#EEF1E9',
    },

    avatarText: {
        fontSize: 24,
    },

    button: {
        backgroundColor: '#5F6F52',
        paddingVertical: 18,
        borderRadius: 16,
        alignItems: 'center',
        marginTop: 20,
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