import React, {useState} from 'react';
import {View, TextInput, FlatList, StyleSheet, Text, Platform, StatusBar} from 'react-native';
import MovieCard from '../components/MovieCard';

const SearchScreen = ({navigation}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = (query) => {
    setSearchTerm(query);
    if (query.length > 2) {
      fetch(`https://api.tvmaze.com/search/shows?q=${query}`)
        .then(response => response.json())
        .then(data => setSearchResults(data))
        .catch(error => console.error(error));
    } else {
      setSearchResults([]);
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.searchBar}
        placeholder="Search for a movie..."
        placeholderTextColor="#888"
        value={searchTerm}
        onChangeText={handleSearch}
      />
      {searchResults.length === 0 && searchTerm.length > 2 ? (
        <Text style={styles.noResultsText}>No movies found...</Text>
      ) : (
        <FlatList
          data={searchResults}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({item}) => (
            <MovieCard
              movie={item.show}
              onPress={() => navigation.navigate('Details', {movie: item.show})}
            />
          )}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor:'black',
    flex: 1,
    padding: 10,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  searchBar: {
    backgroundColor: '#1e1e1e',
    color: '#fff',
    padding: 12,
    marginBottom: 20,
    borderRadius: 8,
    fontSize: 16,
  },
  noResultsText: {
    color: '#FFD700',
    fontSize: 16,
    textAlign: 'center',
    marginTop: 20,
  },
});

export default SearchScreen;
