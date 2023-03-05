import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

import { FontAwesome } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';


import { TabBarContainer, TabIcons, TabPressedIcon } from "./style";

export default function TabBar(){
    return(
     <TabBarContainer>
        <TabIcons>
        <FontAwesome name="star-o" size={40} color="#F0F0F0" />
        </TabIcons>
        <TabPressedIcon>
            <FontAwesome name="home" size={40} color="#F0F0F0" />
        </TabPressedIcon>
        <TabIcons>
            <FontAwesome5 name="music" size={35} color="#F0F0F0" />
        </TabIcons>
     </TabBarContainer>
    )
}