import React from 'react';
import { View, Text, Image, ScrollView, StyleSheet, Platform, StatusBar } from 'react-native';

const DetailsScreen = ({ route }) => {
    const { movie } = route.params;

    return (
        <ScrollView style={styles.container}>
            <ScrollView contentContainerStyle={styles.scrollContainer}>
                {/* Movie Image */}
                <Image
                    source={{ uri: movie.image?.original || movie.image?.medium }}
                    style={styles.movieImage}
                    resizeMode="cover"
                />
                <View style={{ paddingHorizontal: 10 }}>
                    {/* Movie Title */}
                    <Text style={styles.movieTitle}>{movie.name}</Text>

                    {/* Movie Summary */}
                    <Text style={styles.sectionTitle}>Summary</Text>
                    <Text style={styles.movieSummary}>
                        {/* removing <p></p> using regular expression */}
                        {movie.summary?.replace(/<[^>]+>/g, '') || 'No summary available.'}
                    </Text>

                    {/* Movie Details */}
                    <View style={styles.detailsContainer}>
                        {movie.language && (
                            <Text style={styles.detailItem}>
                                <Text style={styles.detailLabel}>Language: </Text>
                                {movie.language}
                            </Text>
                        )}
                        {movie.genres?.length > 0 && (
                            <Text style={styles.detailItem}>
                                <Text style={styles.detailLabel}>Genres: </Text>
                                {movie.genres.join(', ')}
                            </Text>
                        )}
                        {movie.rating?.average && (
                            <Text style={styles.detailItem}>
                                <Text style={styles.detailLabel}>Rating: </Text>
                                {movie.rating.average}/10
                            </Text>
                        )}
                        {movie.runtime && (
                            <Text style={styles.detailItem}>
                                <Text style={styles.detailLabel}>Runtime: </Text>
                                {movie.runtime} mins
                            </Text>
                        )}
                        {movie.schedule?.days?.length > 0 && movie.schedule?.time && (
                            <Text style={styles.detailItem}>
                                <Text style={styles.detailLabel}>Schedule: </Text>
                                {movie.schedule.days.join(', ')} at {movie.schedule.time}
                            </Text>
                        )}
                        {movie.status && (
                            <Text style={styles.detailItem}>
                                <Text style={styles.detailLabel}>Status: </Text>
                                {movie.status}
                            </Text>
                        )}
                        {movie.premiered && (
                            <Text style={styles.detailItem}>
                                <Text style={styles.detailLabel}>Premiered:</Text>
                                {movie.premiered}
                            </Text>
                        )}
                    </View>
                </View>
            </ScrollView>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'black',
        flex: 1,
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    },
    scrollContainer: {
        paddingBottom: 20,
    },
    movieImage: {
        width: '100%',
        height: '500',
        borderRadius: 10,
        marginBottom: 20,
    },
    movieTitle: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#FFD700',
        textAlign: 'center',
        marginBottom: 10,
    },
    sectionTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#FFFFFF', 
        marginBottom: 10,
    },
    movieSummary: {
        fontSize: 16,
        color: '#E0E0E0',
        lineHeight: 24,
        marginBottom: 20,
        textAlign: 'justify',
    },
    detailsContainer: {
        marginTop: 20,
        padding: 15,
        backgroundColor: '#2c2c2c',
        borderRadius: 10,
        shadowColor: '#000', 
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.1,
        shadowRadius: 6,
        elevation: 5,
    },
    detailItem: {
        fontSize: 16,
        color: '#FFFFFF', 
        marginBottom: 10,
    },
    detailLabel: {
        fontWeight: 'bold',
        color: '#FFD700',
    },
});

export default DetailsScreen;
