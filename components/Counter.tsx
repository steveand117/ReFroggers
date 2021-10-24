import * as React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';

import { Text, TextProps } from './Themed';
import { View } from './Themed';

export function Counter({count, setCount}: any) {

    const add = () => {
        setCount(count + 1)
    }
    const sub = () => {
        setCount(count - 1 < 0 ? 0 : count - 1)
    }
  return <View style={styles.container}> 
        <TouchableOpacity onPress={sub} style={styles.counterButton}>
            <Text style= {styles.buttonText}>-</Text>
      </TouchableOpacity>
      <Text style={styles.counterText}> {count} </Text>
      <TouchableOpacity onPress={add} style={styles.counterButton}>
            <Text style= {styles.buttonText}>+</Text>
      </TouchableOpacity>
  </View>;
}
const styles = StyleSheet.create({
container: {
    // width: '100%',
    // height: '100%',
    // alignItems: 'center',
    backgroundColor: "#8FC320",
    flexDirection: 'row',
    borderRadius: 15
      },
counterText: {
    fontFamily:'press-start',
    alignSelf:'center'
},
counterButton: {
    backgroundColor: '#42A840',
    // width: "70%",
    borderRadius: 10,
    padding: 4,
    paddingLeft:4,
    fontSize:  27,
    fontFamily: 'press-start',
  },
  buttonText: {
    color: 'white',
    fontSize:  12,
    fontFamily: 'press-start',
    alignSelf: 'center',
    paddingLeft: 1
  }
});