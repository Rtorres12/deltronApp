import React from 'react';
import { View, StyleSheet,Image} from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import AboutUsPage from './AboutUsPage';
import HomePage from './HomePage';
import { createStackNavigator } from '@react-navigation/stack';
import { DrawerContent } from '../components/DrawerContent';
import CategoriesPage from '../pages/CategoriesPage';
import BrandsPage from '../pages/BrandsPage';
import SearchPage from './SearchPage';
import ProductPage from './ProductPage';
const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();
function LogoTitle() {
  return (
    <View style={styles.title}>
   
    <Image
    style={styles.logo}
  source={require('../img/icon/logo.png')}
  />
  </View>
  )
  
  ;
}
const NavigationPage = ()=>
{
    return(
        <Drawer.Navigator initialRouteName='Home' drawerContent={(props) => <DrawerContent {...props}/>}  >
          
        <Stack.Screen options={{headerTitleAlign:'center', headerStyle:styles.header, headerTitle:(props=><LogoTitle {...props}></LogoTitle> )}} name="About"   component={AboutUsPage}/>
        <Stack.Screen options={{headerTitleAlign:'center', headerStyle:styles.header,headerTitle:(props=><LogoTitle {...props}></LogoTitle> )}} name="Home" component={(HomePage)} />
        <Stack.Screen options={{headerTitleAlign:'center', headerStyle:styles.header,headerTitle:(props=><LogoTitle {...props}></LogoTitle> )}} name="Categories" component={(CategoriesPage)} />
        <Stack.Screen options={{headerTitleAlign:'center', headerStyle:styles.header,headerTitle:(props=><LogoTitle {...props}></LogoTitle> )}} name="Brands" component={(BrandsPage)} />
        <Stack.Screen options={{headerTitleAlign:'center', headerStyle:styles.header,headerTitle:(props=><LogoTitle {...props}></LogoTitle> )}} name="Search" component={(SearchPage)} />
        <Stack.Screen options={{headerTitleAlign:'center', headerStyle:styles.header,headerTitle:(props=><LogoTitle {...props}></LogoTitle> )}} name="Product" component={(ProductPage)} />

        </Drawer.Navigator>
    )
}
export default NavigationPage

const styles = StyleSheet.create({
  header:{
    backgroundColor:"#4276fa",

  },
  logo:
  {

      width:165,
      height:60,            
      resizeMode: 'stretch',
  },
  title:{
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection:'row',
  }
   
});

//component={()=>{
  //  <Stack.Navigator>
     //   <Stack.Screen name="Home" component={HomePage}/>
       // <Stack.Screen name="Sobre Nosotros" component={AboutUsPage} />
   // </Stack.Navigator>