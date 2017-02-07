/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  Button,
  StyleSheet,
  Text,
  TextInput,
  View
} from 'react-native';

export default class AwesomeProject extends Component {
  constructor(props) {
  super(props);
  this.state = {
    show: false,
    data: {
      Nama: '',
      Asal: '',
      },
    };
  }
  render() {
    return (
      <View>
        <Text style={{backgroundColor:'#000000',textAlign:'center', fontSize: 40,color:'#ffffff',}}>
          Belajar React
        </Text>
        <TextInput
        placeholder="Nama"
        style={{height: 40, width: 360, marginBottom: 10,}}/>

        <TextInput
        placeholder="Asal"
        style={{height: 40, width: 360, marginBottom: 10,}}/>

        <Button
        title="SIMPAN"
        color="#000000"
        accessibilityLabel="Learn more about this purple button"
        />

        <Text style={{fontSize:20,color:'#000000',marginTop:30,}}>
          Nama : .............
        </Text>
        <Text style={{fontSize:20,color:'#000000',marginTop:20,}}>
          Asal : ................
        </Text>
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
    fontSize: 30,
    marginBottom: 50,
  },
  instructions: {
    color: '#333333',
    marginTop: 20,
  },
});

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
