import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { Colors, Shadow } from '../constants/values';
import AuthService from '../modules/services/AuthService';

const LoginPage = (props: any) => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [error, setError] = useState<string>('');

  const authService = new AuthService();

  const handleLogin = async () => {
    const success = await authService.login(email, password);
    if (success) {
      props.navigation.navigate("Books");
    } else {
      setError('Something went wrong. Please try again.');
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={require('../assets/img/logo.png')} />
      </View>
      <Text style={styles.subHeader}>Login</Text>
      <View style={styles.form}>
        <Text style={styles.label}>EMAIL</Text>
          <TextInput
            style={styles.input}
            placeholder="Email"
            placeholderTextColor="#B8B8B8"
            value={email}
            onChangeText={(text) => setEmail(text)}
          />
        <Text style={styles.label}>PASSWORD</Text>
          <TextInput
            style={styles.input}
            placeholder="Password"
            placeholderTextColor="#B8B8B8"
            secureTextEntry
            value={password}
            onChangeText={(text) => setPassword(text)}
          />
        <View style={styles.options}>
          <TouchableOpacity>
            <Text style={styles.link} onPress={()=>props.navigation.navigate("Register")}>Don't have an accout?</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={handleLogin}>
              <Text style={styles.buttonText}>LOGIN</Text>
          </TouchableOpacity>
        </View>
        {error ? <Text style={styles.error}>{error}</Text> : null}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.primary,
  },
  header: {
    backgroundColor: Colors.background,
    height: 125,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  subHeader: {
    fontSize: 32,
    marginHorizontal: 45,
    marginTop: 30,
    marginBottom: 15,
    fontFamily: 'Roboto-Bold',
    color: Colors.onPrimary,
  },
  form: {
    marginHorizontal: 30,
    padding: 20,
    borderRadius: 10,
    backgroundColor: Colors.background,
    ...Shadow,
  },
  input: {
    fontFamily: 'Roboto-Regular',
    fontSize: 16,
    padding: 16,
    backgroundColor: Colors.background,
    borderRadius: 10,
    marginBottom: 15,
    ...Shadow
  },
  label: {
    fontSize: 16,
    fontFamily: 'Roboto-Regular',
    marginBottom: 15,
  },
  button: {
    backgroundColor: Colors.primary,
    fontSize: 16,
    padding: 16,
    paddingHorizontal: 32,
    borderRadius: 10,
    alignSelf: 'flex-end',
  },
  buttonText: {
    fontSize: 16,
    color: Colors.onPrimary,
    fontFamily: 'Roboto-Medium',
  },
  options: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  link: {
    fontFamily: 'Roboto-Regular',
    fontSize: 14,
    textDecorationLine: 'underline',
  },
  error: { 
    color: 'red',
    marginTop: 15
  }
});

export default LoginPage;