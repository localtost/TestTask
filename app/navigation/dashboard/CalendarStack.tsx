import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {CalendarStackParamList} from '../types';
import CalendarScreen from '../../screens/CalendarScreen';
import Drawer from '../../components/Drawer';

const SettingsStack = createStackNavigator<CalendarStackParamList>();

function CalendarStackScreen() {
  return (
    <SettingsStack.Navigator
      screenOptions={{
        headerLeft: Drawer,
      }}>
      <SettingsStack.Screen name="Calendar" component={CalendarScreen} />
    </SettingsStack.Navigator>
  );
}
export default CalendarStackScreen;
