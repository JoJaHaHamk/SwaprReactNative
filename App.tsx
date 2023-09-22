import React from 'react';
import { StyleSheet, View } from 'react-native';
import Books from './pages/Books';

const App = () => {
  return (
    <View style={styles.container}>
      <Books />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

export default App;
