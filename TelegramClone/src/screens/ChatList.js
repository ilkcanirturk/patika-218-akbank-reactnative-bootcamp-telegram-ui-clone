import {View, FlatList, StyleSheet} from 'react-native';
import React from 'react';
import ChatListCard from '../components/ChatListCard';
import data from '../components/ContactData.json';

const ChatList = () => {
    // renders the Flatlist
    const renderSeperator = () => <View style={styles.seperatorStyle} />;
    return (
      <View>
        <FlatList
          ItemSeparatorComponent={
            renderSeperator 
          }
          keyExtractor={item => item.id}
          data={data}
          renderItem={item => <ChatListCard data={item} />}
        />
      </View>
    );
  };
const styles = StyleSheet.create({
      seperatorStyle: {
        marginLeft: 85,
        borderWidth: 0.6,
        borderColor: 'lightgray',
      }
})

export default ChatList;