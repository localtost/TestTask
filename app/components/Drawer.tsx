import {useNavigation} from '@react-navigation/native';
import React from 'react';
import Ionicon from 'react-native-vector-icons/Ionicons';
import {DrawerNavigationProp} from '@react-navigation/drawer';
import {DrawerStackParamList} from '../navigation/types';

const Drawer = (): JSX.Element => {
  const navigation = useNavigation<
    DrawerNavigationProp<DrawerStackParamList>
  >();
  return (
    <Ionicon
      size={33}
      name="ios-menu"
      onPress={() => navigation.openDrawer()}
    />
  );
};
export default Drawer;
