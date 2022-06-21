import React from 'react';
import { StyleSheet, Text,View,Button, SafeAreaView,Image,ScrollView,Linking } from 'react-native';


const ProductPage=(props)=> {

    const openWhatsApp = (msg) => {
        let mobile = '986394402';
        if (mobile) {
          if (msg) {
            let url =
              "whatsapp://send?text=" +
              msg+
              "&phone=51" +
              mobile;
            Linking.openURL(url)
              .then(data => {
                console.log("WhatsApp Opened successfully " + data);
              })
              .catch(() => {
                alert("Whatssapp no se encuentra instalado en este dispositivo");
              });
          } 
        }
      };

    console.log(props.route.params.info)
    return (
      <SafeAreaView style={{margin:20,flex:1, justifyContent:'flex-start'}} >
        <ScrollView>
        <View style={styles.title}>
                  <Text style={styles.text}>{props.route.params.info.brand}</Text>
                  <Text style={styles.text2}>{props.route.params.info.name}</Text>
        </View>
        <View style={{  justifyContent: 'flex-end',
    alignItems: 'flex-start',}}>
        <Image
                         resizeMode='contain'
                        source ={{uri: props.route.params.info.img}}
                        style={styles.cardImg}
                        />  
        </View>
        <View style={styles.description}>
        <Text style={styles.text3}>{props.route.params.info.description}</Text>
        <Text style={{fontSize:30,fontWeight:'bold', color:'#4276fa',marginBottom:10,textAlign:'center'}}>S/{props.route.params.info.price}</Text>

        </View>
        <Button
        title="Comprar"
        onPress={()=> openWhatsApp( '!Hola¡, estoy interesado en: '+ props.route.params.info.name)}
      />
        </ScrollView>
      </SafeAreaView>
    );
  }
  const styles = StyleSheet.create({
    title:{
    },
    text: {
      fontSize:14,
      color:'black',
      marginHorizontal:10,
    },
    text2:{
        fontSize:22,
        color:'black',
        marginHorizontal:10,
    },
    text3:{
        fontSize:16,
        color:'black',
        marginHorizontal:10,
        width:'70%'
    },
    
    cardImg:
    {
        
        margin:20,
        width:300,
        height:200,        
    },
    description:
    {
        flex:1,
        flexDirection:'row',
        flexWrap:'wrap'
    }
    
     
  });

  export default ProductPage;