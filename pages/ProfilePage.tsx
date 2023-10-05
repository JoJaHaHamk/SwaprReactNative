import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import Navigation from '../components/Navigation';
import { Colors, Shadow } from '../constants/values';
import UserService from '../modules/services/UserService';

interface User {
  username: string;
  adress: string;
  city: string;
  country: string;
}

const ProfilePage = (props: any) => {
  const userService = new UserService();
  const [userData, setUserData] = useState<User>();

  useEffect(() => {
    async function fetchUserData() {
      const user = await userService.getUser();
      if (user) {
        setUserData(user);
        console.log(user);
      }
    }

    fetchUserData();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.header}>Profile</Text>
        <View style={styles.profileBox}>
            {userData ? (
              <View style={styles.profileInfo}>
                <Image source={require('../assets/img/profile_picture.png')} />
                <Text style={styles.name}>{userData.username}</Text>
                <Text style={styles.address}>{userData.adress}, {userData.city}, {userData.country}</Text>
              </View>
            ) : (
              <View style={styles.profileInfo}>
                <Image source={require('../assets/img/profile_picture.png')} />
                <Text style={styles.nameLoading}></Text>
                <Text style={styles.addressLoading}></Text>
              </View>
            )}
          <View style={styles.profileOptions}>
            <TouchableOpacity onPress={() => props.navigation.navigate("Login")}>
              <Image source={require('../assets/img/logout.png')} />
            </TouchableOpacity>
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
      <Navigation params={props} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1
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
    marginBottom: 5,
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
  },
  nameLoading: {
    fontSize: 24,
    width: 50,
    backgroundColor: Colors.lightGray,
    borderRadius: 5,
    marginBottom: 5,
  },
  addressLoading: {
    fontSize: 12,
    width: 100,
    backgroundColor: Colors.lightGray,
    borderRadius: 5,
  }
});

export default ProfilePage;
