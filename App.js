import { useState, useEffect } from 'react'
import {
  View,
  Text,
  Image,
  ImageBackground,
  ScrollView,
  Button,
  Pressable,
  Modal,
  StatusBar,
  ActivityIndicator,
  Alert,
  StyleSheet,
  Dimensions,
  useWindowDimensions,
  SafeAreaView,
  Platform,
  FlatList,
  SectionList,
  TextInput,
  Switch,
  KeyboardAvoidingView
} from 'react-native'
import Greet from './components/Greet'
import Box from './components/Box'
import CustomButton from './components/CustomButton/CustomButton'

import pokemonList from './data.json'
import groupedPokemonList from './grouped-data.json'

const logoImg = require("./assets/adaptive-icon.png") 
const logoImg2 = require("./assets/favicon.png")

/*********** View Component *****************/

// export default function App() {
//   return <View style={{
//     flex : 1,
//     backgroundColor: "plum"
//   }}>
//     <View style={{
//       width: "100%",
//       height: 200,
//       backgroundColor: "lightblue"
//     }}></View>
//     <View style={{
//       width: "100%",
//       height: 200,
//       backgroundColor: "lightgreen"
//     }}></View>
//   </View>
// }

/*********** Text Component *****************/

// export default function App() {
//   return <View style={{
//         flex : 1,
//         backgroundColor: "plum",
//         padding: 100
//       }}>
//         <Text style={{ fontSize: 24 }}>
//           <Text style={{ color: "white" }}>Hello</Text> World
//         </Text>
//       </View>
// }

/*********** Image Component *****************/

// export default function App() {
//   return <View style={{
//         flex : 1,
//         backgroundColor: "plum",
//         paddingTop: 50,
//         paddingLeft: 30
//       }}>
//         <ImageBackground style={{
//           flex : 1
//         }} source={logoImg}>
//           <Text>Image Text</Text>
//         </ImageBackground>
//         <Image
//           style={{width: 300, height: 300}}
//           source={logoImg}
//         />
//         <Image
//           style={{width: 300, height: 300}}
//           source={{uri: "https://picsum.photos/300"}}
//         />
//       </View>
// }

/*********** ScrollView Component *****************/

// export default function App() {
//   return (
//     <View
//       style={{
//         flex: 1,
//         backgroundColor: "skyblue",
//         padding:60
//       }}
//     >
//       <ScrollView>
//         <Text 
//           style={{
//             marginBottom: 20,
//             fontSize: 34,
//             fontWeight: "bold"
//           }}
//         >IMAGE TEXT</Text>
//         <Image source={logoImg2} style={{ width: 100, height: 100 }} />
//         <Text>
//           lorem ipsum dolor sit am, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
//           lorem ipsum dolor sit am, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
//           lorem ipsum dolor sit am, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
//           lorem ipsum dolor sit am, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
//           lorem ipsum dolor sit am, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
//           lorem ipsum dolor sit am, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
//           lorem ipsum dolor sit am, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
//           lorem ipsum dolor sit am, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
//           lorem ipsum dolor sit am, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
//           lorem ipsum dolor sit am, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
//           lorem ipsum dolor sit am, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
//           lorem ipsum dolor sit am, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
//           lorem ipsum dolor sit am, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
//           lorem ipsum dolor sit am, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
//           lorem ipsum dolor sit am, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
//           lorem ipsum dolor sit am, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
//           lorem ipsum dolor sit am, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
//           lorem ipsum dolor sit am, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
//           lorem ipsum dolor sit am, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
//           lorem ipsum dolor sit am, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
//           lorem ipsum dolor sit am, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
//         </Text>
//         <Image source={logoImg} style={{ width: 300, height: 300 }} />
//         <Image source={logoImg} style={{ width: 300, height: 300 }} />
//         <Image source={logoImg} style={{ width: 300, height: 300 }} />
//       </ScrollView>
//     </View>
//   )
// }

/*********** Button & Pressable Components *****************/

