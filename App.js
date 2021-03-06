import React, {useEffect, useState} from 'react';
import {Button, View, Text, FlatList} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import HomeScreen from './components/HomeScreen';
import DetailsScreen from './components/Details';
import Week from './components/Week';
import DaySpecials from './components/DaySpecials';

const Stack = createStackNavigator();

function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Week">
        <Stack.Screen name="Week" component={Week} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
        <Stack.Screen name="Day Specials" component={DaySpecials} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
