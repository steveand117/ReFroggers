import * as React from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types';
import { StyleSheet, Text, View, ImageBackground, Image, TouchableOpacity, Alert, TextInput, Pressable, Button } from 'react-native';

const cowboy = require('../assets/images/fullfrogs/cowboyfrog.png');
const distinguished = require('../assets/images/fullfrogs/distinguishedfrog.png');
const ffrog = require('../assets/images/fullfrogs/falsefrog.png');
const lemon = require('../assets/images/fullfrogs/lemonfrog.png');
const pirate = require('../assets/images/fullfrogs/piratefrog.png');
const prince = require('../assets/images/fullfrogs/princefrog.png');
const rainbow = require('../assets/images/fullfrogs/rainbowfrog.png');
const tfrog = require('../assets/images/fullfrogs/truefrog.png');
const wizard = require('../assets/images/fullfrogs/wizardfrog.png');

const background = require('../assets/images/background.png');
const frogecoin = require('../assets/images/frogecoin.png');

export default function RewardScreen({route, navigation} : any) {
  const imageMap = new Map([
    [0, cowboy],
    [1, distinguished],
    [2, ffrog],
    [3, lemon],
    [4, pirate],
    [5, prince],
    [6, rainbow],
    [7, tfrog],
    [8, wizard],
]);
    const cancelPressed = ()=> {
      navigation.navigate('TabOne');
    }
    const continuePressed = ()=> {
      navigation.navigate('TabThree');
    }
    const total = route.params.total * 5;
    route.params.setCurMoney(route.params.curMoney + total);
    return (
      <ImageBackground
        source={background}
        style={styles.background}
        >
      <View style={styles.container}>
        <View style={styles.moneyBg}>
            <Text style={styles.moneyText}>{route.params.curMoney + total}</Text>
            <Image
                source={frogecoin}
                style={styles.moneyLogo}
            ></Image>
          </View>
        <Text style={styles.title}>you earned:</Text>
        <Text style={styles.title}>{total} Frogecoin</Text>

        <Image
            source={imageMap.get(route.params.curFrog)}
            style={styles.frog}
            resizeMode="contain"
        >
        </Image>
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
      padding: 15
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
    },
    moneyBg: {
      backgroundColor: "rgba(255, 255, 255, 0.75)",
      flexDirection: "row",
      borderRadius: 25,
      width: "25%",
      padding: 10,
      marginLeft: "60%",
      marginTop: "7%",
      marginBottom: "10%",
  },
  moneyText: {
      marginTop: "6%",
      fontSize:  12,
      fontFamily: 'press-start',
      color: '#42A840',
      marginLeft: "10%"
  },
  moneyLogo:{
      width: 20,
      height: 20,
      marginLeft: "20%"
  },
});
