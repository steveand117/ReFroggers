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

const fullcowboy = require('../assets/images/fullfrogs/cowboyfrog.png');
const fulldistinguished = require('../assets/images/fullfrogs/distinguishedfrog.png');
const fullffrog = require('../assets/images/fullfrogs/falsefrog.png');
const fulllemon = require('../assets/images/fullfrogs/lemonfrog.png');
const fullpirate = require('../assets/images/fullfrogs/piratefrog.png');
const fullprince = require('../assets/images/fullfrogs/princefrog.png');
const fullrainbow = require('../assets/images/fullfrogs/rainbowfrog.png');
const fulltfrog = require('../assets/images/fullfrogs/truefrog.png');
const fullwizard = require('../assets/images/fullfrogs/wizardfrog.png');


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

    const fullImageMap = new Map([
        [0, fullcowboy],
        [1, fulldistinguished],
        [2, fullffrog],
        [3, fulllemon],
        [4, fullpirate],
        [5, fullprince],
        [6, fullrainbow],
        [7, fulltfrog],
        [8, fullwizard],
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
        [0, "You've yee'd your last haw"],
        [1, "Ah yes, what a distinguished gentleman"],
        [2, "Ahaha... this is totally a frog right?"],
        [3, "A sour fellow, but he still cares for you"],
        [4, "Arrr..... I mean, ribbit"],
        [5, "He will accept your kisses"],
        [6, "Frog the rainbow"],
        [7, "Frog."],
        [8, "He doesn't actually have magic, but don't tell him"],
    ]);

    const [curImage, setCurImage] = useState(fullImageMap.get(route.params.curFrog));
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
                            setCurImage(fullImageMap.get(index));
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