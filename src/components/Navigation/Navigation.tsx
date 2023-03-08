import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import {SecondaryScreen} from '../SecondaryScreen/SecondaryScreen';
import {TabNavigator} from '../TabNavigator/TabNavigator';

const Drawer = createDrawerNavigator();

export const Navigation = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Main">
        <Drawer.Screen name="Main" component={TabNavigator} />
        <Drawer.Screen name="Secondary" component={SecondaryScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};
