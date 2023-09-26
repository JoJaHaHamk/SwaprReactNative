import React from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { Colors, Shadow } from '../constants/values';

const EditProfilePage = () => {
  return (
    <View style={styles.container}>
      <View style={styles.topBar}>
        <Text style={styles.header}>Edit profile</Text>
        <Image style={styles.image} source={require('../assets/img/back.png')} />
      </View>
      <View style={styles.form}>
        <Text style={[styles.subHeading, {marginTop: 30}]}>USERNAME</Text>
        <TextInput style={styles.input} placeholder="Username" placeholderTextColor="#B8B8B8"  />
        <Text style={styles.subHeading}>ADDRESS</Text>
        <TextInput style={styles.input} placeholder="Address" placeholderTextColor="#B8B8B8"  />
        <TextInput style={styles.input} placeholder="City" placeholderTextColor="#B8B8B8"  />
        <TextInput style={styles.input} placeholder="Country" placeholderTextColor="#B8B8B8"  />
        <TouchableOpacity style={styles.button}>
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
