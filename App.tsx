import React from 'react';
import { StyleSheet, View } from 'react-native';
import BooksScreen from './pages/BooksScreen';

const App = () => {
  return (
    <View style={styles.container}>
      <BooksScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

export default App;
