import React from "react";import {View, Text, StyleSheet, Button} from "react-native";const SettingsScreen = props => {    return (        <View style={styles.container}>            <Text>Settings UI/UX</Text>        </View>    )}const styles = StyleSheet.create({    container: {        flex: 1,        justifyContent: "center",        alignItems: "center"    }})export default SettingsScreen;