import { View, Text, Pressable } from 'react-native'
import React from 'react'
import { useNavigation } from "@react-navigation/native"

const LoginButton = () => {
  const navigation = useNavigation()
  return (
    <Pressable onPress={() => navigation.navigate("Login")}>
      <Text style={{
        color: "#fff",
        fontSize: 16
      }}>Login</Text>
    </Pressable>
  )
  
}

export default LoginButton