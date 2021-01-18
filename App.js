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
  TextInput
} from 'react-native';

import {
  Colors
} from 'react-native/Libraries/NewAppScreen';

const displayAsTime = (timer) => {
    return new Date(timer * 1000).toISOString().substr(11, 8);
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
  const [timerInput, setTimerInput] = useState(-1);
   if (timerInput == -1) {
     return(
         <View style={{padding: 10}}>
           <TextInput
               placeholder="Type the timer value here!"
               onSubmitEditing = {(event) => {
                 if(parseInt(event.nativeEvent.text))
                 {
                    setTimerInput(parseInt(event.nativeEvent.text));
                 }
                 else
                 {
                    alert("Please enter a valid input");
                 }
               }}
           />
           <Text> Enter the number of seconds for the timer </Text>
         </View>
     );
   }
   else{
     return(
         <View style={{padding: 10}}>
           <Countdown remainingSecond = {timerInput} />
         </View>
     );
   }
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

/*
    <Text>
        {text.split(' ').map((word) => word && '🍕').join(' ')}
    </Text>

    <Text>
        {String(text)}
    </Text>

    </>
       /* <Countdown remainingSecond = {parseInt(text)} />*/

     /*
        <TextInput
            placeholder="Type the timer value here!"
            onSubmitEditing = {text => setText(text)}
        />
        */