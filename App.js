import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {View, StyleSheet, Image} from 'react-native';
import SplashScreen from './src/screens/SplashScreen';
import HomeScreen from './src/screens/HomeScreen';
import SearchScreen from './src/screens/SearchScreen';
import DetailsScreen from './src/screens/DetailsScreen';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const MainApp = () => (
  <Tab.Navigator
    screenOptions={({route}) => ({
      headerShown: false,
      tabBarStyle: {backgroundColor: '#1F1F1F'},
      tabBarActiveTintColor: '#BB86FC',
      tabBarInactiveTintColor: '#808080',
      tabBarLabel: () => null, // Hide the tab names
      tabBarIcon: ({focused}) => {
        let iconName;
        if (route.name === 'Home') {
          iconName = require('./src/assets/home.png');
        } else if (route.name === 'Search') {
          iconName = require('./src/assets/search.png');
        }

        const opacity = focused ? 0.6 : 1;

        return (
          <View style={styles.iconContainer}>
            <Image source={iconName} style={[styles.icon, {opacity}]} />
          </View>
        );
      },
    })}>
    <Tab.Screen name="Home" component={HomeScreen} />
    <Tab.Screen name="Search" component={SearchScreen} />
  </Tab.Navigator>
);

const App = () => {
  return (
    <NavigationContainer>
      <View style={[styles.container, {backgroundColor: '#121212'}]}>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name="Splash" component={SplashScreen} />
          <Stack.Screen name="MainApp" component={MainApp} />
          <Stack.Screen name="Details" component={DetailsScreen} />
        </Stack.Navigator>
      </View>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212', 
  },
  iconContainer: {
    justifyContent: 'center', 
    alignItems: 'center',     
  },
  icon: {
    marginTop:10,
    height: 30,
    width: 30,
  },
});

export default App;