// export default function App() {
//   return (
//     <View style={{
//       flex: 1,
//       backgroundColor: "plum",
//       padding: 60
//     }}>
//       <ScrollView>  
//         <Button
//           title="Press Me"
//           color="midnightblue"
//           onPress={() => console.log("Button pressed")}
//           disabled={true}
//         />
//         <Text 
//           style={{
//             marginBottom: 20,
//             fontSize: 34,
//             fontWeight: "bold"
//           }}
//         >IMAGE TEXT</Text>
//         <Pressable
//           onPress={() => console.log("Image pressed")}
//         >
//           <Image source={logoImg2} style={{ width: 100, height: 100 }} />
//         </Pressable>
//         <Pressable
//           // onPress={() => console.log("Text pressed")}
//           // onPressIn={() => console.log("Text pressed in")}
//           // onPressOut={() => console.log("Text pressed out")}
//           // onLongPress={() => console.log("Text pressed long press")}
//         >
//           <Text>
//             lorem ipsum dolor sit am, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
//             lorem ipsum dolor sit am, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
//             lorem ipsum dolor sit am, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
//             lorem ipsum dolor sit am, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
//             lorem ipsum dolor sit am, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
//             lorem ipsum dolor sit am, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
//             lorem ipsum dolor sit am, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
//             lorem ipsum dolor sit am, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
//             lorem ipsum dolor sit am, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
//             lorem ipsum dolor sit am, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
//             lorem ipsum dolor sit am, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
//             lorem ipsum dolor sit am, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
//             lorem ipsum dolor sit am, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
//             lorem ipsum dolor sit am, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
//             lorem ipsum dolor sit am, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
//             lorem ipsum dolor sit am, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
//             lorem ipsum dolor sit am, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
//             lorem ipsum dolor sit am, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
//             lorem ipsum dolor sit am, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
//             lorem ipsum dolor sit am, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
//             lorem ipsum dolor sit am, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
//           </Text>
//         </Pressable>
//         <Image source={logoImg} style={{ width: 300, height: 300 }} />
//         <Image source={logoImg} style={{ width: 300, height: 300 }} />
//         <Image source={logoImg} style={{ width: 300, height: 300 }} />
//       </ScrollView>
//     </View>
//   )
// }

/*********** Modal Component *****************/

// export default function App() {
//   const [isModalVisible, setIsModalVisible] = useState(false)

//   return (
//     <View
//       style={{
//         flex: 1,
//         backgroundColor: "plum",
//         padding: 60
//       }}
//     >
//       <Button
//         title="Press Me"
//         color="midnightblue"
//         onPress={() => setIsModalVisible(true)}
//         disabled={false}
//       />

//       <Modal
//         visible={isModalVisible}
//         onRequestClose={() => setIsModalVisible(false)} // on iOS user can use gesture
//         animationType="slide" // value can be either default|slide|fade
//         presentationStyle="pageSheet" // value can be either default is fullscreen|formSheet|pageSheet but only affects iOS but not Android
//       >
//         <View
//           style={{
//             flex: 1,
//             backgroundColor: "lightblue",
//             padding: 60
//           }}
//         >
//           <Text>Modal content</Text>
//           <Button
//             title="Close"
//             color="midnightblue"
//             onPress={() => setIsModalVisible(false)}
//           />
//         </View>
//       </Modal>
//     </View>
//   )
// }

/*********** StatusBar Component *****************/

// export default function App() {
//   return (
//     <View
//       style={{
//         flex: 1,
//         backgroundColor: "plum",
//         padding: 60
//       }}
//     >
//       <StatusBar
//         backgroundColor="lightgreen"
//         barStyle="dark-content" // default|dark-content|light-content
//         hidden={false}
//       />
//     </View>
//   )
// }

/*********** ActivityIndicator Component *****************/

// export default function App() {
//   return (
//     <View
//       style={{
//         flex: 1,
//         backgroundColor: "skyblue",
//         padding: 60
//       }}
//     >
//       <ActivityIndicator />
//       <ActivityIndicator size="large" />
//       <ActivityIndicator size="large" color="midnightblue" animating={true} />
//     </View>
//   )
// }

