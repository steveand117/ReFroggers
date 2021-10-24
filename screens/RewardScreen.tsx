import * as React from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types';
import { StyleSheet, Text, View, ImageBackground, Image, TouchableOpacity, Alert, TextInput, Pressable, Button } from 'react-native';

export default function RewardScreen({navigation} : NativeStackScreenProps<RootStackParamList>) {
    const cancelPressed = ()=> {
        navigation.navigate('TabOne');
      }
      const continuePressed = ()=> {
        navigation.navigate('TabThree');
      }
    return (
      <ImageBackground
        source={require('../assets/images/background.png')}
        style={styles.background}
        >
      <View style={styles.container}>
        <Text style={styles.title}>you earned:</Text>
        <Text style={styles.title}>5 Frogecoin</Text>
        <TouchableOpacity onPress={continuePressed} style={styles.button}>
            <Text style= {styles.buttonText}>scan something else!</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={cancelPressed} style={styles.subButton}>
            <Text style= {styles.buttonText}>home</Text>
      </TouchableOpacity>
        {/* <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" /> */}
        {/* Use a light status bar on iOS to account for the black space above the modal
        <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} /> */}
      </View>
      </ImageBackground>
    );
  }

  const styles = StyleSheet.create({ 
    background: {
      width: '100%',
      height: '100%',
      color: "#E3FCAE"
    }, 
    container: {
      width: '100%',
      height: '100%',
      alignItems: 'center',
    },
    title:{
      color: '#42A840',
      width: "100%",
      textAlign: 'center',
      fontWeight: 'bold',
      marginLeft: '2%',
      fontSize:  20,
      fontFamily: 'press-start',
      marginTop: '15%',
    },
    subtitle:{
        fontSize: 18,
        lineHeight: 18,
        textAlign: 'center',
        color: '#8FC320'
    },
    bruh: {
      fontSize: 40,
      fontWeight: '900'
    },
    frog: {
      width: 200,
      height: 200,
      marginTop: '5%'
    },
    rando: {
     color: '#42A840',
     borderRadius: 25,
     textAlign: 'center',
     fontWeight: 'bold',
     marginRight: '2%',
     fontSize:  12,
     fontFamily: 'press-start'
    },
    button: {
      backgroundColor: '#42A840',
      width: "70%",
      borderRadius: 10,
      padding: 13,
      fontSize:  27,
      marginTop: '4%',
      fontFamily: 'press-start',
    },
    subButton: {
        backgroundColor: 'rgba(66, 168, 64, 0.5)',
        width: "50%",
        borderRadius: 10,
        padding: 13,
        fontSize:  27,
        marginTop: '4%',
        fontFamily: 'press-start'
      },
    buttonText: {
      color: 'white',
      fontSize:  12,
      fontFamily: 'press-start',
      alignSelf: 'center'
    },
    
    logo:{
      width: 100,
      height: 100,
      marginTop: '5%'
    }
});
