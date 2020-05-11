import React, {useEffect, useState} from 'react';
import {Button, View, Text, FlatList, StyleSheet} from 'react-native';
import SpecialsCard from './SpecialsCard';

function DaySpecials({route, navigation}) {
  const {day, data} = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{day}</Text>
      <FlatList
        data={data}
        keyExtractor={({id}, index) => id}
        renderItem={({item}) => <SpecialsCard restaurant={item} day={day} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    backgroundColor: '#0087b0',
    height: '100%',
  },
  text: {
    color: 'white',
    fontSize: 32,
    textAlign: 'center',
    fontFamily: 'Arial',
    fontWeight: 'bold',
  },
});

export default DaySpecials;
