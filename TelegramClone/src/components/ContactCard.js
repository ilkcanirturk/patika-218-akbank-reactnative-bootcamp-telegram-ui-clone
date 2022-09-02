import { View, Text, Image, Pressable, StyleSheet } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';


//ContactCard component.
const ContactCard = ({ data }) => {
  const navigation = useNavigation();
 //Navigates to Chat Screen with OnPress
  const onPress = () => navigation.navigate('Chat', {
    firstName: data.item.contact[0].firstName,
    photo: data.item.contact[0].pp,
    textData: data.item.receivedMessages,
  })

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
          </View>
          <Text numberOfLines={1} style={styles.lastSeenText}>
            {data.item.contact[0].lastSeen}
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
    padding: 6,
  },
  pp: {
    width: 44,
    height: 44,
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
    marginBottom: 10
  },
  userInfo: {
    fontWeight: "600",
    fontSize: 16
  },
  lastSeenText: {
    top: -10,
  },
  dateText: {
    marginRight: 10
  }
})

export default ContactCard;