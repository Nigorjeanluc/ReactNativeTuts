import { View, Text, Pressable } from 'react-native'
import React from 'react'
import { useNavigation } from "@react-navigation/native"

const SignupButton = () => {
  const navigation = useNavigation()
  return (
    <Pressable onPress={() => navigation.navigate("Signup")}>
      <Text style={{
        color: "#fff",
        fontSize: 16
      }}>Sign up</Text>
    </Pressable>
  )
  
}

export default SignupButton