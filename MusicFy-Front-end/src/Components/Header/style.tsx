import styled from 'styled-components';
import { StyleSheet } from 'react-native';

import {getStatusBarHeight} from "react-native-iphone-x-helper"

export const styles = StyleSheet.create({
    Container: {
        marginTop: getStatusBarHeight()
    }     
})

export const Container =  styled.view ``


export const Page =  styled.view `
    padding-vertical: 8%;
    background-color: #9A344E;
    width: 100% ;
    height: auto;
    align-items: center;
    `

export const Title = styled.text `
    font-family: Rock-Salt;
    font-weight: Regular;
    font-size: 32;
    align: center;
    color: #F0F0F0;
    ` 

export const Banner = styled.view `
        top: -10%;
        background-color: #9A344E
        width: 100%;
        height: auto;
        align-items: center;
        flex-direction: row;
        display: flex;
        justify-content: space-around;
        border-radius: 5;
        `
