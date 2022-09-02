import {View, StyleSheet} from 'react-native';
import React from 'react';
import ChatHeader from '../components/ChatHeader';
import ChatInput from '../components/ChatInput';
import ChatCard from '../components/ChatCard';

const Chat = ({route}) => {
  const {firstName, pp, textData} = route.params;
  //Chat header for Chat Screen. I've got a problem with profile picture in here.
  return (
    <View
      style={styles.container}>
      <View>
        <ChatHeader firstName={firstName} photo={pp} />
        <ChatCard textData={textData} />
      </View>
      <View>
        <ChatInput />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    justifyContent: 'space-between'
  },
})

export default Chat;