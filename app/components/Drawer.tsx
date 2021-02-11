import {useNavigation} from '@react-navigation/native';
import React from 'react';
import Ionicon from 'react-native-vector-icons/Ionicons';

const Drawer = (): JSX.Element => {
  const navigation = useNavigation();
  return (
    <Ionicon
      size={33}
      name="ios-menu"
      onPress={() => navigation.openDrawer()}
    />
  );
};
export default Drawer;
