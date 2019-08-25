import React from 'react';
import { View, Text, StyleSheet, FlatList, Image } from 'react-native';
import useRestaurant from '../hooks/useRestaurant';

const ResultsShowScreen = ({ navigation }) => {
  const id = navigation.getParam('id');

  const [getDetailApi, result, errorMessage] = useRestaurant(id);

  console.log(result);

  if (!result) {
    return null;
  } else {
    return (
      <View>
        <Text style={styles.name}>{result.name}</Text>
        <FlatList
          data={result.photos}
          keyExtractor={(photo) => photo}
          renderItem={({ item }) => {
            return <Image style={styles.image} source={{ uri: item }} />
          }}
        />
      </View>
    );
  }
};

const styles = StyleSheet.create({
  name: {
    fontSize: 16,
    fontWeight: 'bold'
  },
  image: {
    height: 200,
    width: 300,
    marginTop: 10
  }
});

export default ResultsShowScreen;