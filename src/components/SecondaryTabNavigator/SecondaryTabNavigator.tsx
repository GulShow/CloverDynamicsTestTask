import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {MainScreen} from '../MainScreen/MainScreen';
import {SecondaryScreen} from '../SecondaryScreen/SecondaryScreen';

const Tab = createBottomTabNavigator();

export const SecondaryTabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Secondary" component={SecondaryScreen} />
      <Tab.Screen name="Main" component={MainScreen} />
    </Tab.Navigator>
  );
};
