import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Image} from 'react-native-animatable';

const HomeScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <View style={styles.avatarContainer}>
        <Image source={require('../assets/profile.jpg')} style={styles.image} />
        <Text>Good Morning , Eugen </Text>
      </View>
      <View style={styles.content}>
        <View style={styles.titleStyle}>
          <Text>Messages</Text>
        </View>
        <Text style={styles.description}>No symptoms today</Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 10,
  },
  avatarContainer: {
    alignItems: 'center',
  },
  image: {
    width: 150,
    height: 150,
  },
  content: {
    width: '70%',
    borderWidth: 1,
    alignSelf: 'center',
    marginTop: 20,
    justifyContent: 'center',
  },
  titleStyle: {
    borderBottomWidth: 1,
    padding: 10,
    alignItems: 'center',
  },
  description: {
    alignSelf: 'center',
    padding: 30,
  },
});
export default HomeScreen;
