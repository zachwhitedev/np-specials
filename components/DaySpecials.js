import React, {useEffect, useState} from 'react';
import {Button, View, Text, FlatList, StyleSheet} from 'react-native';

function DaySpecials({route, navigation}) {
    const { day } = route.params;
    return (
      <View style={styles.container}>
        <Text style={styles.text}>{day}</Text>
        <Button
          title="Go to Details... again"
          onPress={() => navigation.push('Details')}
        />
      </View>
    );
  }

  const styles = StyleSheet.create({
      container: {
          paddingTop: 20,
          backgroundColor: '#0087b0',
          height: '100%'
      },
      text: {
          color: 'white',
          fontSize: 32,
          textAlign: 'center',
          fontFamily: 'Arial',
          fontWeight: 'bold'
      }
  })

  export default DaySpecials;