// Login.js
import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const Login = () => {
  return (
    <View style={styles.dialogBox}>
      <Text style={styles.heading}>Swapr</Text>
      <Text style={styles.subHeading}>Login</Text>

      <View style={styles.inputBox}>
        <Text style={styles.inputLabel}>EMAIL</Text>
        <TextInput
          style={styles.inputField}
          placeholder="Email"
        />
      </View>

      <View style={styles.inputBox}>
        <Text style={styles.inputLabel}>PASSWORD</Text>
        <TextInput
          style={styles.inputField}
          placeholder="Password"
          secureTextEntry
        />
      </View>

      <TouchableOpacity style={styles.forgotPassword}>
        <Text>Forgot password?</Text>
      </TouchableOpacity>

      <View style={styles.loginButtonBox}>
        <TouchableOpacity style={styles.loginButton}>
          <Text style={styles.loginButtonText}>LOGIN</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.noAccount}>
        <Text>Don't have an account?</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  dialogBox: {
    backgroundColor: '#ffffff',
    borderRadius: 10,
    padding: 20,
    elevation: 5,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.1,
    shadowRadius: 5,
  },
  heading: {
    fontSize: 36,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subHeading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  inputBox: {
    marginBottom: 20,
  },
  inputLabel: {
    marginBottom: 5,
  },
  inputField: {
    backgroundColor: '#f0f0f0',
    padding: 10,
    borderRadius: 5,
  },
  forgotPassword: {
    marginBottom: 20,
  },
  loginButtonBox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  loginButton: {
    backgroundColor: '#007BFF',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    flex: 1,
  },
  loginButtonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  noAccount: {
    textAlign: 'center',
  },
});

export default Login;
