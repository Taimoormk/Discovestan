// ########## Import Dependencies Here ##########
import React, { Component } from 'react';
import { Text, View, Image, StyleSheet, Dimensions } from 'react-native';
import { Container, Header, Content, Card, CardItem, Left, Thumbnail, Body, Button, Icon, Right } from 'native-base';

// ########## Import Screens Here ##########

// ########## Import Components Here ##########
import AppBodyData from './AppBodyData.js';

export default class AppBody extends Component {

  constructor() {
    super()
    this.state = {
      data: []
    }
  }

  getData() {
    return fetch('https://vint.azurewebsites.net/wp-json/wp/v2/posts')
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({ data: responseJson }, () => console.log(this.state.data));
      })
      .catch((error) => {
        console.error(error);
      });
  }

  componentDidMount() {
    this.getData();
  }

  render() {
    return (
      // <Container style={{
        // marginTop: 60
      // }}>
        <AppBodyData data={this.state.data} />
      // </Container>
    );
  }
}
