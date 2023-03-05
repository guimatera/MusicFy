import styled from 'styled-components';
import { StyleSheet } from 'react-native';

import {getStatusBarHeight} from "react-native-iphone-x-helper"

export const ImageContainer =  styled.view`
    margin-left: 5%;
    margin-top: 5%;
    margin-bottom:5%;
    align-items: center;
    display: flex;
    justify-content: space-evenly;
`
export const ArtistTitle =  styled.text`
    font-family: Roboto;
    font-weight: Regular;
    font-size: 14;
    align: Left;
    color: #F0F0F0;
    margin-top: 5%;
    margin-bottom: 5%;
`