// EditProfile.js
import React from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet } from 'react-native';

const EditProfile = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Edit Profile</Text>

      <Text style={styles.subHeading}>USERNAME</Text>
      <View style={styles.inputBox}>
        <Text>Hans Zimmer</Text>
      </View>

      <Text style={styles.subHeading}>ADDRESS</Text>
      <View style={styles.inputBox}>
        <Text>Visamäentie 21</Text>
      </View>
      <View style={styles.inputBox}>
        <Text>Hämeenlinna</Text>
      </View>
      <View style={styles.inputBox}>
        <Text>Finland</Text>
      </View>

      {/* map picture whatever needs to be here. still needs to be put     */}
      <Image source={require('./mapImage.png')} style={styles.mapImage} />

      {/* Update button */}
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>UPDATE</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subHeading: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 20,
  },
  inputBox: {
    backgroundColor: '#f0f0f0',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  mapImage: {
    width: '100%',
    height: 200,
    marginTop: 20,
    resizeMode: 'cover',
    borderRadius: 5,
  },
  button: {
    backgroundColor: '#007BFF',
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
    alignItems: 'center',
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default EditProfile;
