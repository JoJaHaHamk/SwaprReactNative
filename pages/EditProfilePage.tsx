import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet, Platform } from 'react-native';
import { Colors, Shadow } from '../constants/values';
import UserService from '../modules/services/UserService';

const EditProfilePage = (props: any) => {
  const userService = new UserService(props.navigation.navigate);
  const [userName, setUserName] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [country, setCountry] = useState('');
  const [email, setEmail] = useState('');

  useEffect(() => {
    const fetchUser = async () => {
      const result = await userService.getUser();
      if (result) {
        setUserName(result.username);
        setAddress(result.address);
        setCity(result.city);
        setCountry(result.country);
        setEmail(result.email);
      }
    };
    fetchUser();
  }, []);

  const updateUser = async () => {
    const results = await userService.updateUser(userName, email, address, city, country);
    if (results) {
      props.navigation.navigate("Profile");
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.topBar}>
        <Text style={styles.header}>Edit profile</Text>
        <TouchableOpacity onPress={() => props.navigation.navigate("Profile")}>
          <Image style={styles.image} source={require('../assets/img/back.png')} />
        </TouchableOpacity>
      </View>
      <View style={styles.form}>
        <Text style={[styles.subHeading, { marginTop: 30 }]}>USERNAME</Text>
        <TextInput style={styles.input} placeholder="Username" placeholderTextColor="#B8B8B8" value={userName} onChangeText={text => setUserName(text)} />
        <Text style={styles.subHeading}>EMAIL</Text>
        <TextInput style={styles.input} placeholder="Email" placeholderTextColor="#B8B8B8" value={email} onChangeText={text => setEmail(text)} />
        <Text style={styles.subHeading}>ADDRESS</Text>
        <TextInput style={styles.input} placeholder="Address" placeholderTextColor="#B8B8B8" value={address} onChangeText={text => setAddress(text)} />
        <TextInput style={styles.input} placeholder="City" placeholderTextColor="#B8B8B8" value={city} onChangeText={text => setCity(text)} />
        <TextInput style={styles.input} placeholder="Country" placeholderTextColor="#B8B8B8" value={country} onChangeText={text => setCountry(text)} />
        <TouchableOpacity style={styles.button} onPress={() => updateUser()}>
          <Text style={styles.buttonText}>UPDATE</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.primary,
  },
  topBar: {
    paddingTop: Platform.OS === 'ios' ? 60 : 0,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.primary,
    justifyContent: 'space-between',
  },
  header: {
    backgroundColor: Colors.primary,
    color: Colors.onPrimary,
    padding: 30,
    fontSize: 32,
    fontFamily: 'Roboto-Bold',
    letterSpacing: 2,
  },
  form: {
    flex: 1,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    backgroundColor: Colors.background,
  },
  image: {
    marginRight: 30,
  },
  subHeading: {
    fontSize: 16,
    fontFamily: 'Roboto-Regular',
    marginBottom: 15,
    marginHorizontal: 20,
  },
  input: {
    fontFamily: 'Roboto-Regular',
    fontSize: 16,
    padding: 16,
    backgroundColor: Colors.background,
    borderRadius: 10,
    marginHorizontal: 20,
    marginBottom: 15,
    ...Shadow
  },
  button: {
    backgroundColor: Colors.primary,
    fontSize: 16,
    padding: 16,
    borderRadius: 10,
    paddingHorizontal: 32,
    marginHorizontal: 20,
    alignSelf: 'flex-end',
  },
  buttonText: {
    fontSize: 16,
    color: Colors.onPrimary,
    fontFamily: 'Roboto-Medium',
  },
});

export default EditProfilePage;
