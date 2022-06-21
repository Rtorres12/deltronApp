import { DrawerContentScrollView,DrawerItem } from '@react-navigation/drawer';
import {View, StyleSheet,Image,Text} from 'react-native';
import { Input } from 'native-base';
import Icon from 'react-native-vector-icons/Ionicons';
import React, { useState } from 'react';

const itemText = (itemcolor,text) =>{
   
   return( <Text style={{ fontFamily:'NeueMontreal-Regular', color:itemcolor }}>{text}</Text>)
}
export  function DrawerContent(props,navigation){
    const [search, setSearch] = useState("");



    return (
        <View style={styles.header}>
            <DrawerContentScrollView style={styles.navigation} {...props}>
                    
                    <Image 
                        source={require('../img/icon/logo.png')}>
                    </Image>

                    <Input  margin='3' mx="3" color={'white'}  onChangeText={(e)=>setSearch(e)} placeholder="Buscar" w="75%" InputRightElement={(<Icon onPress={()=>{props.navigation.navigate('Search',{text:search})}} name="search-outline" style={{marginEnd:10}} size={25} color="white" />)} maxWidth="300px" />
             
                    <DrawerItem label={({}) => itemText('white','Home')} onPress={()=>{props.navigation.navigate('Home')}}/>
                    <DrawerItem label={({}) => itemText('white','Sobre nosotros')} onPress={()=>{props.navigation.navigate('About')}}/>
                    <DrawerItem label={({}) => itemText('white','Categorias')} onPress={()=>{props.navigation.navigate('Categories')}}/>
                    <DrawerItem label={({}) => itemText('white','Marcas')} onPress={()=>{props.navigation.navigate('Brands')}}/>

            </DrawerContentScrollView>
        </View>

        );
  
}

const styles = StyleSheet.create(
    {
        navigation:{
            backgroundColor: '#4276fa',
            color:'white'
        },
        header:{
            flex:1,
            backgroundColor:"white",
            color:"white"
        }

    }
)
