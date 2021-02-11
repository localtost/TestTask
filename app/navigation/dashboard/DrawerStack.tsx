import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import ButtonStack from './ButtomStack';
import CustomDrawerContent from '../../components/DrawerMenu';
import {DrawerStackParamList} from '../types';

const Drawer = createDrawerNavigator<DrawerStackParamList>();

export default function Menu() {
  return (
    <Drawer.Navigator drawerContent={() => <CustomDrawerContent />}>
      <Drawer.Screen name="Home" component={ButtonStack} />
    </Drawer.Navigator>
  );
}
