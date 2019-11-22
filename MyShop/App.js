/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    TabBarIOS,
    NavigatorIOS,
    Image
} from 'react-native';

// 引入外部的组件(此处注意是相当于了项目根目录)
var Home = require('./src/pages/Home/Home');
var Message = require('./src/pages/Message/Message');
var Find = require('./src/pages/Find/Find');
var Mine = require('./src/pages/Mine/Mine');

export default class App extends Component{
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 'redTab',
      hidden: false,
      fullScreen: false,
    };
  }
  




  render(){
    return (
     <Text>罗志辉，你好！</Text>
    );
      
  }


}
