// MainScreen.js

import React from 'react';
import { View } from 'react-native';
import BookPage from './BookPage'; // 

const MainScreen = () => {
  return (
    <View>
      <BookPage
        title="Sample Book"
        author="Sample Author"
        description="A sample book description..."
        genre="Fiction"
        onSwapPress={() => {/* Handle swap action */}}
      />
    </View>
  );
};

export default MainScreen;
