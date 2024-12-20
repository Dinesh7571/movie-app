import React, {useState, useEffect} from 'react';
import {View, FlatList, StyleSheet, TextInput, StatusBar} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import MovieCard from '../components/MovieCard';

const HomeScreen = ({navigation}) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch('https://api.tvmaze.com/search/shows?q=all')
      .then(response => response.json())
      .then(data => setMovies(data))
      .catch(error => console.error(error));
  }, []);

  return (
    <View style={styles.container}>
        <StatusBar translucent backgroundColor="transparent" barStyle={'light-content'} />
      <TextInput
        style={styles.searchBar}
        placeholder="Search Movies..."
        placeholderTextColor="#888"
        onFocus={() => navigation.navigate('Search')}
      />
      <FlatList
        data={movies}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item}) => (
          <MovieCard
            movie={item.show}
            onPress={() => navigation.navigate('Details', {movie: item.show})}
          />
        )}
      />
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
});

export default HomeScreen;
