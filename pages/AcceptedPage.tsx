import React from 'react';
import { View, StyleSheet, Text, TextInput, Image } from 'react-native';
import AcceptedList from '../components/AcceptedList';
import { Colors, Shadow } from '../constants/values';

const AcceptedPage = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Accepted</Text>
      <View style={styles.search}>
        <TextInput style={styles.input} placeholder="Search for a book" placeholderTextColor="#B8B8B8"  />
        <Image style={styles.searchIcon} source={require('../assets/img/search.png')} />
      </View>
      <AcceptedList />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
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
  options: {
    borderBottomColor: Colors.lightGray,
    borderBottomWidth: 1,
  },
  search: {
    marginTop: -30,
    marginBottom: 15,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.background,
    borderRadius: 10,
    marginHorizontal: 40,
    ...Shadow,
  },
  searchIcon: {
    marginRight: 16,
  },
  input: {
    flex: 1,
    fontFamily: 'Roboto-Regular',
    fontSize: 16,
    padding: 16,
  },
});

export default AcceptedPage;