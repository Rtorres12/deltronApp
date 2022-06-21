import React from "react";
import {View,Image,StyleSheet} from "react-native"
import {Heading,HStack,Text,ScrollView} from "native-base"
const AboutUsPage = () =>
{
    return(
        <ScrollView>
    <HStack style={styles.container}>

     <View   h="40" w="20" bg="primary.300" rounded="md" shadow={3}>
         <Heading style={styles.heading} size="lg">¿Quienes Somos?</Heading>
         <Text style={styles.text}>Grupo Deltron S.A. es una empresa peruana fabricante de computadoras y comerciante mayorista de equipos de cómputo, componentes, suministros y periféricos que se ha consolidado como líder del mercado de la tecnología de la información en nuestro país.
                La privilegiada posición de liderazgo que ocupa Grupo Deltron responde a una adecuada interpretación de las demandas de tecnología informática del consumidor nacional, pero también a una exitosa gestión que ha contemplado como prioritario el constante mejoramiento de sus procesos y servicios.
          </Text>
          <Heading style={styles.heading} size="lg">Vision</Heading>
          <Text style={styles.textvision}>"Orientar el mercado informático hacia productos de calidad para contribuir al desarrollo de la región andina con el apoyo de nuestros clientes y proveedores, brindando un servicio de excelencia". </Text>
   
          <Heading style={styles.heading} size="lg">Misión</Heading>
          <Text style={styles.textvision}>"Lideramos el sector informático peruano y buscamos exceder las expectativas de nuestros clientes en los servicios de Comercialización y Post Venta dentro de un ambiente que propicia el trabajo en equipo y la realización de nuestro personal.
          </Text>
   
     
     </View>
     <View   h="40" w="20" bg="red"  >
     <Image
          source={require('../img/banner/aboutus.jpg')}

          />
     </View>
    </HStack>
    </ScrollView>
   
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"space-around",
        padding:20,
        margin:15
    },
    heading:{
        color:'#345dc7',
    },
    text:{
        textAlign:"left",
        flexWrap:'wrap',
        width:200
        
    },
    textvision:{
        textAlign:"left",
        width:200

    }

})
export default AboutUsPage;