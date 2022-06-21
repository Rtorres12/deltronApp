import React from 'react';
import 'react-native-gesture-handler';
import { StyleSheet, Text, View,Button, SafeAreaView } from 'react-native';
import HomePage from './src/pages/HomePage';
import AboutUsPage from './src/pages/AboutUsPage';
import NavigationPage from './src/pages/NavigationPage';
import {NativeBaseProvider} from 'native-base';
import { NavigationContainer } from '@react-navigation/native';

export default function App() {
  return (
    <NavigationContainer>
         <NativeBaseProvider>
     
            <NavigationPage></NavigationPage>
     
     </NativeBaseProvider>
     </NavigationContainer>
 

  );
}


