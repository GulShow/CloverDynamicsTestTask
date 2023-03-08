import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {MainScreen} from '../MainScreen/MainScreen';
import {SecondaryScreen} from '../SecondaryScreen/SecondaryScreen';

const Tab = createBottomTabNavigator();

export const TabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Main" component={MainScreen} />
      <Tab.Screen name="Secondary" component={SecondaryScreen} />
    </Tab.Navigator>
  );
};
