import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { Colors, Shadow } from '../constants/values';

const ProfilePage = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Profile</Text>
      <View style={styles.profileBox}>
        <View style={styles.profileInfo}>
          <Image source={require('../assets/img/profile_picture.png')} />
          <Text style={styles.name}>Hans Zimmer</Text>
          <Text style={styles.address}>Visamäentie 21, Hämeenlinna, Finland</Text>
        </View>
        <View style={styles.profileOptions}>
          <Image source={require('../assets/img/logout.png')} />
          <Image style={styles.edit} source={require('../assets/img/edit.png')} />
        </View>
      </View>
      <View style={styles.section}>
        <Text style={styles.sectionHeading}>SETTINGS</Text>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Notification Settings</Text>
          <Image source={require('../assets/img/arrow.png')} />
        </TouchableOpacity>
      </View>
      <View style={styles.section}>
        <Text style={styles.sectionHeading}>MORE</Text>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>History</Text>
          <Image source={require('../assets/img/arrow.png')} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    backgroundColor: Colors.primary,
    color: Colors.onPrimary,
    padding: 30,
    fontSize: 32,
    fontFamily: 'Roboto-Bold',
    letterSpacing: 2,
    paddingBottom: 50
  },
  profileBox: {
    backgroundColor: Colors.background,
    padding: 20,
    borderRadius: 10,
    marginBottom: 15,
    marginTop: -30,
    marginHorizontal: 30,
    flexDirection: 'row',
    ...Shadow
  },
  profileInfo: {
    flex: 1,
  },
  name: {
    fontSize: 24,
    fontFamily: 'Roboto-Bold',
    color: 'black',
  },
  address: {
    fontSize: 12,
    fontFamily: 'Roboto-Regular',
    color: 'black',
  },
  profileOptions: {
    justifyContent: 'space-between',
  },
  edit: {
    marginBottom: 15,
  },
  section: {
    marginHorizontal: 30,
    marginBottom: 15,
  },
  sectionHeading: {
    fontSize: 16,
    fontFamily: 'Roboto-Regular',
    marginBottom: 10,
  },
  button: {
    backgroundColor: Colors.background,
    padding: 20,
    borderRadius: 10,
    marginBottom: 10,
    flexDirection: 'row',
    ...Shadow,
  },
  buttonText: {
    fontFamily: 'Roboto-Regular',
    fontSize: 16,
    flex: 1,
  }
});

export default ProfilePage;