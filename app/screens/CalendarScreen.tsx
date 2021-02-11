import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

const CalendarScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Calendar</Text>
      <Text>Nothing Here</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
  },
});
export default CalendarScreen;
