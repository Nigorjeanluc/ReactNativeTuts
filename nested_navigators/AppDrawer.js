import { NavigationContainer } from '@react-navigation/native'
import { createDrawerNavigator } from '@react-navigation/drawer'
import DashboardScreen from '../screens/Drawer/DashboardScreen'
import SettingsScreen from '../screens/Drawer/SettingsScreen'

const Drawer = createDrawerNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen
          name="Dashboard"
          component={DashboardScreen}
          options={{
            title: "My Dashboard", // Header title and Drawer label
            // If you want a different Drawer label
            drawerLabel: "Dashboard label",
            drawerActiveTintColor: "#333",
            drawerActiveBackgroundColor: "lightblue",
            drawerContentStyle: {
              backgroundColor: "#c6cbef",
            } 
          }}
        />
        <Drawer.Screen
          name="Settings"
          component={SettingsScreen}
        />

      </Drawer.Navigator>
    </NavigationContainer>
  )
}
