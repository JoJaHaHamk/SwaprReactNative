// AddBook.js
import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

const AddBook = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [description, setDescription] = useState('');
  const [genre, setGenre] = useState('');

  const handleAddBook = () => {
    // Validate input and send book data to parent component
    if (title && author && description && genre) {
      // onAddBook({ title, author, description, genre });
    }
  };

  return (
    <View>
      <TextInput
        placeholder="Title"
        value={title}
        onChangeText={setTitle}
      />
      {/* Add similar TextInput components for author, description, and genre */}
      <Button title="Add Book" onPress={handleAddBook} />
    </View>
  );
};

export default AddBook;