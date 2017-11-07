// ########## Import Dependencies Here ##########
import React, { Component } from 'react';
import { View } from 'react-native';
import { Container, Footer } from 'native-base';
import { Router, Scene, Stack } from 'react-native-router-flux';

// ########## Import Screens Here ##########
import Register from './src/screens/Register.js';
import Contact from './src/screens/Contact.js';
import ReadMore from './src/screens/ReadMore.js';

// ########## Import Components Here ##########
import AppHeader from './src/components/AppHeader.js';
import AppBody from './src/components/AppBody.js';
import AppFooter from './src/components/AppFooter.js';

export default class App extends Component {
  render() {
    return (
      <Container>
        <Router>
          <Stack key="root">
            <Scene key="home" component={AppBody} title='Discovestan' />
            <Scene key="register" component={Register} title='Register' />
            <Scene key="contact" component={Contact} title='Contact' />
            <Scene key="readmore" component={ReadMore} title='Read More' />
          </Stack>
        </Router>
        <Footer>
          <AppFooter />
        </Footer>
      </Container>
    );
  }
}
