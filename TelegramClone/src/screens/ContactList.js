
import {View, FlatList, StyleSheet} from 'react-native';
import React from 'react';
import ContactCard from '../components/ContactCard';
import data from '../components/ContactData.json';

const ContactList = () => {
    const renderSeperator = () => <View style={styles.seperator} />;
    return (
      <View style={styles.container}>
        <FlatList
          ItemSeparatorComponent={
            renderSeperator 
          }
          keyExtractor={item => item.id}
          data={data}
          renderItem={item => <ContactCard data={item} />}
        />
      </View>
    );
  };
const styles = StyleSheet.create({
      seperator: {
        marginLeft: 63,
        borderWidth: 0.4,
        borderColor: 'gray',
      }
})

export default ContactList;