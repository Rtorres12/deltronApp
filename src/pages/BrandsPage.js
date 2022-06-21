import React, { Component,useState,useEffect } from 'react';
import { View, Text,ScrollView,StyleSheet, Dimensions,Image } from 'react-native';
import { Divider,Flex,Box } from 'native-base';
const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;
const product = [
    {
     "Categorie": "Laptops",
     "img":require('../img/categories/categorielaptop.png')
    },
    {
    "Categorie":"Discos Duros",
    "img":require('../img/categories/categorieHardDrive.png')
   },
   {
   "Categorie":"Memorias RAM",
   "img":require('../img/categories/categorieRam.png')
  },
  {
  "Categorie":"Motherboards",
  "img":require('../img/categories/categorieMother.png')
 },
 {
 "Categorie":"Pc Gamer",
 "img":require('../img/categories/categoriePc.png')
},
{
"Categorie":"Tarjetas Graficas",
"img":require('../img/categories/categorieGraphics.png')
}
]

const CategoriesPage=()=> {

    const [data, setData] = useState([]);
    useEffect(() => {
        setData(product)
      }, []); 
    return (
        <View style={styles.container}>
        <View style={{marginBottom:20}}>
      <Flex  justify='center'  direction='row'>    
      <Divider style={{borderWidth:1,borderColor:'grey',width:'20%'}} my={3} ></Divider>
      <Text style={{textAlign:'center', paddingHorizontal:10, fontSize:18, color:'grey',fontWeight:'bold',width:'60%',fontFamily:'SourceCodePro-Regular' }}>  MARCAS </Text>
      <Divider style={{borderWidth:1,borderColor:'grey',width:'20%'}} my={3} ></Divider>
       </Flex> 
      </View>
            {data.map((data,index)=>
            
                    <View
                    style={styles.card}
                    key={index}>
                        <Image
                        resizeMode='contain'
                        source ={data.img}
                        style={styles.cardImg}
                        />
                        <Text style={{margin:10,color:'grey'}}>{data.Categorie} </Text>
                    </View>
                    
                 
            )}
           
      </View>
    )
  }

  const styles = StyleSheet.create
  ({
      container :
      {
        marginTop:20,
        flexDirection: 'row',
        flexWrap:'wrap',
        width:'100%',
        justifyContent:'space-between'
  
      },
      slider:{
          position:'relative',
          flexDirection:'row',
       
  
      },
      card:
      {
          width:WIDTH/3.5,
          height:HEIGHT*0.20,
          borderRadius:10,
          margin: 8,
          backgroundColor:'white',
          justifyContent:'space-between',
          alignItems:'center',
          
      },
      cardImg:
      {
          margin:20,
          width:'100%',
          height:'40%',
      
          
      }
  })
  
  export default CategoriesPage;