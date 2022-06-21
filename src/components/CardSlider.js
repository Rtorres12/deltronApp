import React, { Component,useState,useEffect } from 'react';
import { View, Text,ScrollView,StyleSheet, Dimensions,Image,TouchableOpacity  } from 'react-native';
import { Divider,Flex,Box } from 'native-base';
import database from '@react-native-firebase/database'
import { FlatList } from 'react-native-gesture-handler';



const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

const CardSlider = (props) => {
    const [data, setData] = useState([]);

    console.log(props)

  const getData =() => {
    
    const reference = database().ref('Products');
    reference.once('value',snapshot =>{
    setData(snapshot.val())  
    console.log(data)
      
  })
     } 

     useEffect(() => {

     getData(); 

    }, []); 
    return (
      <View flex={2}>
        <ScrollView >
      <View style={styles.container}>

      <View style={{marginBottom:20}}>
      <Flex  justify='center'  direction='row'>    
      <Divider style={{borderWidth:1,borderColor:'grey',width:'20%'}} my={3} ></Divider>
      <Text style={{textAlign:'center', paddingHorizontal:10, fontSize:18, color:'grey',fontWeight:'bold',width:'60%',fontFamily:'SourceCodePro-Regular' }}>  NUEVOS PRODUCTOS </Text>
      <Divider style={{borderWidth:1,borderColor:'grey',width:'20%'}} my={3} ></Divider>
     
      </Flex> 
      </View>


            {data.map((data,index)=>
            
                    <TouchableOpacity 
                     onPress={()=>{props.navigation.navigation.navigate('Product',{info:data})}}
                    style={styles.card}
                    key={index}>
                        <Image
                        resizeMode='contain'
                        source ={{uri: data.img}}
                        style={styles.cardImg}
                        /> 
                        <Text style={{margin:10}}>{data.name} </Text>
                        <Text style={{fontSize:20,fontWeight:'bold', color:'#4276fa',marginBottom:10}}>S/ {data.price}</Text>
                    </TouchableOpacity >
                    
                 
            )}
           
      </View>
      </ScrollView>
      </View>
    );
 
}
const styles = StyleSheet.create
({
    container :
    {
      flexDirection: 'row',
      flexWrap:'wrap',
      width:'100%',

    },
    slider:{
        position:'relative',
        flexDirection:'row',
     

    },
    card:
    {
        width:WIDTH/3.5,
        height:HEIGHT*0.30,
        borderRadius:10,
        margin: 8,
        backgroundColor:'white',
        alignItems:'center',
    },
    cardImg:
    {
        margin:20,
        width:'100%',
        height:'40%',
    
        
    }
})

export default CardSlider;
