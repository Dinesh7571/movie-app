import React from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const MovieCard = ({movie, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.cardContainer}>
      <LinearGradient colors={['#292929', '#1a1a1a']} style={styles.card}>
        <Image source={{uri: movie.image?.medium}} style={styles.thumbnail} />
        <View style={styles.info}>
          <Text style={styles.title} numberOfLines={1}>{movie.name}</Text>
          <Text style={styles.genre}>{movie.genres?.join(', ') || 'N/A'}</Text>
          <Text style={styles.summary} numberOfLines={2}>
            {movie.summary?.replace(/<[^>]+>/g, '')}
          </Text>
        </View>
      </LinearGradient>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    marginBottom: 15,
    borderRadius: 12,
    overflow: 'hidden',
  },
  card: {
    flexDirection: 'row',
    padding: 10,
    borderRadius: 12,
    elevation: 5,
  },
  thumbnail: {
    width: 100,
    height: 150,
    borderRadius: 8,
  },
  info: {
    flex: 1,
    marginLeft: 12,
    justifyContent: 'space-around',
  },
  title: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  genre: {
    color: '#FFD700',
    fontSize: 14,
  },
  summary: {
    color: '#aaa',
    fontSize: 14,
  },
});

export default MovieCard;
