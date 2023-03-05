import React from "react";

import { StyleSheet, Text, View, Image, Touchable, TouchableOpacity} from "react-native";
import { AntDesign } from '@expo/vector-icons';
import { ScrollView, TextInput } from "react-native-gesture-handler";

import { ImageContainer, ArtistTitle } from './style'

export default function HomeRow(){
    return(
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <ImageContainer>
                <TouchableOpacity>
                    <Image 
                    style={{ width: 70, height: 70}}
                    source={require("./../../../assets/dua-lipa.png")}></Image>
                </TouchableOpacity>
                <ArtistTitle>Dua Lipa</ArtistTitle>
            </ImageContainer>
            <ImageContainer>
                <TouchableOpacity>
                    <Image 
                    style={{ width: 70, height: 70}}
                    source={require("./../../../assets/justin-bieber.png")}></Image>
                    </TouchableOpacity>
                <ArtistTitle>Justin Bieber</ArtistTitle>
            </ImageContainer>
            <ImageContainer>
                <TouchableOpacity>
                    <Image 
                    style={{ width: 70, height: 70}}
                    source={require("./../../../assets/coldplay.png")}></Image> 
                    </TouchableOpacity>
                <ArtistTitle>Coldplay</ArtistTitle>
            </ImageContainer>
            <ImageContainer>
                <TouchableOpacity>
                    <Image 
                    style={{ width: 70, height: 70}}
                    source={require("./../../../assets/iron-maiden.png")}></Image>
                </TouchableOpacity>
                <ArtistTitle>Iron Maiden</ArtistTitle>
            </ImageContainer>
            <ImageContainer>
                <TouchableOpacity>
                    <Image 
                    style={{ width: 70, height: 70}}
                    source={require("./../../../assets/green-day.png")}></Image>
                </TouchableOpacity>
                <ArtistTitle>Green Day</ArtistTitle>
            </ImageContainer>
            <ImageContainer>
                <TouchableOpacity>
                    <Image 
                    style={{ width: 70, height: 70}}
                    source={require("./../../../assets/guns-n-roses.png")}></Image>
                </TouchableOpacity>
                <ArtistTitle>Guns n' Roses </ArtistTitle>
            </ImageContainer>
        </ScrollView>
    )
}