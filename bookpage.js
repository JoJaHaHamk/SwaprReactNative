

import React, { useState, useEffect } from 'react';
import { View, Text, Image, Button } from 'react-native';

const BookPage = () => {
  const [bookData, setBookData] = useState(null);

  // useEffect(()=>{

  // }
  // )
  

  if (!bookData) {
    return <Text>Loading...</Text>;
  }

  return (
    <View>
    <Image source={{ uri: 'https://www.bing.com/images/search?view=detailV2&ccid=0VP1x5zE&id=8059013B4A4A9EDCB6FCD3F633191754C907E7E3&thid=OIP.0VP1x5zEgcqr5NR7ESMv2wHaEo&mediaurl=https%3a%2f%2fimages7.alphacoders.com%2f443%2f443952.jpg&cdnurl=https%3a%2f%2fth.bing.com%2fth%2fid%2fR.d153f5c79cc481caabe4d47b11232fdb%3frik%3d4%252bcHyVQXGTP20w%26pid%3dImgRaw%26r%3d0&exph=1800&expw=2880&q=book+image+as+background&simid=608032099662056579&FORM=IRPRST&ck=939FEA915B06DCB98323C2F724A859E5&selectedIndex=0' }} style={styles.coverImage} />

    <Text style={styles.title}>{bookData.title}</Text>
      <Text style={styles.author}>{bookData.author}</Text>
      <Text style={styles.description}>{bookData.description}</Text>
      <Text style={styles.genre}>{bookData.genre}</Text>
      <Text>{bookData.genre}</Text>
      <Button title="Swap" onPress={() => {/* Handle swap action here */}} />
    </View>
  );

  const styles = StyleSheet.create({
  
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    coverImage: {
      width: 200,
      height: 300,
      resizeMode: 'cover',
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      marginTop: 16,
    },
    author: {
      fontSize: 18,
      marginTop: 8,
    },
    description: {
      fontSize: 16,
      marginTop: 8,
      textAlign: 'center',
    },
  });
  
};



export default BookPage;