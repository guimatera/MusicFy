import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

import {Page, Banner, Title, Container, styles} from './style'

export default function Header(){
    return(
        <Container style={styles.Container}>
        <Page>
            <Title> Musicfy </Title>
        </Page>
        <Banner>
            <Image
                style={{ width: 116, height: 89}}
                source={require('./../../../assets/macaco.png')} />
            <Image
                style={{ width: 116, height: 89}}
                source={require('./../../../assets/led zeppelin.png')} />
        </Banner>
        </Container>
    )
}


