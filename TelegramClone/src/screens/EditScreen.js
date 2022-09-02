import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput } from 'react-native'
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/core';
import { Picker } from '@react-native-picker/picker';
import AntDesign from "react-native-vector-icons/AntDesign";

// Same like Login Screen. It needs to develop.
const EditScreen = () => {

  const [firstname, onChangeName] = React.useState("");
  const [lastname, onChangeSurname] = React.useState("");
  const [nickname, onChangeNickname] = React.useState("");
  const [number, onChangeNumber] = React.useState(null);
  const [selectedCountry, setSelectedCountry] = useState();

  const navigation = useNavigation();
  const onPress = () => {
    navigation.goBack();
  }

  return (
    <View style={styles.container1}>
      <Image style={styles.imageStyle} source={require('../../assets/telegram.png')} />
      <Text style={styles.textStyle} >EDIT ACCOUNT</Text>
      <View style={styles.pickerStyle}>
        <Picker
          selectedValue={selectedCountry}
          onValueChange={(itemValue) =>
            setSelectedCountry(itemValue)
          }>
          <Picker.Item label="+90" value="TR" />
          <Picker.Item label="+44" value="GB" />
          <Picker.Item label="+54" value="AR" />
          <Picker.Item label="+32" value="BE" />
          <Picker.Item label="+86" value="CN" />
          <Picker.Item label="+998" value="UZ" />
        </Picker>
      </View>
      <TextInput
        style={styles.input1}
        onChangeText={onChangeNumber}
        value={number}
        placeholder=" Phone Number"
        keyboardType="numeric"
      />
      <TextInput
        placeholder=' Name'
        style={styles.input}
        onChangeText={onChangeName}
        value={firstname}
      />
      <TextInput
        placeholder=' Surname'
        style={styles.input}
        onChangeText={onChangeSurname}
        value={lastname}
      />
      <TextInput
        placeholder=' User Name'
        style={styles.input}
        onChangeText={onChangeNickname}
        value={nickname}
      />
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.buttonStyle} onPress={onPress}>
          <Text style={styles.buttonText}>SAVE</Text>
          <AntDesign name="caretright" size={24} style={styles.iconStyle} />
        </TouchableOpacity>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.buttonStyle2} onPress={onPress}>
          <AntDesign name="leftcircle" size={45} style={styles.iconBack} />
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default EditScreen

const styles = StyleSheet.create({
  container1: {
    backgroundColor: 'lightblue',
    width: '100%',
    height: '100%'
  },
  buttonStyle: {
    flexDirection: 'row',
    width: 140,
    height: 60,
    backgroundColor: '#229ED9',
    borderRadius: 25,
    alignSelf: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: '#2AABEE'
  },
  imageStyle: {
    width: 150,
    height: 150,
    position: 'absolute',
    marginTop: 50,
    alignSelf: 'center'
  },
  textStyle: {
    position: 'absolute',
    alignSelf: 'center',
    marginTop: 210,
    fontSize: 24
  },
  buttonContainer: {
    marginTop: 40,
    alignSelf: 'center'
  },
  input1: {
    borderTopRightRadius: 15,
    borderBottomRightRadius: 15,
    marginLeft: 116,
    marginTop: 270,
    justifyContent: 'center',
    alignSelf: 'center',
    width: 150,
    height: 55,
    backgroundColor: 'white',
  },
  input: {
    marginTop: 15,
    width: 200,
    height: 40,
    position: 'relative',
    backgroundColor: 'white',
    justifyContent: 'center',
    alignSelf: 'center',
    borderRadius: 15
  },
  buttonText: {
    color: '#FFFFFF',
    alignSelf: 'center',
    fontSize: 20,
  },
  pickerStyle: {
    borderTopLeftRadius: 15,
    borderBottomLeftRadius: 15,
    width: 120,
    height: 55,
    position: 'absolute',
    marginTop: 270,
    marginLeft: 58,
    backgroundColor: 'white',
  },
  iconStyle: {
    paddingLeft: 15,
    marginTop: 17
  },
  buttonStyle2: {
    display: 'flex',
    width: 50,
    height: 50,
    backgroundColor: 'white',
    borderRadius: 50,
    alignSelf: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: 'white',
    marginBottom: 250,
  },
  iconBack: {
    alignSelf: 'center'
  }

})