/*********** Alert Component *****************/

// export default function App() {
//   return (
//     <View
//       style={{
//         flex: 1,
//         backgroundColor: "skyblue",
//         padding: 60
//       }}
//     >
//       <Button
//         title="Alert"
//         onPress={() => Alert.alert("Invalid data!")}
//       />
//       <Button
//         title="Alert 2"
//         onPress={() => Alert.alert("Invalid data!", "DOB incorrect")}
//       />
//       <Button
//         title="Alert 3"
//         onPress={() => Alert.alert("Invalid data!", "DOB incorrect", [
//           {
//             text: "Cancel",
//             onPress: () => console.log("Cancel pressed"),
//           },
//           {
//             text: "OK",
//             onPress: () => console.log("OK pressed"),
//           }
//         ])}
//       />
//     </View>
//   )
// }

/*********** Custom Component *****************/

// export default function App() {
//   return (
//     <View
//       style={{
//         flex: 1,
//         backgroundColor: "skyblue",
//         padding: 60
//       }}
//     >
//       <Greet name="Igor Ndiramiye" />
//       <Greet name="Sam Shyaka" />
//     </View>
//   )
// }

/*********** StyleSheet API *****************/

// export default function App() {
//   return (
//     <View
//       style={styles.container}
//     >
//       <Text style={styles.title}>StyleSheet API</Text>
//       <View style={styles.darkMode}>
//         <Text style={styles.darkModeText}>
//           Style inheritance <Text style={styles.boldText}>in bold</Text>
//         </Text>
//       </View>
//       <View style={[styles.lightblueBg, styles.box, styles.boxShadow]}>
//         <Text style={{borderRadius: 10, backgroundColor: "red"}}>Lightblue box</Text>
//       </View>
//       <View style={[styles.box, styles.lightgreenBg, styles.androidShadow]}>
//         <Text>Lightgreen box</Text>
//       </View>
//     </View>
//   )
// }

// boxShadow works on iOS devices only to use shadow on android we use elevation
// borderRadius on Text component applies only on Android devices
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "plum",
//     padding: 60
//   },
//   darkMode: {
//     backgroundColor: "black",
//   },
//   darkModeText: {
//     color: "white"
//   },
//   boldText: {
//     fontWeight: "bold"
//   },
//   title: {
//     marginBottom: 20,
//     fontSize: 34,
//     fontWeight: "bold"
//   },
//   box: {
//     width: 250,
//     height: 250,
//     // padding: 10,
//     paddingHorizontal: 10,
//     paddingVertical: 20,
//     // margin: 10,
//     marginVertical: 10,
//     backgroundColor: "pink",
//     // border: "2px solid purple" doesn't work in react native
//     borderWidth: 2,
//     borderColor: "purple",
//     borderStyle: "solid",
//     borderRadius: 10
//   },
//   lightblueBg: {
//     backgroundColor: "lightblue",
//   },
//   lightgreenBg: {
//     backgroundColor: "lightgreen",
//   },
//   boxShadow: {
//     shadowColor: "#333333",
//     shadowOffset: {
//       width: 6,
//       height: 6
//     },
//     shadowOpacity: 0.6,
//     shadowRadius: 4
//   },
//   androidShadow: {
//     shadowColor: "blue",
//     elevation: 10
//   }
// })

/*********** Layout in ReactNative *****************/

