import * as React from 'react';
import EditScreenInfo from '../components/EditScreenInfo';
import { RootTabScreenProps } from '../types';
import { StyleSheet, Text, View, ImageBackground, Image, TouchableOpacity, Alert, TextInput, Pressable, Button } from 'react-native';

export default function TabOneScreen({ navigation }: RootTabScreenProps<'TabOne'>) {
  const scanPressed = ()=> {
    navigation.navigate('TabThree');
  }
  const frogPressed = ()=> {
    navigation.navigate('Home');
  }
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome Back!</Text>
      <Image
            source={require('../assets/images/wizardfrog.png')}
            style={styles.frog}
            resizeMode="contain"
      >
      </Image>
      <Text style={styles.rando}>your ecofrog:</Text>
      <Text style={styles.rando}>your wizard frog:</Text>

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
  buttonText: {
    color: 'white',
    marginLeft: '15%',
    fontSize:  12,
    fontFamily: 'press-start',
  },
  logo:{
    width: 100,
    height: 100,
    marginTop: '5%'
  },
});
