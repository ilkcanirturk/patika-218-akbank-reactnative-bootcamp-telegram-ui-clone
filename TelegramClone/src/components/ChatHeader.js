import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {useNavigation} from '@react-navigation/native';



//Custom Header component for Chat Screen. Default one is disabled.
const ChatHeader = ({firstName, pp}) => {
 
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <MaterialCommunityIcons style={styles.backIcon} name="arrow-left"/>
        </TouchableOpacity>
        <Image style={styles.pp} source={{uri: pp}}/>
      </View>
      <View>
        <Text style={styles.firstName}>{firstName}</Text>
        <Text style={styles.lastSeen}>last seen recently</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        height: 60, 
        flexDirection: 'row', 
        backgroundColor: 'lightgray'
    },
    pp: {
        width: 45, 
        height: 45, 
        borderRadius: 50, 
        marginTop: 2,
        backgroundColor: 'gray',
        position: 'absolute',
        marginLeft: 335
    },
    firstName: {
        fontSize: 18, 
        color: 'black',
        marginTop: 10,
        marginLeft: 130,
    },
    lastSeen: {
        fontSize: 14, 
        color: 'gray', 
        marginLeft: 100
    },
    backIcon: {
        marginLeft: 10,
        color: '#229ED9', 
        fontSize: 25, 
        fontWeight: '600'
    },
    iconContainer: {
        flexDirection: 'row', 
        marginLeft: 20, 
        marginVertical: 15
    },
    icon: {
        color: 'black', 
        fontSize: 25, 
        marginRight: 25
    }
  })

export default ChatHeader;