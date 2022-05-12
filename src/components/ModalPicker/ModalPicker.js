import React, { useState } from 'react';
import {IconButton} from "@react-native-material/core";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {
    StyleSheet, Text, View,
    TouchableOpacity, Dimensions, ScrollView
} from 'react-native';

const OPTIONS = ['ST-001','ST-002','ST-003','ST-004','ST-005','ST-005','ST-006'];
const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

const ModalPicker = (props) => {

    const onPressItem = (option) =>{
        props.changeModalVisibility(false);
        props.setData(option);
    }

    const option = OPTIONS.map((item,index)=>{
            return(
                <TouchableOpacity
                    style={styles.option}
                    key={index}
                    onPress={() => onPressItem(item)}
                >

                <Text style={styles.text}>
                    {item}
                </Text>

                {props.data == item ? (
                    <IconButton
                    icon={props => <MaterialCommunityIcons name="check-circle-outline" size={10} style={{color:'green'}} {...props} />}
                    {...props}
                    />
                ) : <View/>}
                
                </TouchableOpacity>
            )
    });

    return (
        <TouchableOpacity
            onPress={()=>props.changeModalVisibility(false)}
            style={styles.container}
        >
            <View style={{flex:1, backgroundColor:'#000000AA'}}>
                <View style={{
                    bottom:0,
                    position:'absolute',
                    width:'100%',
                    backgroundColor:'white',
                    borderTopLeftRadius:15,
                    borderTopRightRadius:15,
                    height:Dimensions.get('window').height / 2,
                    maxHeight:Dimensions.get('window').height * 0.4
                }}>
                <ScrollView>
                    {option}
                </ScrollView>
                </View>
            </View>

        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1
    },
    modal:{
        backgroundColor:'#BDC7C9',
        borderRadius: 10,
        bottom:0,
        position:'absolute',
        width:'100%',
    },
    option:{
        flex:1,
        flexDirection:'row',
        justifyContent: 'space-between'
    },
    text:{
        margin:20,
        fontSize:20,
    }
})

export {ModalPicker}