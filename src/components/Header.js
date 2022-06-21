import React, { Component } from 'react';
import { View, Text, StyleSheet ,Image,Dimensions} from 'react-native';
const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

const Header = () => {

    return (
      <View style={styles.header}>
       
          <Image
            style={styles.logo}
          source={require('../img/icon/logo.png')}
          />
      </View>
    )
}
const styles= StyleSheet.create
(
    {
        header:{
            backgroundColor:'#4276fa',
            height:'10%',
            width:'100%',
            justifyContent:'flex-end',
 
            flexDirection:'row'
        },
        title:
        {
           fontFamily:'serif'
        },
        logo:
        {
            marginTop:10,
            width:165,
            height:60,            
            resizeMode: 'stretch',
        }
    }
)
export default Header;