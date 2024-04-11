import { createNativeStackNavigator } from "@react-navigation/native-stack"
import HomeScreen from '../screens/Stack/HomeScreen'
import AboutScreen from '../screens/Stack/AboutScreen'
import LoginScreen from '../screens/Stack/LoginScreen'
import SignupScreen from '../screens/Stack/SignupScreen'
import LoginButton from '../components/Auth/LoginButton'
import SignupButton from '../components/Auth/SignupButton'
const Stack = createNativeStackNavigator()

export const AboutStack = () => {
  return (
    <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerStyle: {
            backgroundColor: "#000"
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
          },
          headerRight: () => <SignupButton />
        }}
      >
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen
          name="About"
          component={AboutScreen}
          // Initial route parameters
          initialParams={{
            name: "Guest"
          }}
          // options={({ route }) => ({
          //   title: route.params.name,
          // })}
        />
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{
            title: "Login",
          }}
        />
        <Stack.Screen
          name="Signup"
          component={SignupScreen}
          options={{
            title: "Sign up",
            headerStyle: {
              backgroundColor: "#000"
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: "bold",
            },
            headerRight: () => <LoginButton />
          }}
        />
      </Stack.Navigator>
  )
}

export default function App() {
  return (
    <NavigationContainer>
      <AboutStack />
      {/* Rest of your app code */}
    </NavigationContainer>
  )
}