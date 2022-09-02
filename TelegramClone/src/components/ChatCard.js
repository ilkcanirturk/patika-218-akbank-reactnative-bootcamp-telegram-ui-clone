import {View, Text,  StyleSheet} from 'react-native';
import React from 'react';

const ChatCard = ({textData}) => {
  return (
    <View style={styles.textContainer}>
      {textData && textData.map((item, index) => (
          <View key={index} style={styles.dateContainer}>
            <Text style={styles.text}>{item.messageText}</Text>
            <Text style={styles.dateTime}>{item.dateTime}</Text>
          </View>
        ))}
    </View>
  );
};

const styles = StyleSheet.create({
        textContainer: {
          maxWidth: 340,
        },
        dateContainer: {
          elevation: 5,
          justifyContent: 'space-between',
          alignItems: 'flex-end',
          backgroundColor: '#fff',
          flexDirection: 'row',
          borderRadius: 25,
          margin: 5,
          marginRight: 'auto',
        },
        text: {
          padding: 8,
          fontSize: 16,
          color: '#000',
          fontWeight: '400',
        },
        dateTime: {
          marginRight: 10,
          top: -3,
          fontSize: 12,
        },
  })

export default ChatCard;