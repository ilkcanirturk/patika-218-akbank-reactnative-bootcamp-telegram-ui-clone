import React from 'react';
import { Pressable, Text, View} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useNavigation } from '@react-navigation/native';
import Entypo from "react-native-vector-icons/Entypo";
import Ionicons from "react-native-vector-icons/Ionicons";
import AntDesign from "react-native-vector-icons/AntDesign";
import Settings from "../screens/Settings";
import ContactList from "../screens/ContactList";
import ChatList from "../screens/ChatList";

//importing icon libraries and necessary components.

const BottomNav = createBottomTabNavigator();


const BottomNavigation = () => {
    // For use navigation
    const { navigate } = useNavigation();

    return (
        <BottomNav.Navigator initialRouteName="Chats" screenOptions={
            {
              // Configuring the Bottom Tab Navigation
              tabBarStyle:  { height: 70 }
            } 
          }>
            {/* Total 3 Tab Bar Screen */}
            <BottomNav.Screen
                name="Contacts"
                component={ContactList}
                options={{
                    tabBarLabelStyle:{ fontSize: 14, marginBottom: 10},
                    headerShown: true,
                    headerTitle: "Contacts",
                    headerBackVisible: false,
                    headerStyle: { backgroundColor: 'white' },
                    headerTitleStyle: { color: 'black' },
                    headerTitleAlign: 'center',
                    //Added Header Options for Bottom Tab Navigation. Displays only this Header. Stack Nav's Header Shown is false.
                    headerLeft: () => {
                        return (
                            <View style={{ width: 60, height: 40, paddingTop: 12 }}>
                                <Text style={{ color: '#229ED9', fontSize: 16, marginLeft: 20 }}>Sort</Text>
                            </View>
                        );
                    },
                    headerRight: () => {
                        return (
                            <View>
                                <Entypo name="plus" size={30} style={{ color: '#229ED9', marginRight: 20 }} />
                            </View>
                        );
                    },
                    //Tab Bar configuration.
                    tabBarIcon: (tabInfo) => {
                        return (
                            <Ionicons name={tabInfo.focused ? "ios-person-circle" : "ios-person-circle-outline"} size={30} color={tabInfo.focused ? "#229ED9" : "gray"} />
                        )
                    },
                    tabBarActiveTintColor: '#229ED9'
                }}
            />
            <BottomNav.Screen
                name="Chats"
                component={ChatList}
                options={{
                    tabBarLabelStyle:{ fontSize: 14, marginBottom: 10},
                    headerShown: true,
                    headerTitle: "Chats",
                    headerBackVisible: false,
                    headerStyle: { backgroundColor: 'white' },
                    headerTitleStyle: { color: 'black' },
                    headerTitleAlign: 'center',
                    headerLeft: () => {
                        return (
                            <View style={{ width: 60, height: 40, paddingTop: 12 }}>
                                <Text style={{ color: '#229ED9', fontSize: 16, marginLeft: 20 }}>Edit</Text>
                            </View>
                        );
                    },
                    headerRight: () => {
                        return (
                            <View>
                                <Entypo name="new-message" size={22} style={{ color: '#229ED9', marginRight: 20 }} />
                            </View>
                        );
                    },
                    //Tab bar configurations.
                    tabBarIcon: (tabInfo) => {
                        return (
                            <Ionicons name={tabInfo.focused ? "ios-chatbubbles" : "chatbubbles-outline"} size={30} color={tabInfo.focused ? "#229ED9" : "gray"} />
                        )
                    },
                    tabBarActiveTintColor: '#229ED9'
                }}
            />
            <BottomNav.Screen
                name="Settings"
                component={Settings}
                options={{
                    tabBarLabelStyle:{ fontSize: 14, marginBottom: 10},
                    headerShown: true,
                    headerTitle: "Settings",
                    headerBackVisible: false,
                    headerStyle: { backgroundColor: 'white' },
                    headerTitleStyle: { color: 'black' },
                    headerTitleAlign: 'center',
                    headerLeft: () => {
                        //that icon is navigates to Theme Screen.
                        return (
                            <Pressable onPress={() => navigate('ThemeScreen')}>
                                <View style={{ width: 60, height: 40, paddingTop: 12 }}>
                                    <AntDesign name="appstore-o" size={22} style={{ color: '#229ED9', marginLeft: 20 }} />
                                </View>
                            </Pressable>
                        );
                    },
                    headerRight: () => {
                        return (
                            //Navigates to Edit Screen .
                            <View>
                                <Text style={{ color: '#229ED9', fontSize: 16, marginRight: 20 }} onPress={() => navigate('EditScreen')}>Edit</Text>
                            </View>
                        );
                    },
                    //Tab bar configurations.
                    tabBarIcon: (tabInfo) => {
                        return (
                            <Ionicons name={tabInfo.focused ? "settings" : "settings-outline"} size={30} color={tabInfo.focused ? "#229ED9" : "gray"} />
                        )
                    },
                    tabBarActiveTintColor: '#229ED9'
                }}
            />
        </BottomNav.Navigator>
    );
};

export default BottomNavigation;