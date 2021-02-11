import React from 'react';
import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';
import {useNavigation} from '@react-navigation/native';

const CustomDrawerContent = (): JSX.Element => {
  const navigation = useNavigation();
  return (
    <DrawerContentScrollView>
      <DrawerItem label="Main" onPress={() => navigation.navigate('User')} />
      <DrawerItem label="Pills" onPress={() => navigation.navigate('Pills')} />
      <DrawerItem
        label="Calendar"
        onPress={() => navigation.navigate('Calendar')}
      />
    </DrawerContentScrollView>
  );
};

export default CustomDrawerContent;
