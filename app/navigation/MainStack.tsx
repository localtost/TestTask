import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {MainStackParamList} from './types';
import DrawerStack from './dashboard/DrawerStack';

const Main = createStackNavigator<MainStackParamList>();

export default function MainStack(): JSX.Element {
  return (
    <NavigationContainer>
      <Main.Navigator headerMode="none">
        <Main.Screen name="DrawerStack" component={DrawerStack} />
      </Main.Navigator>
    </NavigationContainer>
  );
}
