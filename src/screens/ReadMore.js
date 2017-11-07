// ########## Import Dependencies Here ##########
import React, { Component } from 'react';
import { Text, Image } from 'react-native';
import { Container } from 'native-base';
import HTMLView from 'react-native-htmlview';

// ########## Import Screens Here ##########

// ########## Import Components Here ##########
import { articles, articleData } from '../components/AppBodyData.js';

export default class AppHeader extends Component {
    render() {
        return (
            <Container>
                <HTMLView value={articleData.content.rendered} />
            </Container>
        );
    }
}