// export default function App() {
//   return (
//     <View style={styles.container}>
//       {/* <Box
//         style={{
//           backgroundColor: "#8e9b00",
//           alignSelf: "flex-start"
//         }}
//       >Box 1</Box>
//       <Box
//         style={{
//           backgroundColor: "#b65d1f",
//           alignSelf: "flex-end"
//         }}
//       >Box 2</Box>
//       <Box
//         style={{
//           backgroundColor: "#1c4c56",
//           alignSelf: "center"
//         }}
//       >Box 3</Box> */}
//       <Box
//         style={{
//           backgroundColor: "#8e9b00",
//           // flexShrink: 1,
//           // top: 75,
//           // left:75
//         }}
//       >Box 1</Box>
//       <Box
//         style={{
//           backgroundColor: "#b65d1f",
//           // flexShrink: 18
//         }}
//       >Box 2</Box>
//       <Box
//         style={{
//           // flex: 1,
//           backgroundColor: "#1c4c56",
//           // flexBasis: 140
//         }}
//       >Box 3</Box>
//       <Box
//         style={{
//           // flex: 1,
//           backgroundColor: "#ab9156",
//           // height: 140,
//           // position: "absolute",
//           // top: 100,
//           // left: 100
//         }}
//       >Box 4</Box>
//       <Box
//         style={{
//           backgroundColor: "#6b0803",
//         }}
//       >Box 5</Box>
//       <Box
//         style={{
//           backgroundColor: "#1c4c56",
//         }}
//       >Box 6</Box>
//       <Box style={{ backgroundColor: "#b95f21"}}>Box 7</Box>
//     </View>
//     // <View style={{ backgroundColor: "plum", flex: 1 }}></View>
//   )
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     // flexDirection: "row", // values column|column-reverse|row|row-reverse
//     // justifyContent: "center", // values flex-start|flex-end|center|space-between|space-around|space-evenly
//     // alignItems: "flex-start", // values stretch|flex-start|flex-end|center|baseline
//     // flexWrap: "wrap", // values nowrap|wrap|wrap-reverse
//     // rowGap: 20,
//     // columnGap: 30,
//     // gap: 18, // gap combines rowGap and columnGap
//     // height: 300,
//     // width: 300,
//     marginTop: 64,
//     borderWidth: 6,
//     borderColor: "red"
//   }
// })

/*********** Dimensions API & Responsiveness in ReactNative *****************/

// export default function App() {
//   // Detect windows dimensions change events
//   const [dimensions, setDimensions] = useState({
//     window: Dimensions.get('window')
//   })

//   useEffect(() => {
//     const subscription = Dimensions.addEventListener("change", ({ window }) => {
//       setDimensions({ window })
//     })

//     return () => subscription?.remove()
//   })

//   const { window } = dimensions
//   const windowWidth = window.width
//   const windowHeight = window.height

//   return (
//     <View style={styles.container}>
//       <View style={[
//         styles.box,
//         {
//           width: windowWidth > 500 ? "70%" : "90%",
//           height: windowHeight > 600 ? "60%" : "90%",
//         }
//       ]}>
//         <Text style={{
//           fontSize: windowWidth > 500 ? 50 :24
//         }}>Welcome!</Text>
//       </View>
//     </View>
//   )
// }

// // const windowWidth = Dimensions.get("window").width
// // const windowHeight = Dimensions.get("window").height

// // console.log({windowWidth, windowHeight})

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "plum",
//     alignItems: "center",
//     justifyContent: "center",
//   },
//   box: {
//     // width: windowWidth > 500 ? "70%" : "90%",
//     // height: windowHeight > 600 ? "60%" : "90%",
//     backgroundColor: "lightblue",
//     alignItems: "center",
//     justifyContent: "center",
//   },
//   text: {
//     // fontSize: windowWidth > 500 ? 50 : 24,
//   }
// })

/*********** useWindowDimensions & Responsiveness in ReactNative *****************/

// export default function App() {
//   const windowWidth = useWindowDimensions().width
//   const windowHeight = useWindowDimensions().height
//   return (
//     <View style={styles.container}>
//       <View style={[
//         styles.box,
//         {
//           width: windowWidth > 500 ? "70%" : "90%",
//           height: windowHeight > 600 ? "60%" : "90%",
//         }
//       ]}>
//         <Text style={{
//           fontSize: windowWidth > 500 ? 50 :24
//         }}>Welcome!</Text>
//       </View>
//     </View>
//   )
// }

// const windowWidth = Dimensions.get("window").width
// const windowHeight = Dimensions.get("window").height

