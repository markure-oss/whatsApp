import React from 'react';import {View} from "react-native";import Input from "./Input";import {Feather} from "@expo/vector-icons";import SubmitButton from "./SubmitButton";const SignInForm = props => {    return (        <View>            <Input label="Email"                   icon="mail"                   iconPack={Feather}            />            <Input label="Password"                   icon="lock"                   iconPack={Feather}            />            <SubmitButton title={'Sign in'}                          onPress={() => console.log("button press!")}                          style={{ marginTop: 20 }}            />        </View>    )}export default SignInForm;