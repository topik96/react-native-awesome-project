import React, { useState } from 'react';
import { View, Text, TextInput, Image, StyleSheet } from 'react-native';
import { image } from '../../assets/images';

const Cart = ({ count }) => {
  return (
      <View style={styles.container}>
        <Image source={image.iconCart} />
        <View style={styles.containerBadge}>
          <Text style={styles.textStyle}>{count}</Text>
        </View>
      </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row'
  },
  containerBadge:{
    justifyContent:'center',
    alignItems:'center',
    width: 20,
    height:20,
    borderRadius: 20 /2,
    backgroundColor: 'red',
    marginLeft:-8
  },
  textStyle:{
    color: 'white'
  }
});

export default Cart;