// console.log({windowWidth, windowHeight})

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "plum",
//     alignItems: "center",
//     justifyContent: "center",
//   },
//   box: {
//     // width: windowWidth > 500 ? "70%" : "90%",
//     // height: windowHeight > 600 ? "60%" : "90%",
//     backgroundColor: "lightblue",
//     alignItems: "center",
//     justifyContent: "center",
//   },
//   text: {
//     // fontSize: windowWidth > 500 ? 50 : 24,
//   }
// })

/*********** SafeAreaView Component *****************/

// export default function App() {
//   return (
//     <SafeAreaView style={styles.safeContainer}>
//       <View style={styles.container}>
//         <View style={styles.box}>
//           <Text style={styles.text}>Welcome!</Text>
//         </View>
//       </View>
//     </SafeAreaView>
//   )
// }

// const styles = StyleSheet.create({
//   safeContainer: {
//     flex: 1,
//     backgroundColor: "plum"
//   },
//   container: {
//     flex: 1,
//     backgroundColor: "skyblue",
//   },
//   box: {
//     padding: 20
//   },
//   text: {
//     fontSize: 24,
//     fontWeight: "bold",
//     textAlign: "center"
//   }
// })

/*********** Platform Specific Code *****************/

// export default function App() {
//   return (
//     <SafeAreaView style={styles.safeContainer}>
//       <View style={styles.container}>
//         <View style={styles.box}>
//           <Text style={styles.text}>Welcome!</Text>
//           <CustomButton title="Press me" onPress={() => alert("Pressed")} />
//         </View>
//       </View>
//     </SafeAreaView>
//   )
// }

// const styles = StyleSheet.create({
//   safeContainer: {
//     flex: 1,
//     backgroundColor: "plum"
//   },
//   container: {
//     flex: 1,
//     backgroundColor: "plum",
//     paddingTop: Platform.OS === "android" ? 25 : 0,
//   },
//   box: {
//     padding: 20
//   },
//   text: {
//     ...Platform.select({
//       ios: {
//         color: "blue",
//         fontSize: 24,
//         fontStyle: "italic",
//       },
//       android: {
//         color: "purple",
//         fontSize: 30,
//         // fontStyle: "italic"
//       }
//     }),
//     fontWeight: "bold",
//     textAlign: "center"
//   }
// })

/*********** Way One to do a lists of items *****************/

// export default function App() {
//   return (
//     <SafeAreaView style={styles.container}>
//       <ScrollView style={styles.scrollView}>
//         {
//           pokemonList.map(pokemon => {
//             return (
//               <View style={styles.card} key={pokemon.id}>
//                 <Text style={styles.cardText}>{pokemon.type}</Text>
//                 <Text style={styles.cardText}>{pokemon.name}</Text>
//               </View>
//             );
//           })
//         }
//       </ScrollView>
//     </SafeAreaView>
//   )
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#f5f5f5",
//     paddingTop: StatusBar.currentHeight,
//   },
//   scrollView: {
//     paddingHorizontal: 16
//   },
//   card: {
//     backgroundColor: "white",
//     padding: 16,
//     borderRadius: 8,
//     borderWidth: 2,
//     marginBottom: 16,
//   },
//   cardText: {
//     fontSize: 30,
//   }
// })

/*********** (Flatlist Component) Way Two to do a lists of items *****************/

