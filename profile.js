// Profile.js
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const Profile = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Profile</Text>

      <View style={styles.profileBox}>
        <Text>Name: Hans Zimmer</Text>
        <Text>Address: Visamäentie 21, Hämeenlinna, Finland</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionHeading}>Settings</Text>
        <TouchableOpacity style={styles.button}>
          <Text>Notification Settings</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionHeading}>More</Text>
        <TouchableOpacity style={styles.button}>
          <Text>History</Text>
        </TouchableOpacity>
      </View>
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
  profileBox: {
    backgroundColor: '#f0f0f0',
    padding: 10,
    borderRadius: 5,
    marginBottom: 20,
  },
  section: {
    backgroundColor: '#f0f0f0',
    padding: 10,
    borderRadius: 5,
    marginBottom: 20,
  },
  sectionHeading: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#ffffff',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
});

export default Profile;
