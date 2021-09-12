import React from 'react';
//import { StatusBar } from 'expo-status-bar';
import { 
  StyleSheet, 
  Text, 
  View,
  StatusBar
} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import LoadingScreen from './app/Screens/LoadingScreen';
import Login from "./app/Screens/LoginScreen";
import WelcomeScreen from './app/Screens/WelcomeScreen';
import SelectScreen from './app/Screens/SelectScreen';
import CustReg from './app/Screens/CustReg';
import MerchantReg from './app/Screens/MerchantReg';
import ShopReg from './app/Screens/ShopReg';

const AppStack= createStackNavigator();

const App=()=>{
  return (
    <NavigationContainer>
      <AppStack.Navigator
       headerMode="none">
          <AppStack.Screen name="WelcomeScreen" component={WelcomeScreen}/>
          <AppStack.Screen name="Login" component={Login}/>
          <AppStack.Screen name="SelectScreen" component={SelectScreen}/>
          <AppStack.Screen name="CustReg" component={CustReg}/>
          <AppStack.Screen name="MerchantReg" component={MerchantReg}/>
          <AppStack.Screen name="ShopReg" component={ShopReg}/>
      </AppStack.Navigator>
    </NavigationContainer>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:"#EFE5DA",
    //alignItems:"center",
    //justifyContent:"center"
    paddingTop: Platform.OS === 'android'? StatusBar.currentHeight : 0,
  },
});
