import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import Octicons from 'react-native-vector-icons/Octicons';

const ThemeScreen = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style= {styles.buttonLight}>
        <Text style={styles.textLight}>Light</Text>
      </TouchableOpacity>
      <Octicons name= "arrow-switch" size= {70}/>
      <TouchableOpacity style= {styles.buttonDark}>
        <Text style={styles.textDark}>Dark</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    display: 'flex', 
    flexDirection: 'row', 
    justifyContent: 'space-around', 
    marginTop: 150
  },
  buttonLight: {
    display: 'flex', 
    height: 70, 
    width: 100, 
    backgroundColor: 'white', 
    borderRadius: 25, 
    borderColor: '#2AABEE', 
    borderWidth: 2
  },
  textLight: {
    display: 'flex', 
    alignSelf:'center', 
    marginTop: 13, 
    color: '#229ED9', 
    fontSize: 28
  },
  buttonDark: {
    display: 'flex', 
    height: 70, 
    width: 100, 
    backgroundColor: '#403d3d', 
    borderRadius: 25, 
    borderColor: '#2AABEE', 
    borderWidth: 2
  },
  textDark: {
    display: 'flex', 
    alignSelf:'center', 
    marginTop: 13, 
    color: 'white', 
    fontSize: 28
  }
})

export default ThemeScreen