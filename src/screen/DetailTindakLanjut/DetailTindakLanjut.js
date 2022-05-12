import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity, Modal, Text,FlatList, SafeAreaView, ScrollView } from 'react-native';
import { AppBar, IconButton, TextInput, Button } from "@react-native-material/core";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { ModalPicker } from '../../components/ModalPicker/ModalPicker';

const DetailTindakLanjut = (props) => {
  
    const [tindakLanjut,setTindakLanjut] = useState([
        {name:'Kategori A', subKategori:'Sub Kategori A', id:'1'},
        {name:'Kategori B', subKategori:'Sub Kategori B', id:'2'},
        {name:'Kategori C', subKategori:'Sub Kategori C', id:'3'},

        {name:'Kategori A', subKategori:'Sub Kategori A', id:'4'},
        {name:'Kategori B', subKategori:'Sub Kategori B', id:'5'},
        {name:'Kategori C', subKategori:'Sub Kategori C', id:'6'},

        {name:'Kategori A', subKategori:'Sub Kategori A', id:'7'},
        {name:'Kategori B', subKategori:'Sub Kategori B', id:'8'},
        {name:'Kategori C', subKategori:'Sub Kategori C', id:'9'},
    ]);

  return (
    <View style={{flex:1, direction:'rows'}}>
        {/* <AppBar style={{backgroundColor:'#61A4BC'}} 
                title="Detail Tindak Lanjut"
                leading={ props =>( 
                                    <IconButton
                                    icon={props => <MaterialCommunityIcons name="arrow-left" size={25} color="white" {...props} />}
                                    {...props}
                                    />
                )}
                
                trailing={props =>
                      <IconButton
                        icon={<MaterialCommunityIcons name="history" size={25} color="white" {...props} />}
                        onPress={() => console.log(props)}
                        {...props}
                      />
                }
        /> */}

        <SafeAreaView>
        <ScrollView>



                        <View style={styles.DetailCardTindakLanjut}>
                        <View style={styles.HeaderDetailTindaklanjut}>
                            <View style={{flexDirection:'row',marginTop:10}}>
                                <Text style={{
                                                fontSize: 12,
                                                color: 'black',
                                                textTransform: 'capitalize',
                                                }}>
                                                    No Register
                                </Text>
                                <Text style={{marginLeft:30, fontSize:12, color:'black'}}>977|M.CGDG-Cigudeg |22/03/22</Text>
                            </View>
                            <View style={{flexDirection:'row', marginTop:10}}>
                                <Text style={{
                                                fontSize: 12,
                                                color: 'black',
                                                textTransform: 'capitalize',
                                                }}>
                                                    Kategori
                                </Text>
                                <Text style={{marginLeft:50, fontSize:12, color:'black'}}>xxxxxxxxxxxxxxxxx</Text>
                            </View>
                            <View style={{flexDirection:'row', marginTop:10}}>
                                <Text style={{
                                                fontSize: 12,
                                                color: 'black',
                                                textTransform: 'capitalize',
                                                }}>
                                                Sub Kategori
                                </Text>
                                <Text style={{marginLeft:28, fontSize:12, color:'black'}}>xxxxxxxxxxxxxxxxx</Text>
                            </View>    
                    </View>

                    <View style={styles.PertanyaanTindakLanjut}>
                            <View style={{flexDirection:'row', marginTop:10, justifyContent: 'space-between'}}>
                                <Text style={{
                                                fontSize: 12,
                                                color: 'black',
                                                textTransform: 'capitalize',
                                                paddingLeft:20
                                            }}>
                                                Pertanyaan
                                </Text>
                                <Text style={{
                                                fontSize: 12,
                                                color: 'black',
                                                textTransform: 'capitalize',
                                                paddingRight:80,
                                            }}>
                                                Tindak Lanjut
                                </Text>
                            </View>

                            {tindakLanjut.map((item,index) =>

                                <View style={{flexDirection:'row', marginTop:10, justifyContent: 'space-between'}}>
                                <Text style={{
                                                fontSize: 12,
                                                color: 'black',
                                                textTransform: 'capitalize',
                                                paddingLeft:20,
                                                paddingTop:40
                                            }}>
                                                xxxxxxxxxxxxxxxxx
                                </Text>
                                <TextInput
                                                    variant="outlined"
                                                    value="Pilih Tindak Lanjut"
                                                    color='#DDDDDD'
                                                    editable={false} 
                                                    selectTextOnFocus={false}
                                                    trailing={props => (
                                                            
                                                            <IconButton  icon={props => 
                                                            <TouchableOpacity
                                                                onPress={()=>changeModalVisibility(true)}
                                                            > 
                                                                <MaterialCommunityIcons style={{color:'#4B7BE5'}} name="chevron-right" {...props} />
                                                            </TouchableOpacity> 
                                                            } 
                                                            {...props}  />
                                                    )}
                                                    style={{width:210, paddingRight:10, paddingTop:20}}
                                />
                                </View>
                            )}               
                    </View>
                   
        </View>

        <View style={{flexDirection:'row', justifyContent:'flex-end', marginRight:50, marginTop:40,paddingBottom:80}}>
                <Button style={{backgroundColor:'#035397', height:60, width:150, paddingTop:12}} title="Submit"/>
        </View>



        </ScrollView>
        </SafeAreaView>


    </View>
  )}

export default DetailTindakLanjut

const styles = StyleSheet.create({
    DetailCardTindakLanjut:{
        margin:12,
        backgroundColor:'white',
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
    text: {
        fontSize: 14,
        marginBottom:10,
        paddingBottom:200,
        backgroundColor:'red'
      },
});