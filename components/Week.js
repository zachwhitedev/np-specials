import React, {useEffect, useState} from 'react';
import {
  Button,
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

export default function Week({navigation}) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Daily Specials</Text>
      <TouchableOpacity
        style={styles.btn}
        onPress={() => {
          navigation.push('Day Specials', {
            day: 'Sunday',
          });
        }}>
        <Text style={styles.day}>Sunday</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.btn}
        onPress={() => {
          navigation.push('Day Specials', {
            day: 'Monday',
          });
        }}>
        <Text style={styles.day}>Monday</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.btn}
        onPress={() => {
          navigation.push('Day Specials', {
            day: 'Tuesday',
          });
        }}>
        <Text style={styles.day}>Tuesday</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.btn}
        onPress={() => {
          navigation.push('Day Specials', {
            day: 'Wednesday',
          });
        }}>
        <Text style={styles.day}>Wednesday</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.btn}
        onPress={() => {
          navigation.push('Day Specials', {
            day: 'Thursday',
          });
        }}>
        <Text style={styles.day}>Thursday</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.btn}
        onPress={() => {
          navigation.push('Day Specials', {
            day: 'Friday',
          });
        }}>
        <Text style={styles.day}>Friday</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.btn}
        onPress={() => {
          navigation.push('Day Specials', {
            day: 'Saturday',
          });
        }}>
        <Text style={styles.day}>Saturday</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#0087b0',
    height: '100%',
    flex: 1
  },
  title: {
    textAlign: 'center',
    fontSize: 30,
    color: 'white',
    fontWeight: 'bold',
    padding: 10,
    margin: 20
  },
  btn: {
    alignItems: 'center'
  },
  day: {
      color: 'navy',
      fontSize: 24,
      textAlign: 'center',
      backgroundColor: 'white',
      borderColor: 'gray',
      borderWidth: 1,
      width: 290,
      alignItems: 'center',
      padding: 20
  },
});
