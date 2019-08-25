import React from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';

const ResultDetail = ({ result }) => {
  
  return (
    <View style={styles.container}>
      <Image
        source={{uri: result.image_url}}
        style={styles.image}
      />
      <Text style={styles.name}>{result.name}</Text>
      <Text style={styles.detail}>{result.rating} Star {result.review_count} Reviews</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginLeft: 15
  },
  name: {
    fontWeight: 'bold'
  },
  image: {
    width: 250,
    height: 200,
    borderRadius: 4,
    marginBottom: 5
  }, 
  detail: {
    color: '#B7B7B7'
  }
});

export default ResultDetail;