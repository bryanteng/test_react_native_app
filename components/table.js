import React, { Component } from 'react';
import { StyleSheet, Text, View} from 'react-native';

type Props = {}
export default class Table extends Component<props>{

  render(){
    console.log(this.props.players)
    return(
      <View>
        <Text> HI </Text>
      </View>
    )
  }
}
