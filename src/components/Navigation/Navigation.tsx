import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import {MainTabNavigator} from '../MainTabNavigator/MainTabNavigator';
import {SecondaryTabNavigator} from '../SecondaryTabNavigator/SecondaryTabNavigator';

const Drawer = createDrawerNavigator();

export const Navigation = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Main">
        <Drawer.Screen name="Main" component={MainTabNavigator} />
        <Drawer.Screen name="Secondary" component={SecondaryTabNavigator} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};
