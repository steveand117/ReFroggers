// background: #;
import React from 'react';
import { StyleSheet, Text, View, ImageBackground, Image, TouchableOpacity, Alert, TextInput, Pressable, Button } from 'react-native';
import { RootTabScreenProps } from '../types';

export default function LoginScreen({ navigation }: RootTabScreenProps<'Login'>) {
  const loginPressed = ()=> {
    navigation.navigate('TabOne');
  }
    return (
      <ImageBackground
        source={require('../assets/images/background.png')}
        style={styles.background}
      >
        <View>
          <Image
            source={require('../assets/images/logo.png')}
            style={styles.logo}
            resizeMode="contain"
          >
          </Image>
          <Text style={styles.title}>FROGGERS</Text>
          <Text style={styles.prompt}>username:</Text>
          <TextInput style={styles.input}></TextInput>
          <Text style={styles.prompt}>password:</Text>
          <TextInput secureTextEntry={true} style={styles.input}></TextInput>
          <Text style={styles.rando}>forgot your password?</Text>
          <Text style={styles.rando}>sign up</Text>

          <TouchableOpacity onPress={loginPressed} style={styles.login}>
            <Text style= {styles.loginText}>log in</Text>
          </TouchableOpacity>
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
    logo:{
      width: 100,
      height: 100,
      marginLeft: '37%',
      marginRight: '63%',
      marginTop: '5%'
    },
    text: {
      color: 'white',
      marginTop: '-25%',
      marginLeft: '20%'
    },
    title:{
      color: '#42A840',
      width: "100%",
      borderRadius: 25,
      textAlign: 'center',
      fontWeight: 'bold',
      marginLeft: '2%',
      padding: "2%",
      fontSize:  40,
      marginTop: '5%',
      fontFamily: 'press-start',
      marginBottom: '2%',
    },
    login: {
      backgroundColor: '#42A840',
      width: "40%",
      borderRadius: 10,
      marginLeft: '30%',
      padding: 13,
      fontSize:  27,
      marginTop: '10%',
      fontFamily: 'press-start',
    },
    loginText: {
      color: 'white',
      marginLeft: '20%',
      fontSize:  12,
      fontFamily: 'press-start',
    },
    signup: {
      backgroundColor: '#3A59FF',
      color: 'white',
      width: "30%",
      borderRadius: 25,
      fontSize:  27,
      padding: '2%',
      marginTop: '10%',
      fontFamily: 'press-start',
      marginLeft: '30%',
    },
    signUpText: {
      color: 'white',
      fontSize:  12,
      fontFamily: 'press-start',
    },
    prompt: {
      color: '#42A840',
      width: "62%",
      borderRadius: 25,
      textAlign: 'center',
      fontWeight: 'bold',
      marginLeft: '0%',
      padding: "2%",
      fontSize:  20,
      fontFamily: 'press-start'
    },
    input: {
      backgroundColor: '#FEFFDE',
      width: 300,
      height: 40,
      paddingHorizontal: 15,
      borderRadius: 15, 
      fontSize: 14,
      marginLeft: "8%",
      fontFamily: 'press-start'
   },
   rando: {
    color: '#42A840',
    borderRadius: 25,
    textAlign: 'center',
    fontWeight: 'bold',
    marginRight: '2%',
    marginTop: '3%',
    fontSize:  12,
    fontFamily: 'press-start'
   }
});