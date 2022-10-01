import React, {useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

const HomeTab = () => {
  const [counter, setCounter] = useState(0);
  return (
    <View>
      <Text>Counter App Home Screen</Text>
      <Text>{counter}</Text>
      <View>
        <TouchableOpacity
          style={[styles.button]}
          onPress={() => {
            setCounter(counter + 10);
          }}>
          <Text>+10</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button]}
          onPress={() => {
            setCounter(0);
          }}>
          <Text>Reset</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button]}
          onPress={() => {
            if (counter >= 10) {
              setCounter(counter - 10);
            }
          }}>
          <Text>-10</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HomeTab;

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'red',
    padding: 10,
    marginBottom: 10,
    fontSize: 20,
    fontWeight: 'bold',
  },
});
