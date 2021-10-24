import React, {useEffect, useState} from 'react';
import {Alert, Button, Dimensions, StyleSheet, TouchableOpacity} from 'react-native';
import {Text, View} from '../components/Themed';
import {BarCodeScanner, BarCodeScannerResult} from 'expo-barcode-scanner';
import BarcodeMask from 'react-native-barcode-mask';
import { RootTabScreenProps } from '../types';
import { TabRouter } from '@react-navigation/routers';

const finderWidth: number = 280;
const finderHeight: number = 230;
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
const viewMinX = (width - finderWidth) / 2;
const viewMinY = (height - finderHeight) / 2;

export default function BarCodeScanScreen({navigation, route}: any) {
    const [hasPermission, setHasPermission] = useState<boolean | null>(null);
    const [type, setType] = useState<any>(BarCodeScanner.Constants.Type.back);
    const [scanned, setScanned] = useState<boolean>(false);

    useEffect(() => {
        (async () => {
            const {status} = await BarCodeScanner.requestPermissionsAsync();
            setHasPermission(status === 'granted');
        })();
    }, []);

    const handleBarCodeScanned = (scanningResult: BarCodeScannerResult) => {
        // throw 'bruh';
        if (!scanned) {
            const {type, data, bounds: {origin} = {}} = scanningResult;
            // @ts-ignore
            const {x, y} = origin;
            if (x >= viewMinX && y >= viewMinY && x <= (viewMinX + finderWidth / 2) && y <= (viewMinY + finderHeight / 2)) {
                setScanned(true);
                navigation.navigate("Info", {
                    data: data, 
                    curFrog: route.params.curFrog,
                    curMoney: route.params.curMoney,
                    setCurMoney: route.params.setCurMoney});
            }
        }
    };

    if (hasPermission === null) {
        return <Text>Requesting for camera permission</Text>;
    }
    if (hasPermission === false) {
        return <Text>No access to camera</Text>;
    }
    const backPressed = ()=> {
        navigation.navigate('TabOne');
    }
    return (
        <View style={{flex: 1}}>
            <TouchableOpacity style = {styles.button} onPress={backPressed}>
                <Text style={styles.buttonText}>Return To Home Page</Text>
            </TouchableOpacity>
            <BarCodeScanner onBarCodeScanned={handleBarCodeScanned}
                    type={BarCodeScanner.Constants.Type.back}
                    barCodeTypes={[BarCodeScanner.Constants.BarCodeType.qr]}
                    style={styles.container}>
                <View
                    style={{
                        flex: 1,
                        backgroundColor: 'transparent',
                        flexDirection: 'row',
                    }}>
                </View>
            <BarcodeMask edgeColor="#62B1F6" showAnimatedLine/>
            {scanned && <Button title="Scan Again" onPress={() => setScanned(false)}/>}
            </BarCodeScanner>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    button: {
        backgroundColor: '#42A840',
        width: "100%",
        padding: 20,
        fontSize:  27,
        fontFamily: 'press-start',
    },
    buttonText: {
        color: 'white',
        marginLeft: '15%',
        fontSize:  12,
        fontFamily: 'press-start',
    }
});