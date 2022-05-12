// import React,{useState} from "react";
// import {View, StyleSheet, Dimensions, Text, Image} from 'react-native';
// import Svg, {Path} from 'react-native-svg';
// import CustomeInput from "./src/components/CustomInput/";
// import CustomButton  from "./src/components/CustomButton";
// // import Login from "./src/screen/login";
// export default function App() {

//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');

//   const onSignIn = () =>{

//   }

//   return(
//     <View style={styles.container}>
//       <View style={styles.top}>
//       <View style={styles.box}>
//       <Svg
//               height={200}
//               width={Dimensions.get('screen').width}
//               viewBox="0 0 1440 20"
//               style={{marginVertical:-17}}
//               >
//                       <Path 
//                             fill="#1B98E08C" 
//                             fill-opacity="1" 
//                             d="M0,256L48,229.3C96,203,192,149,288,138.7C384,128,480,160,576,181.3C672,203,768,213,864,234.7C960,256,1056,288,1152,272C1248,256,1344,192,1392,160L1440,128L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
//                       />
//               </Svg>

//               <Svg 
//               viewBox="0 0 1440 320"
//               height={115}
//               width={Dimensions.get('screen').width}
//               style={{marginVertical:-59}}
//               >
//                     <Path 
//                           fill="#1B98E046"
//                           fill-opacity="1" 
//                           d="M0,128L60,144C120,160,240,192,360,176C480,160,600,96,720,74.7C840,53,960,75,1080,117.3C1200,160,1320,224,1380,256L1440,288L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
//                     />
//               </Svg>
//               <View style={styles.boxheader}>
              
//               <View style={{flex:1, flexDirection:"row", justifyContent:"space-between"}}>
//               <Image source={require('./assets/images/pnm.png')} resizeMode="contain" style={{marginHorizontal:8, padding:45,width: 120, height: 50}}/>
//               <Text style={{padding:25, marginVertical:7, fontWeight:'bold', fontSize:16}}>SIMWAS MOBILE</Text>
//               </View>

//               </View>
//       </View>
//       </View>
      
//       <View style={styles.main}>
//         <Text style={{marginHorizontal:30, width:500, marginBottom:25, padding:20,fontWeight: 'bold',fontSize:12}}>SISTEM MONITORING DAN PENGAWASAN</Text>
//         <View>

//             <Text style={styles.textAbove}>Username</Text>
//             <CustomeInput
//             placeholder="Username"
//             value={username}
//             style={styles.textBoxSign}
//             setValue={setUsername}
//             />

//             <Text style={{fontSize: 14, marginLeft: 12, marginTop: 30}}>Password</Text>
//             <CustomeInput
//             placeholder="Password"
//             value={password}
//             secureTextEntry={true}
//             setValue={setPassword}
//             style={styles.textBoxSign}
//             /> 

//             <CustomButton
//             text="Sign In"
//             onPress={onSignIn}
//             style={styles.button}
//             />

//         </View>
//       </View>

//       <View style={styles.bottom}>
//         <Text style={{fontSize:10, alignSelf:'center', top:14}}>SIMWAS MOBILE {'\u00A9'} 2022 | Divisi TIF - IT Development | All rights reversed</Text>
//       </View>
//     </View>
//   )
// }

// const styles = StyleSheet.create({
//   container:{
//     flex:1
//   },
//   top:{},
//   bottom:{
//     position:"absolute",
//     width: Dimensions.get('screen').width,
//     bottom:0,
//     backgroundColor:'#E6E6E6',
//     height:75,
//     padding:15,
//   },
//   main:{
//     flex:1,
//     flexDirection:"column",
//     padding:20,
//     marginTop:120
//   }, 
//   box:{
//     backgroundColor:'#1B98E08C',
//     height:80
//   },
//   boxheader:{
//     backgroundColor:'#1B98E046',
//     height:118,
//     marginVertical:-162
//   },
//   textAbove: {fontSize: 14, marginLeft: 12},
//   textBoxSign:{
//     flexDirection: "row",
//     height: 45,
//     marginHorizontal: 5,
//     marginTop: 5,
//     paddingHorizontal: 15,
//     borderRadius: 15,
//     backgroundColor: "#F5F5F6",
//     elevation: 2,
//   },
//   button:{
//     alignContent: "center",
//     justifyContent: "center",
//     color:"white",
//   }
// })


import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SuratTugas from "./src/screen/SuratTugas";
import TindakLanjutDone from "./src/screen/SuratTugas/TindakLanjutDone";
import DetailTindakLanjut from "./src/screen/DetailTindakLanjut";
import Login from "./src/screen/login/login";
import StackHeader from "./src/screen/StackHeader/StackHeader";
const Stack = createNativeStackNavigator();
export default function App() {
  return(
<NavigationContainer>
<Stack.Navigator 
          initialRouteName="TindakLanjut"
          headerMode="screen"
          screenOptions={{
             header:({scene,navigation})=>(
                 <StackHeader scene={scene} navigation={navigation}/>
             )
          
          }}
>
    {/* <Stack.Screen
      name="Login"
      component={Login}
      options={{
        headerShown: false,
      }}
    /> */}


    {/* <Stack.Screen
      name="TindakLanjut"
      component={SuratTugas}
      options={{
        // headerShown: false,
        headerTitle: "Tindak Lanjut"
      }}
    /> */}
  
    {/* <Stack.Screen 
      name="TindakLanjutDone" 
      component={TindakLanjutDone}
      options={{
        // headerShown: false,
        headerTitle: "Tindak Lanjut Done"
      }}
    /> */}

    {/* <Stack.Screen
      name="DetailTindakLanjut"
      component={DetailTindakLanjut}
      options={{
        // headerShown: false,
        headerTitle: "Tindak Lanjut Done"
      }}
    />   */}

    <Stack.Screen
                name="TindakLanjut"
                component={SuratTugas}
                initialParams={{'key':'value'}}
                options={
                    {headerTitle: "Sign In"}
    }/>
    <Stack.Screen
                name="TindakLanjutDone" 
                component={TindakLanjutDone}
                options={
                    {headerTitle: "Sign Up"}
    }/>
    <Stack.Screen
                name="DetailTindakLanjut"
                component={DetailTindakLanjut}
                options={
                    {headerTitle: "Sign Up"}
    }/>

</Stack.Navigator>
</NavigationContainer>
)
}




