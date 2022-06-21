import React from 'react';
import { StyleSheet, Text, View,Button, SafeAreaView } from 'react-native';
import Header from '../components/Header';
import Carousel from '../components/Carousel';
import CardSlider from '../components/CardSlider';

const HomePage=(props)=> {
    return (
      <SafeAreaView style={styles.container}>
        <Carousel/>
        <CardSlider navigation={props}/>
  
  
      </SafeAreaView>
    );
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      position:'relative'
    },
     
  });
  export default HomePage;