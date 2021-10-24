import * as React from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types';
import { StyleSheet, Text, View, ImageBackground, Image, TouchableOpacity, Alert, TextInput, Pressable, Button } from 'react-native';

export default function InfoScreen({navigation} : NativeStackScreenProps<RootStackParamList>) {
  const backPressed = ()=> {
    navigation.navigate('TabOne');
  }
    const cancelPressed = ()=> {
        navigation.navigate('TabOne');
      }
      const continuePressed = ()=> {
        navigation.navigate('Submit');
      }
    return (
      <ImageBackground
        source={require('../assets/images/background.png')}
        style={styles.background}
        >
      <View style={styles.container}>
          <View style={styles.bigView}>
              <TouchableOpacity onPress={backPressed}>
                  <Image
                      source={require('../assets/images/backarrow.png')}
                      style={styles.backarrow}
                  ></Image>
              </TouchableOpacity>
          </View>
        <Text style={styles.title}>FROG BIN 2</Text>
        <Text style={styles.title}>accepts:</Text>
        <Text style={styles.subtitle}>plastic 1, plastic 2, and glass</Text>
        <TouchableOpacity onPress={continuePressed} style={styles.button}>
            <Text style= {styles.buttonText}>i have those!</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={cancelPressed} style={styles.subButton}>
            <Text style= {styles.buttonText}>cancel</Text>
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
      padding: 50,
    },
    title:{
      color: '#42A840',
      width: "100%",
      textAlign: 'center',
      fontWeight: 'bold',
      marginLeft: '2%',
      fontSize:  20,
      fontFamily: 'press-start',
      padding: 8,
    },
    subtitle:{
        fontSize: 18,
        lineHeight: 18,
        textAlign: 'center',
        color: '#8FC320',
        fontFamily: 'press-start',
        marginTop: "20%",
        marginBottom: "20%"
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
      marginBottom: "10%",
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
    },
    backarrow:{
      width: 20,
      height: 20,
      position: 'absolute',
      top: -10,
      left: -25,
    },
    bigView: {
      width: "100%",
      marginBottom: "20%"
  },
});
