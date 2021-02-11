import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import PillsScreen from '../../screens/PillsScreen';
import {PillsStackParamList} from '../types';
import Drawer from '../../components/Drawer';
import PillInfo from '../../screens/PillInfo';

const SettingsStack = createStackNavigator<PillsStackParamList>();

function PillsStackScreen() {
  return (
    <SettingsStack.Navigator>
      <SettingsStack.Screen
        options={{
          headerLeft: Drawer,
        }}
        name="Pills"
        component={PillsScreen}
      />
      <SettingsStack.Screen name="Info" component={PillInfo} />
    </SettingsStack.Navigator>
  );
}
export default PillsStackScreen;
