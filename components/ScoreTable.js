import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView, Button, TextInput} from 'react-native';
import { Table, Row, Rows } from 'react-native-table-component';

type Props = {}
export default class ScoreTable extends Component<Props>{
  constructor(Props){
    super(Props)
    this.state={
      tableHead: ["", ...Props.players],
      widthArr: [],
      tableData: []
    }
  }

  componentDidMount(){
    let textInput = <TextInput type="text" id="text" textAlign={'center'}>0</TextInput>
    this.setState({widthArr: this.state.tableHead.map(name => name.length < 6 ? 60 : name.length*10), tableData: [this.state.tableHead.map(name => textInput)] })
  }

  addRow = () =>{
    let textInput = <TextInput type="text" id="text" textAlign={'center'} >0</TextInput>
    let empty_row = this.state.widthArr.map(cell => textInput)
    this.setState({tableData: [...this.state.tableData, empty_row]})
  }

  render(){
    console.log(this.props.players)
    const state = this.state;

    return(
      <View>
        {this.props.players ? <ScrollView horizontal={true}>
          <View>
          <Button onPress={this.addRow} title="click to add row"/>
            <Table borderStyle={{borderColor: '#C1C0B9'}}>
              <Row data={state.tableHead} style={styles.header} widthArr={state.widthArr} textStyle={styles.text}/>
            </Table>
            <ScrollView style={styles.dataWrapper}>
              <Table borderStyle={{borderColor: '#C1C0B9'}}>
                {
                  state.tableData.map((rowData, index) => (
                    <Row
                      key={index}
                      data={[`${index}`,[...rowData.slice(1)]].flat()}
                      widthArr={state.widthArr}
                      style={[styles.row, index%2 && {backgroundColor: '#F7F6E7'}]}
                      textStyle={styles.text}
                    />
                  ))
                }
              </Table>
            </ScrollView>
          </View>
        </ScrollView> :
      null }
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, paddingTop: 30, backgroundColor: '#fff' },
  header: { height: 50, backgroundColor: '#537791' },
  text: { textAlign: 'center', fontWeight: '100' },
  dataWrapper: { marginTop: -1 },
  row: { height: 40, backgroundColor: '#E7E6E1' }
});
