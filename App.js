import { StyleSheet, Text, View } from 'react-native';
import { useState } from 'react';
import AnswerButton from 'my-app/components/button.js'
import AnswerText from 'my-app/components/text.js'

export default function App() {
  const [stateName,setStateName] = useState('');
  return (
    <View style={styles.container}>
      <Text style={styles.title}>TrIvIa</Text>
      <Text>Answer:</Text>
      <Text>{stateName}</Text>
      <View style={styles.column}>
        <AnswerText content="How many cards are in a standard deck of playing cards?"/>
        <AnswerButton function={setStateName} answer="52"/>
        <AnswerText content="What is James Bond's code name?"/>
        <AnswerButton function={setStateName} answer="007"/>
        <AnswerText content="Which country is the largest in the world?"/>
        <AnswerButton function={setStateName} answer="Russia"/>
        <AnswerText content="What is an eight-sided shape called?"/>
        <AnswerButton function={setStateName} answer="Octagon"/>
      </View>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#d1cccc',
    alignItems: 'center',
    justifyContent: 'center',
    paddingInline: 32,
  },
  title: {
    fontSize: 64,
    fontWeight: 'bold',
    padding: 48,
    marginBottom: 32,
  },
  column: {
    flexDirection: 'column',
    rowGap: 16,
  }
});
