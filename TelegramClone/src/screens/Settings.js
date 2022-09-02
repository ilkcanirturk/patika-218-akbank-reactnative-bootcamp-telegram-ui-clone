import { StyleSheet, Text, View, Image, Pressable } from 'react-native'
import React from 'react';
import { useNavigation } from '@react-navigation/native';



//Doesn't changes anything about user. It needs to be develop.
const Settings = () => {
  const { navigate } = useNavigation();
  return (
    <View>
      <Image style={styles.imageStyle} source={{uri: 'https://picsum.photos/id/231/200/300'}}/>
      <Text style={styles.textName}>İlkcan</Text>
      <View style= {styles.containerInfo}>
        <Text style= {styles.textInfo}>
            +90 555 333 2222
        </Text>
        <Text style= {styles.textInfo}>
            •
        </Text>
        <Text style= {styles.textInfo}>
            @GeraltOfRivia
        </Text>
      </View>
      <Pressable onPress={() => navigate('Home')} style={styles.logoutButtonStyle}>
        <Text style={styles.logoutTextStyle}>Log Out</Text>
      </Pressable>
    </View>
  )
}

export default Settings

const styles = StyleSheet.create({
    imageStyle: {
        backgroundColor: 'gray', 
        height: 120, 
        width: 120, 
        borderRadius: 75, 
        marginVertical: 20, 
        alignSelf: 'center'
    },
    textName: {
        fontSize: 26, 
        fontWeight: 'bold', 
        color: 'black', 
        alignSelf: 'center'
    },
    containerInfo: {
        flexDirection: 'row', 
        justifyContent: 'space-around', 
        marginHorizontal: 55,
        marginTop: 5
    },
    textInfo: {
        fontSize: 16, 
        color: 'gray'
    },
    logoutButtonStyle: {
      width: 70, 
      height: 40, 
      backgroundColor: '#229ED9', 
      justifyContent: 'center', 
      alignSelf: 'center', 
      marginTop: 250, 
      borderRadius: 25
    },
    logoutTextStyle: {
      justifyContent: 'center', 
      alignSelf: 'center', 
      color: 'white'
    }
})