import React from 'react';
import { 
  StyleSheet, 
  Text, 
  View,
  TextInput,
  TouchableOpacity
} from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

export default function Form() {
    return (
      <View style={styles.container}>
          <TextInput style={styles.inputbox} 
          underlineColorAndroid='rgba(0,0,0,0)' 
          placeholder="Email Address"
          placeholderTextColor='#3A292A'/>
          <TextInput style={styles.inputbox} 
          underlineColorAndroid='rgba(0,0,0,0)' 
          placeholder="Password"
          placeholderTextColor='#3A292A'
          secureTextEntry/>
          <TouchableOpacity style={styles.button}>
              <Text style={styles.btnTxt}>
                  Login</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.forgotTxt}>Forgot Password?</Text>
          </TouchableOpacity>
      </View>
    );
  }

  const styles= StyleSheet.create({
    container: {
      flexGrow: 1,
      justifyContent:'center',
      alignItems:'center'
    },
    inputbox:{
      width:300,
      height:40,
      backgroundColor:'#fff',
      borderRadius:25,
      paddingHorizontal:16,
      fontSize:16,
      color:'#3A292A',
      elevation:5,
      shadowColor:'#000',
      shadowOffset:{
        width:1,
        height:1,
      },
      shadowRadius:100,
      marginVertical:10,
      marginHorizontal:10,
    },
    btnTxt:{
      fontSize:20,
      fontWeight:'500',
      color:'#ffffff',
      textAlign:'center'
    },
    button:{
      backgroundColor:'#3A292A',   
      borderRadius:25,
      width:200,
      marginVertical:10,
      paddingVertical:12,
      elevation:5,
      shadowColor:'#000',
      shadowOffset:{
        width:1,
        height:1,
      },
      shadowRadius:100,
      marginVertical:10,
      marginHorizontal:10,
    },
    forgotTxt:{
      color: '#3A292A',
      fontSize:16,
    }
  });