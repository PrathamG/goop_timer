/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState, useEffect } from "react";
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Colors
} from 'react-native/Libraries/NewAppScreen';

const displayAsTime = (timer) => {
    return new Date(timer * 1000).toISOString().substr(11, 8)
}

const Countdown = (props) => {
    const [timer, setTimer] = useState(props.remainingSecond);
    useEffect(() => {
        const interval = setTimeout(() => {
            if(timer === 0){
            }
            else{
                setTimer(timer - 1);
            }
        }, 1000)
        return () => {
            if(timer === 1){
                alert("Done");
            }
        }
    }, [timer])

    return (
        <Text> {displayAsTime(timer)} </Text>
    );
};

const App: () => React$Node = () => {
  return (
    <Countdown remainingSecond = {5} />
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
});

export default App;
