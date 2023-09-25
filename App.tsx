import React from 'react';
import { StyleSheet, View } from 'react-native';
import BooksScreen from './pages/BooksScreen';
import AddBookScreen from './pages/AddBookScreen';
import Navigation from './components/Navigation';

const App = () => {
  return (
    <View style={styles.container}>
      {/* <BooksScreen /> */}
      <AddBookScreen />
      {/* <Navigation /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

export default App;
