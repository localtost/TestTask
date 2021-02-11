import React from 'react';
import Ionicon from 'react-native-vector-icons/Ionicons';
import {DrawerNavigationProp} from '@react-navigation/drawer';
import {DrawerStackParamList} from '../navigation/types';

type Params = DrawerNavigationProp<DrawerStackParamList>;
const Drawer = ({openDrawer}: Params): JSX.Element => {
  return <Ionicon size={33} name="ios-menu" onPress={() => openDrawer()} />;
};
export default Drawer;
