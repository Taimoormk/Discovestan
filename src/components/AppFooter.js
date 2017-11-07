// ########## Import Dependencies Here ##########
import React, { Component } from 'react';
import { Text, StyleSheet } from 'react-native';
import { Container, Footer, FooterTab, Button, Icon } from 'native-base';
import { Actions } from 'react-native-router-flux';

// ########## Import Screens Here ##########

// ########## Import Components Here ##########

export default class AppFooter extends Component {

    constructor(){
        super()
        this.state = {
            activeTabName: 'home'
        };
    }

    tabAction(tab) {
        this.setState({activeTabName: tab})
        if (tab === 'home') {
            Actions.home();
        } else if (tab === 'register') {
            Actions.register();
        } else {
            Actions.contact();
        }
    }

    render() {
        return (
            <Container>
                <Footer>
                    <FooterTab>
                        <Button vertical active={(this.state.activeTabName === 'home') ? true : ""} onPress={() => {this.tabAction('home')}}>
                            <Icon active={(this.state.activeTabName === 'home') ? true : ""} name="apps" />
                            <Text>Feed</Text>
                        </Button>
                        <Button vertical active={(this.state.activeTabName === 'register') ? true : ""} onPress={() => {this.tabAction('register')}}>
                            <Icon active name="navigate" />
                            <Text>Register</Text>
                        </Button>
                        <Button vertical active={(this.state.activeTabName === 'contact') ? true : ""} onPress={() => {this.tabAction('contact')}}>
                            <Icon name="person" />
                            <Text>Contact</Text>
                        </Button>
                    </FooterTab>
                </Footer>
            </Container>
        );
    }
}
