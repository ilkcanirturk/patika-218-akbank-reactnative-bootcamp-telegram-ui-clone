import React from 'react'
import Home from './src/screens/Home';
import Chat from './src/screens/Chat';
import ThemeScreen from './src/screens/ThemeScreen';
import EditScreen from './src/screens/EditScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BottomNavigation from './src/navigation/BottomNavigation';

const Stack = createNativeStackNavigator();

const App = () => {
  
  
  
//created BottomTabNavigation in same level with Stack Navigation
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen 
          name="Home" 
          component={Home}
          options={{ headerShown : false}}
        />
        {/* BottomTabNav in same level with Stack Screens. So we can use Stack navigation and BottomTabNavigation in same time. */}
        <Stack.Screen 
          name="BottomNavigation" 
          component={BottomNavigation}
          options={{ 
            headerShown : false,
          }}
        />
        {/* Stack Navigation Screens */}
        <Stack.Screen name="Chat" component= {Chat} options= {{
          headerShown : false,
        }}/>
        <Stack.Screen name="ThemeScreen" component= {ThemeScreen} options={{
          headerTitle: "Change Theme"
        }}/>
        <Stack.Screen name="EditScreen" component= {EditScreen} options={{
          headerShown: false
        }}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App