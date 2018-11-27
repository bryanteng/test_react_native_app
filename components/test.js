import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, Button, FlatList} from 'react-native';

type Props = {};

export default class Test extends Component<Props> {

  state={
    text:"placeholder"
  }

  handleChange = (event) =>{
    this.setState({ text: event})
  }

  handleOnPress = () => {
    console.log(this.props)
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>This is test component</Text>
        <TextInput type="text" onChangeText={this.handleChange} id="text" value={this.state.text}></TextInput>
        <Button onPress={this.handleOnPress} title="Click Me"  />
        <FlatList
          data={[1,2,3,4,5]}
          renderItem={({item}) => <Text>{item}</Text>}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