// FlatList component renders only the items currently in view,
// making it highly perfomant for long lists
// export default function App() {
//   return (
//     <SafeAreaView style={styles.container}>
//       {/* <ScrollView style={styles.scrollView}>
//         {
//           pokemonList.map(pokemon => {
//             console.log(pokemon.id)
//             return (
//               <View style={styles.card} key={pokemon.id}>
//                 <Text style={styles.cardText}>{pokemon.type}</Text>
//                 <Text style={styles.cardText}>{pokemon.name}</Text>
//               </View>
//             );
//           })
//         }
//       </ScrollView> */}
//       <View style={styles.scrollView}>
//         {/* <FlatList
//           data = {pokemonList}
//           renderItem = {({item}) => {
//             return (
//               <View style={styles.card} key={item.id}>
//                 <Text style={styles.cardText}>{item.type}</Text>
//                 <Text style={styles.cardText}>{item.name}</Text>
//               </View>
//             )
//           }}
//           horizontal = {true}
//           keyExtractor={(item, index) => item.id.toString() }
//           ItemSeparatorComponent={<View style={{width: 16}} />}
//         /> */}
//         <FlatList
//           // data={pokemonList}
//           renderItem={({item}) => {
//             return (
//               <View style={styles.card} key={item.id}>
//                 <Text style={styles.cardText}>{item.type}</Text>
//                 <Text style={styles.cardText}>{item.name}</Text>
//               </View>
//             )
//           }}
          
//           keyExtractor={(item, index) => item.id.toString() }
//           ItemSeparatorComponent={<View style={{height: 16}} />}
//           ListEmptyComponent={
//             <View style={styles.emptyBox}>
//               <Text style={styles.emptyText}>No items found</Text>
//             </View>
//           }
//           ListHeaderComponent={<Text style={styles.headerText}>Pokemon List</Text>}
//           ListFooterComponent={<Text style={styles.footerText}>End of List</Text>}
//         />
//       </View>
//     </SafeAreaView>
//   )
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#f5f5f5",
//     paddingTop: StatusBar.currentHeight,
//   },
//   scrollView: {
//     paddingHorizontal: 16
//   },
//   card: {
//     backgroundColor: "white",
//     padding: 16,
//     borderRadius: 8,
//     borderWidth: 2,
//     // marginBottom: 16,
//   },
//   cardText: {
//     fontSize: 30,
//   },
//   headerText: {
//     fontSize: 24,
//     textAlign: "center",
//     marginBottom: 12,
//   },
//   footerText: {
//     fontSize: 18,
//     textAlign: "center",
//     marginTop: 12,
//     marginBottom: 12,
//   },
//   emptyBox: {
//     flex: 1,
//     alignItems: "center",
//     justifyContent: "center",
//   },
//   emptyText: {
//     fontSize: 24,
//   }
// })

/*********** (SectionList Component) Way Three to do a lists of items *****************/

// export default function App() {
//   return (
//     <SafeAreaView style={styles.container}>
//       <View style={styles.scrollView}>
//         {/* <FlatList
//           data={pokemonList}
//           renderItem={({item}) => {
//             return (
//               <View style={styles.card} key={item.id}>
//                 <Text style={styles.cardText}>{item.type}</Text>
//                 <Text style={styles.cardText}>{item.name}</Text>
//               </View>
//             )
//           }}
          
//           keyExtractor={(item, index) => item.id.toString() }
//           ItemSeparatorComponent={<View style={{height: 16}} />}
//           ListEmptyComponent={
//             <View style={styles.emptyBox}>
//               <Text style={styles.emptyText}>No items found</Text>
//             </View>
//           }
//           ListHeaderComponent={<Text style={styles.headerText}>Pokemon List</Text>}
//           ListFooterComponent={<Text style={styles.footerText}>End of List</Text>}
//         /> */}
//         <SectionList
//           sections={groupedPokemonList}
//           renderItem={({item}) => {
//             return (
//               <View style={styles.card}>
//                 <Text style={styles.cardText}>{item}</Text>
//               </View>
//             )
//           }}
//           renderSectionHeader={({section}) => (
//             <Text style={styles.sectionHeaderText}>{section.type}</Text>
//           )}
//           ItemSeparatorComponent={() => <View style={{height: 16}} />}
//           SectionSeparatorComponent={() => <View style={{height: 16}} />}
//         />
//       </View>
//     </SafeAreaView>
//   )
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#f5f5f5",
//     paddingTop: StatusBar.currentHeight,
//   },
//   scrollView: {
//     paddingHorizontal: 16
//   },
//   card: {
//     backgroundColor: "white",
//     padding: 16,
//     borderRadius: 8,
//     borderWidth: 2,
//     // marginBottom: 16,
//   },
//   cardText: {
//     fontSize: 30,
//   },
//   headerText: {
//     fontSize: 24,
//     textAlign: "center",
//     marginBottom: 12,
//   },
//   footerText: {
//     fontSize: 18,
//     textAlign: "center",
//     marginTop: 12,
//     marginBottom: 12,
//   },
//   sectionHeaderText: {
//     backgroundColor: "white",
//     fontSize: 24,
//     fontWeight: "bold",
//   }
// })

