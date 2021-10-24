import React, { useEffect, Component, useState } from 'react'
import { FlatGrid } from 'react-native-super-grid';
import { StyleSheet, Text, View, ImageBackground, Image, TouchableOpacity, Alert, TextInput, Pressable, Button } from 'react-native';

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

export default function FrogScreen() {
    const [curImage, setCurImage] = useState(frogs.wizard);
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

    const map = new Map([
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

    return (
        <View style={styles.container}>
            <Image
                source={curImage}
                style={styles.bigFrog}
                resizeMode="contain"
            ></Image>
            <FlatGrid
                itemDimension={100}
                data={images}
                style={styles.gridView}
                renderItem={({ item, index }) => (
                    <View>
                        <TouchableOpacity onPress={() => {
                            setCurImage(map.get(index));
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
    }
});