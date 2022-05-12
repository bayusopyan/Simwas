import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity, Modal, Text,FlatList } from 'react-native';
import { AppBar, IconButton, TextInput} from "@react-native-material/core";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { ModalPicker } from '../../components/ModalPicker/ModalPicker';

const TindakLanjutDone = (props) => {
  const [people,setPeople] = useState([
    {name:'Kategori A', subKategori:'Sub Kategori A', id:'1'},
    {name:'Kategori B', subKategori:'Sub Kategori B', id:'2'},
    {name:'Kategori C', subKategori:'Sub Kategori C', id:'3'},
    {name:'Kategori D', subKategori:'Sub Kategori D', id:'4'},
    {name:'Kategori E', subKategori:'Sub Kategori E', id:'5'},
    {name:'Kategori F', subKategori:'Sub Kategori F', id:'6'},
    {name:'Kategori G', subKategori:'Sub Kategori G', id:'7'},
    {name:'Kategori H', subKategori:'Sub Kategori H', id:'8'},
]);
  return (
    <View style={{flex:1, direction:'rows'}}>
    {/* <AppBar style={{backgroundColor:'#61A4BC'}} 
        title="Tindak Lanjut"
        leading={ props =>( 
                            <IconButton
                            icon={props => <MaterialCommunityIcons name="arrow-left" size={25} color="white" {...props} />}
                            {...props}
                            />
        )}
        
        trailing={props =>
              <IconButton
                icon={<MaterialCommunityIcons name="history" size={25} color="white" {...props} />}
                onPress={() => navigation.navigate('TindakLanjutDone')}
                {...props}
              />
          }
    /> */}

    <FlatList
        keyExtractor={(item)=> item.id}
        data={people}
        renderItem={({item}) => (
                               
            <View style={styles.ContainerCardTindakLanjut}>
            <TouchableOpacity
                 onPress={()=>navigation.navigate('DetailTindakLanjut')}
            >
            <View style={styles.CardTindakLanjut}>
                <View style={styles.KategoriTindakLanjut}>
                     <View style={{flexDirection:'row', alignItems:'center'}}>
                        <View>
                                <IconButton
                                    icon={<MaterialCommunityIcons name="file-document" size={40} color="white"/>}
                                />
                        </View> 
                        <View style={{marginLeft:5,flexDirection:'column'}}>
                                <Text style={{
                                            fontSize: 12,
                                            color: '#2155CD',
                                            fontWeight: 'bold',
                                            textTransform: 'capitalize',
                                            }}>
                                Kategori
                                </Text>
                                <Text style={{
                                            fontSize: 12,
                                            color: '#357C3C',
                                            fontWeight: 'bold',  
                                }}>
                                    {item.name}
                                </Text>                        
                        </View> 
                    </View> 
                </View>

                <View style={styles.SubKategoriTindakLanjut}>
                    <View style={{flexDirection:'row', alignItems:'center'}}>
                        <View>
                                <IconButton
                                    icon={<MaterialCommunityIcons name="clipboard-list" size={40} color="white"/>}
                                />
                        </View>
                        <View style={{marginLeft:5,flexDirection:'column'}}>
                        <Text style={{
                                            fontSize: 12,
                                            color: '#2155CD',
                                            fontWeight: 'bold',
                                            textTransform: 'capitalize',
                                            }}>
                                Sub Kategori
                                </Text>
                                <Text style={{
                                            fontSize: 12,
                                            color: '#357C3C',
                                            fontWeight: 'bold',  
                                }}>
                                    {item.subKategori}
                                </Text>                        
                        </View>
                    </View>
                </View>
            </View>
            </TouchableOpacity>
        </View>
        )}
    />


</View>  

  )
}

export default TindakLanjutDone

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20
  },
  contohmodal:{
      flex:1,
      backgroundColor: 'green',
      alignItems: 'center',
      justifyContent: 'center',
      padding:20
  },
  touchableOpacity:{
      backgroundColor: 'orange',
      alignSelf: 'stretch',
      paddingHorizontal:20
  },
  bottomSheet:{
      flex:1,
      alignItems:'center',
      justifyContent:'center'
  },
  textSize:{
      fontSize:20
  },
  ContainerCardTindakLanjut:{
      padding:20,
  },
  CardTindakLanjut:{
      backgroundColor:'white',
      height:90,
      borderRadius:15,
      shadowColor:'black',
      shadowOffset: {width: 0, height: 0},
      shadowOpacity:1,
      shadowRadius:8,
      elevation: 8,
      flexDirection: 'column'
  },
  KategoriTindakLanjut:{
      backgroundColor:'#C4DDFF',
      height:50,
      shadowColor:'black',
      shadowOffset: {width: 0, height: 0},
      shadowOpacity:1,
      shadowRadius:8,
      elevation: 8,
      borderTopLeftRadius:15,
      borderTopRightRadius:15
  },
  SubKategoriTindakLanjut:{
      backgroundColor:'#FFA8A8',
      height:50,
      shadowColor:'black',
      shadowOffset: {width: 0, height: 0},
      shadowOpacity:1,
      shadowRadius:8,
      elevation: 8,
      borderBottomLeftRadius:15,
      borderBottomRightRadius:15
  },
  DetailCardTindakLanjut:{
      marginTop:20,
      backgroundColor:'white',
      // height:500,
      borderRadius:15,
      shadowColor:'black',
      shadowOffset: {width: 0, height: 0},
      shadowOpacity:1,
      shadowRadius:8,
      elevation: 8,
      flexDirection: 'column'
  },
  HeaderDetailTindaklanjut:{
      backgroundColor:'#C4DDFF',
      // height:130,
      shadowColor:'black',
      shadowOffset: {width: 0, height: 0},
      shadowOpacity:1,
      shadowRadius:8,
      elevation: 8,
      borderTopLeftRadius:15,
      borderTopRightRadius:15,
      paddingLeft:20,
      paddingTop:15,
      paddingBottom:20
  },
  PertanyaanTindakLanjut:{
      backgroundColor:'#FFA8A8',
      // height:50,
      shadowColor:'black',
      shadowOffset: {width: 0, height: 0},
      shadowOpacity:1,
      shadowRadius:8,
      elevation: 8,
      borderBottomLeftRadius:15,
      borderBottomRightRadius:15,
      paddingBottom:12
  },
});