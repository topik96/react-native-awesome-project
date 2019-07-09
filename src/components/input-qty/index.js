import React, {useState} from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const InputQuantity = ({ incrementItem, decrementItem, itemName }) => {
    // react hook
    // const [count, setCount] = useState(defaultValue) 
    return (
      <View style={styles.container}>
        <TouchableOpacity
        style={styles.button}
        onPress={incrementItem}
        >
          <Text style={styles.textStyle}>+</Text>
        </TouchableOpacity>
        <Text>{itemName}</Text>
        <TouchableOpacity
        style={styles.button}
        onPress={decrementItem}
        >
          <Text style={styles.textStyle}>-</Text>
        </TouchableOpacity>
      </View>
    );
}

const styles = StyleSheet.create({
  container:{
    flexDirection:'row',
    margin:8
  },
  button:{
    flex: 1,
    justifyContent:'center',
    alignItems:'center',
    flexDirection:'row',
    maxWidth:32,
    height: 32,
    borderRadius: 5,
    marginHorizontal: 8,
    backgroundColor:'blue'
  },
  textStyle:{
    color:'orange',
    fontWeight:'bold'
  }
})

export default InputQuantity