import { useState } from 'react';
import { View, TextInput, Button, Alert } from 'react-native';
import { useAuth } from '../../hooks/useAuth';

export const SignInScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { signInWithEmail, signInWithMagicLink } = useAuth();

  const handleSignIn = async () => {
    const { error } = await signInWithEmail(email, password);
    if (error) Alert.alert('Error', error.message);
  };

  const handleMagicLink = async () => {
    const { error } = await signInWithMagicLink(email);
    if (error) Alert.alert('Error', error.message);
    else Alert.alert('Check your email', 'We sent you a magic link to sign in');
  };

  return (
    <View style={{ padding: 20 }}>
      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        autoCapitalize="none"
        keyboardType="email-address"
      />
      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <Button title="Sign In" onPress={handleSignIn} />
      <Button title="Send Magic Link" onPress={handleMagicLink} />
    </View>
  );
};