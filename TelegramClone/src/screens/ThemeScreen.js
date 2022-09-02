import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import Octicons from 'react-native-vector-icons/Octicons';

const ThemeScreen = () => {
  return (
    <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', marginTop: 150}}>
      <TouchableOpacity style= {{ display: 'flex', height: 70, width: 100, backgroundColor: 'white', borderRadius: 25, borderColor: '#2AABEE', borderWidth: 2}}>
        <Text style={{ display: 'flex', alignSelf:'center', marginTop: 13, color: '#229ED9', fontSize: 28}}>Light</Text>
      </TouchableOpacity>
      <Octicons name= "arrow-switch" size= {70}/>
      <TouchableOpacity style= {{ display: 'flex', height: 70, width: 100, backgroundColor: '#403d3d', borderRadius: 25, borderColor: '#2AABEE', borderWidth: 2}}>
        <Text style={{ display: 'flex', alignSelf:'center', marginTop: 13, color: 'white', fontSize: 28}}>Dark</Text>
      </TouchableOpacity>
    </View>
  )
}

export default ThemeScreen