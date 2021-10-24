import React, { useEffect, Component, useState } from 'react'
import { FlatGrid } from 'react-native-super-grid';
import { StyleSheet, Text, View, ImageBackground, Image, TouchableOpacity, Alert, TextInput, Pressable, Button } from 'react-native';
import { RootTabScreenProps } from '../types';

const cowboy = require('../assets/images/frogs/cowboyfrog.png');
const distinguished = require('../assets/images/frogs/distinguishedfrog.png');
const ffrog = require('../assets/images/frogs/falsefrog.png');
const lemon = require('../assets/images/frogs/lemonfrog.png');
const pirate = require('../assets/images/frogs/piratefrog.png');
const prince = require('../assets/images/frogs/princefrog.png');
const rainbow = require('../assets/images/frogs/rainbowfrog.png');
const tfrog = require('../assets/images/frogs/truefrog.png');
const wizard = require('../assets/images/frogs/wizardfrog.png');


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


export default function FrogScreen({ navigation, route }: any) {
    const backPressed = ()=> {
        navigation.navigate('TabOne');
    }

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

    const descMap = new Map([
        [0, "A cool cowboy"],
        [1, "Ah yes, what a distinguished gentleman"],
        [2, "ahaha... this is totally a frog right?"],
        [3, "Froot Froog"],
        [4, "Arrrrrrrrrrrrr"],
        [5, "prince froge owo"],
        [6, "R A I N B O W"],
        [7, "frog"],
        [8, "he doesn't actually have magic, but don't tell him"],
    ]);

    const [curImage, setCurImage] = useState(imageMap.get(route.params.curFrog));
    const [curText, setCurText] = useState(descMap.get(route.params.curFrog));
    const [curName, setCurName] = useState(nameMap.get(route.params.curFrog));
    const [images, setImage] = useState([
        frogs.cowboy,
        frogs.distinguished,
        frogs.ffrog,
        frogs.lemon,
        frogs.pirate,
        frogs.prince,
        frogs.rainbow,
        frogs.tfrog,
        frogs.wizard
    ]);

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={backPressed}>
                <Image
                    source={require('../assets/images/backarrow.png')}
                    style={styles.logo}
                ></Image>
            </TouchableOpacity>
            <Image
                    source={curImage}
                    style={styles.bigFrog}
                    resizeMode="contain"
            ></Image>

            <Text style={styles.name}>{curName}</Text>
            <Text style={styles.rando}>{curText}</Text>
            <FlatGrid
                itemDimension={100}
                data={images}
                style={styles.gridView}
                renderItem={({ item, index }) => (
                    <View>
                        <TouchableOpacity onPress={() => {
                            route.params.setCurFrog(index);
                            route.params.setCurFrogName(nameMap.get(index));
                            setCurName(nameMap.get(index));
                            setCurImage(imageMap.get(index));
                            setCurText(descMap.get(index)!);
                        }}>
                            <Image
                            source={item}
                            style={styles.frog}
                            resizeMode="contain"
                            ></Image>
                        </TouchableOpacity>
                    </View>
                  )}
                />
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
      width: '100%',
      height: '100%',
      alignItems: 'center',
      backgroundColor: "#E3FCAE",
    },
    title: {
        padding: 100,
        fontSize: 20,
        fontWeight: 'bold',
    },
    frog: {
        width: 100,
        height: 100,
    },
    gridView: {
        marginTop: 10,
        flex: 1,
    },
    bigFrog: {
        width: 200,
        height: 200,
    },
    rando: {
        color: '#42A840',
        width: '90%',
        borderRadius: 25,
        textAlign: 'center',
        fontWeight: 'bold',
        marginRight: '2%',
        marginTop: '3%',
        fontSize:  12,
        fontFamily: 'press-start'
    },
    logo:{
        marginTop: '6%',
        marginRight: '83%',
        width: 20,
        height: 20,
    },
    name:{
        color: '#42A840',
        width: '90%',
        borderRadius: 25,
        textAlign: 'center',
        fontWeight: 'bold',
        marginRight: '2%',
        marginTop: '3%',
        fontSize:  16,
        fontFamily: 'press-start'
    },
});