/*********** TextInput component && Multiline TextInput && Switch component *****************/

// export default function App() {
//   const [name, setName] = useState("")
//   const [isDarkMode, setIsDarkMode] = useState(false)

//   isDarkMode ? console.log("ON") : console.log("OFF")
//   return (
//     <SafeAreaView style={styles.container}>
//       <TextInput
//         style={styles.input}
//         value={name}
//         onChangeText={setName}
//         placeholder='email@example.com'
//         autoCorrect={false}
//         autoCapitalize='none'
//         // secureTextEntry={false} // For passwords
//         // keyboardType="numeric"
//       />
//       <TextInput
//         style={[styles.input, styles.multilineText]}
//         placeholder='message'
//         multiline={true}
//       />
//       <Text style={styles.text}>My name is {name}</Text>
//       <View style={styles.switchContainer}>
//         <Text style={styles.text}>Dark Mode</Text>
//         <Switch
//           value={isDarkMode}
//           onValueChange={() => setIsDarkMode((previousState) => !previousState)}
//           trackColor={{
//             false: "#767577",
//             true: "lightblue",
//           }}
//           thumbColor= "#f4f3f4"
//         />
//       </View>
//     </SafeAreaView>
//   )
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     paddingTop: StatusBar.currentHeight
//   },
//   input: {
//     height: 40,
//     margin: 12,
//     padding: 10,
//     borderWidth: 1
//   },
//   text: {
//     fontSize: 30,
//     padding: 10
//   },
//   multilineText: {
//     minHeight: 100,
//     textAlignVertical: "top"
//   },
//   switchContainer: {
//     flexDirection: "row",
//     alignItems: "center",
//     justifyContent: "space-between",
//     paddingHorizontal: 10,
//   }
// });

/*********** Login Form && Validation && Submission *******************/

export default function App() {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [errors, setErrors] = useState({})

  const validateForm = () => {
    let errors = {}

    if(!username) errors.username = "Username is required"
    if(!password) errors.password = "Password is required"

    setErrors(errors)
    return Object.keys(errors).length === 0
  }

  const handleSubmit = () => {
    if(validateForm()) {
      console.log(`Username: ${username}`, `Password: ${password}`)
      setUsername("")
      setPassword("")
      setErrors({})
    }
  }

  return (
    <KeyboardAvoidingView
      behavior='padding'
      keyboardVerticalOffset={Platform.OS === 'ios' ? 100 : 0}
      style={styles.container}
    >
      <View style={styles.form}>
        <Image
          source={require('./assets/adaptive-icon.png')}
          style={styles.image}
        />
        <Text style={styles.label}>Username</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your username"
          value={username}
          onChangeText={setUsername}
        />
        {
          errors.username ? <Text style={styles.errorText}>{errors.username}</Text> : null
        }
        <Text style={styles.label}>Password</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
        {
          errors.password ? <Text style={styles.errorText}>{errors.password}</Text> : null
        }
        <Button title="Login" onPress={handleSubmit} />
      </View>
    </KeyboardAvoidingView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 20,
    backgroundColor: "#f5f5f5"
  },
  form: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10,
    shadowColor: "black",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
    fontWeight: "bold",
  },
  input: {
    height: 40,
    borderColor: "#ddd",
    borderWidth: 1,
    marginBottom: 15,
    padding: 10,
    borderRadius: 5,
  },
  image: {
    width: 200,
    height: 400,
    alignSelf: "center",
    marginBottom: 50
  },
  errorText: {
    color: "red",
    marginBottom: 10
  }
})