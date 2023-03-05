import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import  Header  from '../../Components/Header/index';
import  SearchBox  from '../../Components/SearchBar/index';
import  HomeRow  from '../../Components/HomeRow/index';
import TabBar from '../../Components/TabBar';

import { HomeBackground, SearchContainer,  RowTitle } from './style'



export default function HomePage() {
  return (
    <HomeBackground>
    	<Header></Header> 
    	<SearchContainer>
    		<SearchBox></SearchBox>
    	</SearchContainer>
		<RowTitle> Artistas do Momento</RowTitle>
      	<HomeRow></HomeRow>
		<RowTitle>Recomendados Para Você</RowTitle>
		<HomeRow></HomeRow>
		<TabBar></TabBar>
    </HomeBackground> 
  );
}

