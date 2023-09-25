import React from 'react';
import { StyleSheet, View } from 'react-native';
import BooksScreen from './pages/BooksScreen';
import Navigation from './components/Navigation';

const App = () => {
  return (
    <View style={styles.container}>
      <BooksScreen />
      <Navigation />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

export default App;
