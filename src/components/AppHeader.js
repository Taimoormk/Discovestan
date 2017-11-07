// ########## Import Dependencies Here ##########
import React, { Component } from 'react';
import { Text } from 'react-native';
import { Content , Body, Title, Header, Left, Button, Icon, Right } from 'native-base';

// ########## Import Screens Here ##########

// ########## Import Components Here ##########

export default class AppHeader extends Component {
  render() {
    return (
      <Container>
        <Header>
          <Left>
            <Button transparent>
              <Icon name='arrow-back' />
            </Button>
          </Left>
          <Body>
            <Title>Header</Title>
          </Body>
          <Right>
            <Button transparent>
              <Text>Cancel</Text>
            </Button>
          </Right>
        </Header>
      </Container>
    );
  }
}
