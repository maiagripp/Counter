import React, { Component } from 'react';
import { Text, View, Button } from 'react-native';
import styles from './styles';

class Counter extends Component {
  state = {
    counter: 0,
  };
  render() {
    return (
      <View style={styles.view}>
        <Text style={styles.text}> {this.state.counter} </Text>
        <Button
          title="+"
          onPress={() => {
            this.setState({ counter: this.state.counter + 1 });
          }}
        />

        <Button
          color="#a83232"
          title="-"
          onPress={() => {
            this.setState({ counter: this.state.counter - 1 });
          }}
        />
        <Button
          color="#c3c3c3"
          title="Reset"
          onPress={() => {
            this.setState({ counter: 0 });
          }}
        />
      </View>
    );
  }
}

const App = () => {
  return (
    <View>
      <Counter />
    </View>
  );
};

export default App;
