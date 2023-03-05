import styled from 'styled-components';
import { StyleSheet } from 'react-native';

import {getStatusBarHeight} from "react-native-iphone-x-helper"

export const TabBarContainer =  styled.view `
    width: 100%;
    height: 12%;
    margin-top: 2%;
    padding-top: 2%;
    padding-bottom: 2%;
    background-color: #C899A5;
    align: center;
    flex-direction: row;
    display: flex;
    justify-content: space-evenly;
`

export const TabIcons =  styled.view `
    background: #942743;
    border-radius: 15px;
    width: 70;
    height: 70;
    align-items: center;
    flex-direction: row;
    display: flex;
    justify-content: space-around;
`

export const TabPressedIcon =  styled.view `
    background: #B46D7F;
    border-radius: 15px;
    width: 70;
    height: 70;
    align-items: center;
    flex-direction: row;
    display: flex;
    justify-content: center;
`



