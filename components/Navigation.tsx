import React from 'react';
import { View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Colors } from '../constants/values';

interface NavigationProps {
  params: any;
}

const Navigation = ({params}: NavigationProps) => {
  const currentPage = params.route.name;

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={()=>params.navigation.navigate("Books")}>
        <Image style={[styles.image, currentPage === "Books" ? styles.active : null]} source={require('../assets/img/home.png')} />
      </TouchableOpacity>
      <TouchableOpacity onPress={()=>params.navigation.navigate("Matches")}>
        <Image style={[styles.image, currentPage === "Matches" ? styles.active : null]} source={require('../assets/img/matches.png')} />
      </TouchableOpacity>
      <View style={styles.plus}>
        <Image source={require('../assets/img/plus.png')} />
      </View>
      <TouchableOpacity onPress={()=>params.navigation.navigate("Accepted")}>
        <Image style={[styles.image, currentPage === "Accepted" ? styles.active : null]} source={require('../assets/img/accepted.png')} />
      </TouchableOpacity>
      <TouchableOpacity onPress={()=>params.navigation.navigate("Profile")}>
        <Image style={[styles.image, currentPage === "Profile" ? styles.active : null]} source={require('../assets/img/profile.png')} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    zIndex: 500,
    flex: 1/11,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: Colors.background,
    paddingHorizontal: 40,
    borderWidth: 1,
    borderColor: Colors.lightGray,
  },
  image: {
    opacity: 0.20,
  },
  plus: {
    backgroundColor: Colors.secondary,
    padding: 18,
    borderRadius: 50,
    marginTop: -65,
  },
  active: {
    opacity: 1,
  }
});

export default Navigation;