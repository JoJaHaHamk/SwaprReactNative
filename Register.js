// Register.js
import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const Register = () => {
  return (
    <View style={styles.dialogBox}>
      <Text style={styles.heading}>Swapr</Text>
      <Text style={styles.subHeading}>Register</Text>

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

      <View style={styles.inputBox}>
        <Text style={styles.inputLabel}>ADDRESS</Text>
        <TextInput
          style={styles.inputField}
          placeholder="Address"
        />
      </View>

      <View style={styles.addressBoxes}>
        <TextInput
          style={styles.addressBox}
          placeholder="Visamäentie 21"
        />
        <TextInput
          style={styles.addressBox}
          placeholder="Hämeenlinna"
        />
        <TextInput
          style={styles.addressBox}
          placeholder="Finland"
        />
      </View>

      <TouchableOpacity style={styles.registerButton}>
        <Text style={styles.registerButtonText}>REGISTER</Text>
      </TouchableOpacity>

      <View style={styles.haveAccountBox}>
        <Text style={styles.haveAccountText}>Have an account?</Text>
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
      shadowColor: '#000000',
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
    registerButton: {
      backgroundColor: '#007BFF',
      padding: 10,
      borderRadius: 5,
      alignItems: 'center',
    },
    registerButtonText: {
      color: '#ffffff',
      fontSize: 16,
      fontWeight: 'bold',
    },
    haveAccountBox: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginTop: 10,
    },
    haveAccountText: {
      color: '#007BFF',
    },
    addressBoxes: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginBottom: 20,
    },
    addressBox: {
      backgroundColor: '#f0f0f0',
      padding: 10,
      borderRadius: 5,
      flex: 1,
      marginRight: 10,
    },
  });
  

export default Register;
