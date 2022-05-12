import { StyleSheet, Text, View, TextInput } from 'react-native'
import React from 'react'

const customeInput = ({value,setValue, placeholder,secureTextEntry, style, secure}) => {
  return (
    <View style={styles.container}>
      <TextInput
        value={value}
        onChangeText={setValue} 
        placeholder={placeholder}
        secureTextEntry={secureTextEntry}
        style={style}
      />
    </View>
  )
}

export default customeInput

const styles = StyleSheet.create({
container:{
    width:'100%',
}
})