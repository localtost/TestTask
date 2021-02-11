import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {RouteProp} from '@react-navigation/native';
import {PillsStackParamList} from '../navigation/types';

type PillInfoRouteProp = RouteProp<PillsStackParamList, 'Info'>;

type Props = {
  route: PillInfoRouteProp;
};
const PillInfo: React.FC<Props> = ({route}) => {
  const {title} = route.params;
  return (
    <View style={style.container}>
      <View style={style.content}>
        <Text>{title}</Text>
      </View>
    </View>
  );
};
const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 10,
    alignItems: 'center',
  },
  content: {
    width: '70%',
    borderWidth: 1,
    padding: 45,
    alignSelf: 'center',
    marginTop: 20,
    alignItems: 'center',
  },
});
export default PillInfo;
