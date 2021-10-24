import * as React from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types';
import { Counter } from '../components/Counter';
import { StyleSheet, Text, View, ImageBackground, Image, TouchableOpacity, Alert, TextInput, Pressable, Button } from 'react-native';


export default function SubmitScreen({navigation} : NativeStackScreenProps<RootStackParamList>) {
    const cancelPressed = ()=> {
        navigation.navigate('TabOne');
      }
    const continuePressed = ()=> {
      navigation.navigate('Reward');
    }
    
    const [count1, setCount1] = React.useState(0);
    const [count2, setCount2] = React.useState(0);
    const [count3, setCount3] = React.useState(0);
    return (
      <ImageBackground
        source={require('../assets/images/background.png')}
        style={styles.background}
        >
      <View style={styles.container}>
        <Text style={styles.title}>input the number of each material recycled:</Text>

        <View style={styles.bigView}>
          <Text style={[styles.subtitle, {marginRight: "10%"}]}>plastic 1:</Text>
          <Counter count={count1} setCount={setCount1} text="plastic 1"/>
        </View>

        <View style={styles.bigView}>
          <Text style={[styles.subtitle, {marginRight: "9%"}]}>plastic 2:</Text>
          <Counter count={count2} setCount={setCount2} text="plastic 2"/>
        </View>

        <View style={styles.bigView}>
          <Text style={[styles.subtitle, {marginRight: "29%"}]}>glass:</Text>
          <Counter count={count3} setCount={setCount3} text="plastic 3"/>
        </View>
        
        
        <TouchableOpacity onPress={continuePressed} style={styles.button}>
            <Text style= {styles.buttonText}>next</Text>
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
    },
    title:{
      color: '#42A840',
      width: "90%",
      textAlign: 'center',
      fontWeight: 'bold',
      marginLeft: '2%',
      fontSize:  20,
      fontFamily: 'press-start',
      marginTop: '15%',
      marginBottom: '18%',
    },
    subtitle:{
        fontSize: 18,
        lineHeight: 18,
        color: '#42A840',
        fontFamily: 'press-start',
        marginLeft: "10%",
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
      marginTop: '40%',
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
    bigView: {
      width: "100%",
      flexDirection: "row",
      padding: 15,
    },
});
