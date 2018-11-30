import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView, Button} from 'react-native';
import { Table, Row, Rows } from 'react-native-table-component';

type Props = {}
export default class ScoreTable extends Component<Props>{
  constructor(Props){
    super(Props)
    this.state={
      tableHead: ["", ...Props.players],
      tableData: []
    }
  }


  render(){
    console.log(this.props.players)
    const state = this.state;
    const tableData = [];
    const widthArr= []
    for (let i = 0; i < state.tableHead.length; i += 1) {
      const rowData = [];
      widthArr.push(60)
      for (let j = 0; j < state.tableHead.length; j += 1) {
        rowData.push(`${i}${j}`);
      }
      tableData.push(rowData);
    }

    return(
      <View>
        {this.props.players ? <ScrollView horizontal={true}>
          <View>
            <Table borderStyle={{borderColor: '#C1C0B9'}}>
              <Row data={state.tableHead} style={styles.header} widthArr={widthArr} textStyle={styles.text}/>
            </Table>
            <ScrollView style={styles.dataWrapper}>
              <Table borderStyle={{borderColor: '#C1C0B9'}}>
                {
                  tableData.map((rowData, index) => (
                    <Row
                      key={index}
                      data={rowData}
                      widthArr={widthArr}
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
      <Button onPress={this.handleOnPress} title="click for row"/>
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
