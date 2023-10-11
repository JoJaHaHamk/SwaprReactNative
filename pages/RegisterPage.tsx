import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Platform, ScrollView } from 'react-native';
import { Colors, Shadow } from '../constants/values';
import AuthService from '../modules/services/AuthService';
 
const RegisterPage = (props: any) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [country, setCountry] = useState('');
  const [error, setError] = useState('');

  const authService = new AuthService();

  const handleRegister = async () => {
    const success = await authService.register(name, email, password, address, city, country);
    if (success) {
      props.navigation.navigate("Login");
    } else {
      setError('Something went wrong. Please try again.');
    }
  }

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>Register</Text>
      <View style={styles.form}>
        <Text style={styles.label}>NAME</Text>
        <TextInput
          style={styles.input}
          placeholder="Name"
          placeholderTextColor="#B8B8B8"
          value={name}
          onChangeText={(text) => setName(text)}
        />
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
        <Text style={styles.label}>ADDRESS</Text>
        <TextInput
          style={styles.input}
          placeholder="Address line"
          placeholderTextColor="#B8B8B8"
          value={address}
          onChangeText={(text) => setAddress(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="City"
          placeholderTextColor="#B8B8B8"
          value={city}
          onChangeText={(text) => setCity(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Country"
          placeholderTextColor="#B8B8B8"
          value={country}
          onChangeText={(text) => setCountry(text)}
        />
        <View style={styles.options}>
          <TouchableOpacity onPress={()=>props.navigation.navigate("Login")}>
            <Text style={styles.link}>Have an account?</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={handleRegister}>
            <Text style={styles.buttonText}>REGISTER</Text>
          </TouchableOpacity>
        </View>
        {error ? <Text style={styles.error}>{error}</Text> : null}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.primary,
  },
  header: {
    paddingTop: Platform.OS === 'ios' ? 60 : 0,
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

export default RegisterPage;