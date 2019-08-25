import React from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import { Feather } from '@expo/vector-icons';

const SearchBar = ({ term, onTermChange, onTermSubmit }) => {
  return (
    <View style={styles.backgroundStyle}>
      <Feather name="search" style={styles.searchIconStyle} />
      <TextInput 
        autoCapitalize="none"
        autoCorrect={false}
        placeholder="Search" 
        style={styles.inputStyle} 
        value={term}
        onChangeText={onTermChange}
        onEndEditing={onTermSubmit}
        />
    </View>
  );
};

const styles = StyleSheet.create({
  backgroundStyle: {
    backgroundColor: '#F0EEEE',
    height: 50,
    margin: 15,
    borderRadius: 5,
    flexDirection: 'row',
    marginBottom: 10
  },
  searchIconStyle: {
    fontSize: 35,
    alignSelf: 'center',
    marginHorizontal: 10
  },
  inputStyle: {
    flex: 1,
    fontSize: 20
  }
});

export default SearchBar;