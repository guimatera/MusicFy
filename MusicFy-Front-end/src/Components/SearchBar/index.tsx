import React from "react";

import { StyleSheet, Text, View, Image, Touchable, TouchableOpacity} from "react-native";
import { AntDesign } from '@expo/vector-icons';
import { TextInput } from "react-native-gesture-handler";

import { SearchBox, SearchIcon, SearchText } from './style'

export default function SearchBar(){
    return(
        <SearchBox>
            <SearchText placeholder = "Digite artista, música ou trecho de música" 
            placeholderTextColor = "#c0c0c0"/>
                <SearchIcon activeOpacity={0.3}>
                    <AntDesign name="search1" size={25} color="#F0F0F0" />
                </SearchIcon>
        </SearchBox>
    )
}