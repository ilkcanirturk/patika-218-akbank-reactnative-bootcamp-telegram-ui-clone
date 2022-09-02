import {View, TextInput, StyleSheet} from 'react-native';
import React, {useState} from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const ChatInput = () => {
  //for change the microphone icon to upperArrow icon when typing somethings in TextInput.
  const [value, setValue] =
    useState(
      0,
    ); 
  return (
    <View style={{ backgroundColor: 'lightgray'}}>
      <View style={styles.container}>
        <MaterialCommunityIcons style={styles.iconAttachment} name="attachment" />
        <TextInput
          style={styles.input}
          onChangeText={value => setValue(value)}
          placeholder="Message"
        />
        <MaterialCommunityIcons style={styles.iconSticker} name="sticker-circle-outline" />
      </View>
      <View style={styles.iconChange}>
        {value.length > 0 ? (
          <MaterialCommunityIcons style={styles.iconArrowUp} name="arrow-up-circle-outline" />
        ) : (
          <MaterialCommunityIcons style={styles.iconMic} name="microphone" />
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        height: 50,
        marginTop: 12,
        marginBottom: 18,
        marginLeft: 50,
        marginRight: 70,
        borderWidth: 1,
        backgroundColor: 'white',
        borderColor: 'gray',
        borderRadius: 25,
        justifyContent: 'center',
      },
      input: {
        marginLeft: 5,
        fontSize: 16,
        fontWeight: '600',
      },
      iconAttachment: {
        position: 'absolute', 
        marginLeft: 0,
        left: -42,
        transform: [{rotate: '-45deg'}],
        fontSize: 35
    },
      iconSticker: {
        position: 'absolute',
        right: 0,
        marginRight: 10, 
        transform: [{rotate: '-90deg'}],
        fontSize: 30
    },
      iconArrowUp: {
        fontSize: 38, 
        color: '#fff'
    },
      iconChange: {
        position: 'absolute',
        width: 50,
        height: 50,
        backgroundColor: '#229ED9',
        borderRadius: 50,
        right: 0,
        marginRight: 10,
        marginTop: 12,
        alignItems: 'center',
        justifyContent: 'center',
      },
      iconMic: {
        color: '#fff',
        fontSize: 30,
      }
  })

export default ChatInput;