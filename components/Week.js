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
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const getData = async () => {
    console.log('got data again...');
    fetch('https://nps-api-backend.herokuapp.com/api/v1/restaurants/')
      .then(response => response.json())
      .then(json => {
        setData(json);
      })
      .catch(error => console.error(error))
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    getData();
    console.log('useEffect, Week.js');
  }, []);

  if (!isLoading) {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Daily Specials</Text>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => {
            navigation.push('Day Specials', {
              day: 'Sunday',
              data: data,
            });
          }}>
          <Text style={styles.day}>Sunday</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => {
            navigation.push('Day Specials', {
              day: 'Monday',
              data: data,
            });
          }}>
          <Text style={styles.day}>Monday</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => {
            getData();
            navigation.push('Day Specials', {
              day: 'Tuesday',
              data: data,
            });
          }}>
          <Text style={styles.day}>Tuesday</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => {
            navigation.push('Day Specials', {
              day: 'Wednesday',
              data: data,
            });
          }}>
          <Text style={styles.day}>Wednesday</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => {
            getData();
            navigation.push('Day Specials', {
              day: 'Thursday',
              data: data,
            });
          }}>
          <Text style={styles.day}>Thursday</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => {
            navigation.push('Day Specials', {
              day: 'Friday',
              data: data,
            });
          }}>
          <Text style={styles.day}>Friday</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => {
            getData();
            navigation.push('Day Specials', {
              day: 'Saturday',
              data: data,
            });
          }}>
          <Text style={styles.day}>Saturday</Text>
        </TouchableOpacity>
      </View>
    );
  } else {
    return (
      <View>
        <Text style={styles.loadingScreen}>North Park Specials</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#0087b0',
    height: '100%',
    flex: 1,
  },
  title: {
    textAlign: 'center',
    fontSize: 30,
    color: 'white',
    fontWeight: 'bold',
    padding: 10,
    margin: 20,
  },
  btn: {
    alignItems: 'center',
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
    padding: 20,
  },
  loadingScreen: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 40,
    color: 'navy',
  },
});
