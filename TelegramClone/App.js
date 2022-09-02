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
  
  
  

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen 
          name="Home" 
          component={Home}
          options={{ headerShown : false}}
        />
        <Stack.Screen 
          name="BottomNavigation" 
          component={BottomNavigation}
          options={{ 
            headerShown : false,
          }}
        />
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