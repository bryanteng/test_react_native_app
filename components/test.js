import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, Button, ScrollView} from 'react-native';

type Props = {};

export default class Test extends Component<Props> {

  state={
    text:"",
    players:[],
    done:false
  }

  handleChange = (event) =>{
    this.setState({ text: event})
  }

  handleOnPress = () => {
    this.setState({players: [...this.state.players, this.state.text], text:''})
  }

  handleSamplePress = () =>{
    this.setState({players: sample(this.state.players), done:true})
  }

  handleResetPress = () =>{
    this.setState({players: [], done:false})
  }

  render() {
    return (
      <View style={styles.container}>
        {this.state.done ? <Text style={styles.welcome}>Its CAMBIO'clock!</Text> : <Text style={styles.welcome}>Who's playing?</Text>}
        {this.state.players ? this.state.players.map(player => <Text>{player}</Text>) : null}
        {this.state.done ? null :
          <View style={styles.welcome}>
          <TextInput type="text" onChangeText={this.handleChange} id="text" value={this.state.text} placeholder="player name"></TextInput>
          <Button onPress={this.handleOnPress} title="add player"  />
          </View>
        }
        {this.state.done ? <Button onPress={this.handleSamplePress} title="reroll" /> : <Button onPress={this.handleSamplePress} title="done" />}
        {this.state.done ? <Button onPress={this.handleResetPress} title="reset" /> : null}
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
    alignItems: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

function sample(array){
	let temp = [...array]
    let new_array = []
    let array_length = temp.length
    for( i=0; i < temp.length; i++){
		let rand = Math.floor(Math.random()* array_length)
        new_array.push(temp.splice(rand,1))
        array_length--
    }
	new_array.push(temp)
  return new_array.flat()
}
