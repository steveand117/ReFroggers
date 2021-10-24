import { Text, View } from '../components/Themed';
import * as React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types';
export default function InfoScreen({navigation} : NativeStackScreenProps<RootStackParamList>) {
    const cancelPressed = ()=> {
        navigation.navigate('Home');
      }
      const continuePressed = ()=> {
        navigation.navigate('Submit');
      }
    return (
      <View style={styles.container}>
        <Text style={styles.title}>FROG BIN 2 accepts</Text>
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
    );
  }

  const styles = StyleSheet.create({ 
    container: {
      width: '100%',
      height: '100%',
      alignItems: 'center',
      backgroundColor: "#E3FCAE",
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
