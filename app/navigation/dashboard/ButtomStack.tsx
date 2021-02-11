import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import HomeStackScreen from './HomeStack';
import PillsStackScreen from './PillsStack';
import CalendarStackScreen from './CalendarStack';
import {RootStackParamList} from '../types';

const Tab = createBottomTabNavigator<RootStackParamList>();

const ButtonStack = (): JSX.Element => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;
          switch (route.name) {
            case 'User':
              iconName = focused ? 'ios-home' : 'ios-home-outline';
              break;
            case 'Calendar':
              iconName = focused ? 'ios-calendar' : 'ios-calendar-outline';
              break;
            case 'Pills':
              iconName = focused ? 'ios-list' : 'ios-list-outline';
              break;
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: 'black',
        inactiveTintColor: 'gray',
      }}>
      <Tab.Screen name="User" component={HomeStackScreen} />
      <Tab.Screen name="Pills" component={PillsStackScreen} />
      <Tab.Screen name="Calendar" component={CalendarStackScreen} />
    </Tab.Navigator>
  );
};
export default ButtonStack;
