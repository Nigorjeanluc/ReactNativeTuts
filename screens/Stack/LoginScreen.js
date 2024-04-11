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
import { useNavigation } from "@react-navigation/native"
// import Greet from './components/Greet'
// import Box from './components/Box'
// import CustomButton from './components/CustomButton/CustomButton'

// import pokemonList from './data.json'
// import groupedPokemonList from './grouped-data.json'
// import { NavigationContainer } from '@react-navigation/native'

const logoImg = require("../assets/adaptive-icon1.png") 
const logoImg2 = require("../assets/favicon.png")


// const App = () => {
//   return <View
//     style={{
//       flex: 1,
//       backgroundColor: "plum",
//       padding: 60
//     }} 
//   >
//     <Image
//       source={logoImg}
//       style={{
//         width: 300,
//         height: 300
//       }}
//     />
//     <Image
//       source={logoImg}
//       style={{
//         width: 300,
//         height: 300
//       }}
//     />
//     <Text>
//       <Text style={{ color: "white" }}>Hello,</Text>
//       <Text> World</Text>
//     </Text>
//     {/* <View style={{
//       width: 200,
//       height: 200,
//       backgroundColor: "lightblue"
//     }}></View>
//     <View style={{
//       width: 200,
//       height: 200,
//       backgroundColor: "black"
//     }}></View> */}
//   </View>
// }

export default function LoginScreen({ navigation, route }) {
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
        {/* <Text style={styles.logoTitle}>eKimina</Text> */}
        <Image
          source={require('../assets/adaptive-icon1.png')}
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
  logoTitle: {
    fontSize: 24
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
    height: 50,
    alignSelf: "center",
    marginBottom: 50,
    marginTop: 50
  },
  errorText: {
    color: "red",
    marginBottom: 10
  }
})
