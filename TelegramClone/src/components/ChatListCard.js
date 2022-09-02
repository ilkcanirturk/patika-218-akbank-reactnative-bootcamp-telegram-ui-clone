import { View, Text, Image, Pressable, StyleSheet } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';

const ChatListCard = ({ data }) => {
  const navigation = useNavigation();

  const onPress = () => navigation.navigate('Chat', {
    firstName: data.item.contact[0].firstName,
    pp: data.item.contact[0].pp,
    textData: data.item.receivedMessages,
  })
//Chat list card component
  return (
    <Pressable onPress={onPress}>
      <View style={styles.container}>
        <Image
          style={styles.pp}
          source={{ uri: data.item.contact[0].pp }}
        />
        <View style={styles.container2}>
          <View style={styles.container3}>
            <Text style={styles.userInfo}>
              {data.item.contact[0].firstName + ' ' + data.item.contact[0].lastName}
            </Text>
            <Text style={styles.dateText}>
              {data.item.receivedMessages[data.item.receivedMessages.length - 1].dateTime}
            </Text>
          </View>
          <Text numberOfLines={1} style={styles.lastMessageText}>
            {data.item.receivedMessages[data.item.receivedMessages.length - 1].messageText}
          </Text>
        </View>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    padding: 8,
  },
  pp: {
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: "rgba(0,0,0,0.3)",
    marginRight: 15
  },
  container2: {
    display: "flex",
    flexDirection: "column",
    flex: 1
  },
  container3: {
    display: "flex", 
    flexDirection: "row", 
    marginBottom: 8, 
    justifyContent:'space-between'
  },
  userInfo: {
    fontWeight: "600",
    fontSize: 16
  },
  lastMessageText: {
    paddingTop: -5,
  },
  dateText: {
    marginRight: 10
  }
})

export default ChatListCard;