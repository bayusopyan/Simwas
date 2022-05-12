import { StyleSheet, Text, View, Pressable } from 'react-native'
import React from 'react'

const customeButton = ({onPress, text, style}) => {
  return (
    <Pressable onPress={onPress} style={styles.container}>
      <Text style={style}>{text}</Text>
    </Pressable>
  )
}

export default customeButton

const styles = StyleSheet.create({
  container:{
    backgroundColor:'#1266AC',
    padding:15,
    marginVertical:60,
    alignItems:'center',
    borderRadius:5
  },
})