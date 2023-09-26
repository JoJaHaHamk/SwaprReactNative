import React from 'react';
import { StyleSheet, View } from 'react-native';
import BooksScreen from './pages/BooksScreen';
import AddBookScreen from './pages/AddBookScreen';
import ProfilePage from './pages/ProfilePage';
import EditProfilePage from './pages/EditProfilePage';
import MatchesPage from './pages/MatchesPage';
import AcceptedPage from './pages/AcceptedPage';
import Navigation from './components/Navigation';

const App = () => {
  return (
    <View style={styles.container}>
      {/* <BooksScreen /> */}
      {/* <ProfilePage /> */}
      {/* <MatchesPage /> */}
      <AcceptedPage />
      <Navigation />
      {/* <AddBookScreen /> */}
      {/* <EditProfilePage /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

export default App;
