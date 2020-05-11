import React, {useEffect, useState} from 'react';
import {Button, View, Text, FlatList, StyleSheet} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome5';

export default function SpecialCard({restaurant, day}) {
    const beer = <FontAwesome name={'beer'} color={'darkgreen'} size={38} />;
    const wine = <FontAwesome name={'wine-glass'} color={'purple'} size={38}/>;
    const burger = <FontAwesome name={'hamburger'} color={'orange'} size={32}/>;
    const martini= <FontAwesome name={'glass-martini'} color={'#24DABF'} size={32}/>;
  const daySpecials = restaurant.specials.filter(special => special.day == day || special.day == 'All Days');
  const specialsList = daySpecials.map(special => {
    if (special.day == day || special.day == 'All Days') {
      return (
        <View style={styles.specialContainer}>
          {special.category == 'food' && burger}
          {special.category == 'liquor' && martini}
          {special.category == 'wine' && wine}
          {special.category == 'beer' && beer}
          <Text style={styles.special}>{special.title}</Text>
        </View>
      );
    } else return;
  });

  if (specialsList.length) {
    return (
      <View style={styles.card}>
        <View style={styles.topHalf}>
          <Text style={styles.restaurant}>{restaurant.name}</Text>
          <Text style={styles.address}>{restaurant.address}</Text>
        </View>
        {specialsList}
      </View>
    );
  } else return <></>;
}

const styles = StyleSheet.create({
  card: {
    marginBottom: 20,
    backgroundColor: 'white',
    flex: 1,
    justifyContent: 'center',
    margin: 20
  },
  special: {
    color: 'black',
    padding: 6,
    fontSize: 18
  },
  restaurant: {
    paddingLeft: 5,
    paddingTop: 5,
    fontSize: 20,
    backgroundColor: '#f0f0f0',
  },
  address: {
    paddingLeft: 5,
    paddingTop: 5,
    paddingBottom: 2,
    fontWeight: 'bold',
    backgroundColor: '#f0f0f0',
    marginBottom: 6,
  },
  topHalf: {
      borderBottomWidth: 2,
      borderBottomColor: '#a1a1a1',
      padding: 0,
      margin: 0,
      backgroundColor: '#f0f0f0'
  },
  specialContainer: {
      flexDirection: 'row',
      padding: 8
  }
});
