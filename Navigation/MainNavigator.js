import React from "react";import ChatSettingsScreen from "../screens/ChatSettingsScreen";import {createStackNavigator} from "@react-navigation/stack";import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";import ChatListScreen from "../screens/ChatListScreen";import {Ionicons} from "@expo/vector-icons";import SettingsScreen from "../screens/SettingsScreen";import ChatScreen from "../screens/ChatScreen";const Stack = createStackNavigator();const Tab = createBottomTabNavigator();const TabNavigator = () => {    return (        <Tab.Navigator screenOptions={{            headerTitle: ''        }}>            <Tab.Screen name="ChatLists" component={ChatListScreen} options={{                tabBarLabel: 'Chats',                tabBarIcon: ({color, size}) => <Ionicons name="chatbubble-outline" size={ size } color={ color } />            }}/>            <Tab.Screen name="Settings" component={SettingsScreen} options={{                tabBarLabel: 'Settings',                tabBarIcon: ({color, size}) => <Ionicons name="settings-outline" size={ size } color={ color } />            }}/>        </Tab.Navigator>    )}const MainNavigator = (props) => {    return (        <Stack.Navigator>            <Stack.Screen name="Home" component={TabNavigator} options={{ headerShown: false }}/>            <Stack.Screen name="ChatScreen" component={ChatScreen} options={{                headerTitle: " ",                headerBackTitle: "Back"            }}/>            <Stack.Screen name="Chat Settings" component={ChatSettingsScreen} options={{                headerTitle: "Settings",                headerBackTitle: "Back"            }}/>        </Stack.Navigator>    )}export default MainNavigator;