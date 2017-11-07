// ########## Import Dependencies Here ##########
import React, { Component } from 'react';
import { Text, View, Image, StyleSheet, ScrollView } from 'react-native';
import { Content, Container, Card, CardItem, Left, Thumbnail, Body, Right, Button, Icon } from 'native-base';
import HTMLView from 'react-native-htmlview';
import { Actions } from 'react-native-router-flux';

// ########## Import Screens Here ##########

// ########## Import Components Here ##########

export default class AppBodyData extends Component {
    render() {

        let articles = this.props.data.map(function (articleData, index) {
            return (
                <Card>
                    <CardItem>
                        <Left>
                            <Thumbnail source={require('../img/VintHub.png')} />
                            <Body>
                                <Text>{articleData.title.rendered}</Text>
                                <Text note>{articleData.date}</Text>
                            </Body>
                        </Left>
                    </CardItem>
                    <CardItem>
                        <Body>
                            <Image source={require('../img/world.jpg')} style={{
                                width: 330, height: 150
                            }}/>
                            <HTMLView value={articleData.excerpt.rendered} />
                        </Body>
                    </CardItem>
                    <CardItem>
                        <Left>
                            <Button transparent onPress={Actions.readmore} textStyle={{ color: '#87838B' }}>
                                <Text>Read more...</Text>
                            </Button>
                        </Left>
                    </CardItem>
                </Card>
            )
        });

        return (
            <View>
                {articles}
            </View>

        );
    }
}
