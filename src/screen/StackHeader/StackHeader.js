import React from 'react';
import {Appbar} from 'react-native-paper';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
const StackHeader=({scene,navigation})=>{
    //const {options}=scene.descriptor;
    //const title = scene.headerTitle;
    // console.log(scene);
    return (
        <Appbar.Header style={{backgroundColor:'#61A4BC',direction:'rows',justifyContent:'space-between'}}>
            {
                navigation.canGoBack()?
                (
                    <MaterialCommunityIcons name="arrow-left" size={25} color="white" onPress={()=> navigation.pop()}/>
                    // <Appbar.BackAction style={{backgroundColor:"white"}} onPress={()=> navigation.pop()}/>
                )
                :
                null
            }
            {/* <Appbar.Content title={title}/> */}
            <MaterialCommunityIcons name="history" size={25} color="white" onPress={()=> navigation.navigate('TindakLanjutDone')}/>
                   
            {/* <Appbar.Action icon="bell" onPress={()=>console.log("Notification pressed")}/> */}
        </Appbar.Header>
    )
};

export default StackHeader;