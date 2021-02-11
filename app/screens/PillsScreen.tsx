import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {PillsStackParamList} from '../navigation/types';
import {NavigationProp} from '@react-navigation/native';

type PillsScreenRouteProp = NavigationProp<PillsStackParamList, 'Pills'>;

type Props = {
  navigation: PillsScreenRouteProp;
};

const PillsScreen: React.FC<Props> = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={styles.title}>
          <Text style={styles.titleFont}>Medication</Text>
        </View>
        <View style={styles.checkbox}>
          <CheckBox />
          <TouchableOpacity
            onPress={() => navigation.navigate('Info', {title: 'Aspirin'})}>
            <Text style={styles.checkboxTitle}>Aspirin</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.checkbox}>
          <CheckBox />
          <TouchableOpacity
            onPress={() => navigation.navigate('Info', {title: 'Analgin'})}>
            <Text style={styles.checkboxTitle}>Analgin</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    padding: 10,
  },
  content: {
    width: '70%',
    borderWidth: 1,
    alignSelf: 'center',
    marginTop: 20,
    justifyContent: 'center',
  },
  checkbox: {
    width: '90%',
    flexDirection: 'row',
    alignSelf: 'center',
    alignItems: 'center',
    margin: 10,
    justifyContent: 'space-between',
  },
  checkboxTitle: {
    fontSize: 25,
    color: 'blue',
    textDecorationLine: 'underline',
  },
  title: {
    borderBottomWidth: 1,
    padding: 10,
    alignItems: 'center',
  },
  titleFont: {fontSize: 30},
});
export default PillsScreen;
