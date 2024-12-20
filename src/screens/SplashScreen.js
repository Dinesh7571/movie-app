import React, {useEffect} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';


const SplashScreen = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('MainApp');
    }, 2000);
  }, [navigation]);

  return (
    <View  style={styles.container}>
      <Image source={require('../assets/splash.png')} style={styles.image} />
     
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor:'black',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 220,
    height: 220,
    resizeMode: 'contain',
    marginBottom: 20,
  },
 
});

export default SplashScreen;
