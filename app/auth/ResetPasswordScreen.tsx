import { useState } from 'react';
import { View, TextInput, Button, Alert } from 'react-native';
import { useAuth } from '../../hooks/useAuth';

export const ResetPasswordScreen = () => {
  const [email, setEmail] = useState('');
  const { sendPasswordResetEmail } = useAuth();

  const handleResetPassword = async () => {
    const { error } = await sendPasswordResetEmail(email);
    if (error) Alert.alert('Error', error.message);
    else Alert.alert('Success', 'Password reset link sent to your email');
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
      <Button title="Send Reset Link" onPress={handleResetPassword} />
    </View>
  );
};