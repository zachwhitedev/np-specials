import React, {useEffect, useState} from 'react';
import {Button, View, Text, FlatList} from 'react-native';

export default function HomeScreen({navigation}) {
  const [isLoading, setLoading] = useState(true);
  const [weekday, setWeekday] = useState('');
  const [data, setData] = useState([]);

  useEffect(() => {
    Date.prototype.getWeekDay = function() {
        var weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        return weekday[this.getDay()];
    }   
    setWeekday(new Date().getWeekDay()); 
    
    fetch('https://reactnative.dev/movies.json')
      .then(response => response.json())
      .then(json => {
        setData(json.movies);
      })
      .catch(error => console.error(error))
      .finally(() => setLoading(false));
  }, []);

  if (isLoading) {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text>Home Screen</Text>
        <Button
          title="Go to Details"
          onPress={() => navigation.navigate('Details')}
        />
        <Button title="Go to Details" onPress={() => console.log(data)} />
      </View>
    );
  } else {
    return (
      <View>
        <FlatList
          data={data}
          keyExtractor={({id}, index) => id}
          renderItem={({item}) => (
            <Text>
              {item.title}, {item.releaseYear}
            </Text>
          )}
        />
        <Button
          title="Go to Details"
          onPress={() => navigation.navigate('Details')}
        />
      </View>
    );
  }
}
