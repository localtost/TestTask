import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../../screens/HomeScreen';
import {HomeStackParamList} from '../types';
import Drawer from '../../components/Drawer';
const SettingsStack = createStackNavigator<HomeStackParamList>();

function HomeStackScreen() {
  return (
    <SettingsStack.Navigator
      screenOptions={{
        headerLeft: Drawer,
      }}>
      <SettingsStack.Screen name="Home" component={HomeScreen} />
    </SettingsStack.Navigator>
  );
}

export default HomeStackScreen;
