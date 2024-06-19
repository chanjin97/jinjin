import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './page/HomeScreen';
import ProfileScreen from './page/ProfileScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// const Stack = createNativeStackNavigator();

const Tap = createBottomTabNavigator();


const App = () => {
  return (
    <NavigationContainer>
      <Tap.Navigator
      screenOptions={{
        headerTitleAlign:'center',
        headerTintColor:'white',
        headerStyle:{
          backgroundColor:'skyblue'
        }
      }}
      >
        <Tap.Screen name='Home'component={HomeScreen} />
        <Tap.Screen name='Profile'component={ProfileScreen} />
      </Tap.Navigator>

    </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({})