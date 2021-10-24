import React, { useEffect, Component, useState } from 'react'
import EditScreenInfo from '../components/EditScreenInfo';
import { RootTabScreenProps } from '../types';
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

const frogs = {
    cowboy,
    distinguished,
    ffrog,
    lemon,
    pirate,
    prince,
    rainbow,
    tfrog,
    wizard
};

export default function TabOneScreen({ navigation }: any) {

  const imageMap = new Map([
    [0, frogs.cowboy],
    [1, frogs.distinguished],
    [2, frogs.ffrog],
    [3, frogs.lemon],
    [4, frogs.pirate],
    [5, frogs.prince],
    [6, frogs.rainbow],
    [7, frogs.tfrog],
    [8, frogs.wizard],
]);

const nameMap = new Map([
  [0, "Cowboy Frog"],
  [1, "Distinguished Frog"],
  [2, "Imposter Frog"],
  [3, "Lemon Frog"],
  [4, "Pirate Frog"],
  [5, "Royal Frog"],
  [6, "Rainbow Frog"],
  [7, "True Frog"],
  [8, "Wizard Frog"],
]);


const [curFrog, setCurFrog] = useState(3);
const [curFrogName, setCurFrogName] = useState(nameMap.get(curFrog));
const [curMoney, setCurMoney] = useState(300);
const [curBought, setCurBought] = useState([false, false, false, false, false, false, false, false, true])

  const scanPressed = ()=> {
    navigation.navigate('TabThree', {
      curFrog: curFrog,
      curMoney: curMoney,
      setCurMoney: setCurMoney});
  }
  const frogPressed = ()=> {
    navigation.navigate('Frog', {
      curFrog: curFrog, 
      setCurFrog: setCurFrog, 
      setCurFrogName: setCurFrogName,
      curMoney: curMoney,
      setCurMoney: setCurMoney,
      curBought: curBought,
      setCurBought: setCurBought});
  }
  const infoPressed = ()=> {
    navigation.navigate('Info', {
      curFrog: curFrog,
      curMoney: curMoney,
      setCurMoney: setCurMoney});
  }

  return (
    <ImageBackground
        source={background}
        style={styles.background}
        >
    <View style={styles.container}>
      <Text style={styles.title}>Welcome Back!</Text>
      <Image
            source={imageMap.get(curFrog)}
            style={styles.frog}
            resizeMode="contain"
      >
      </Image>
      <Text style={styles.rando}>your frog companion:</Text>
      <Text style={[styles.rando, {fontSize: 15}]}>{curFrogName}</Text>

      <TouchableOpacity onPress={scanPressed} style={styles.button}>
            <Text style= {styles.buttonText}>scan something!</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={frogPressed} style={styles.button}>
            <Text style= {styles.buttonText}>choose companion</Text>
      </TouchableOpacity>

      <Image
        source={require('../assets/images/logo.png')}
        style={styles.logo}
        resizeMode="contain"
      >
      </Image>
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
   fontFamily: 'press-start',
   padding: '2%',
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
  buttonText: {
    color: 'white',
    alignSelf: 'center',
    fontSize:  12,
    fontFamily: 'press-start',
  },
  logo:{
    width: 100,
    height: 100,
    marginTop: '5%'
  },
});
