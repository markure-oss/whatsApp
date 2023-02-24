import React, {useCallback, useEffect, useReducer, useState} from 'react';import Input from "./Input";import SubmitButton from "./SubmitButton";import {Feather} from "@expo/vector-icons";import {validateInput} from "../utils/actions/FormActions";import {reducer} from "../utils/reducers/FormReducer";import {signIn} from "../utils/actions/AuthActions";import {useDispatch} from "react-redux";import { Alert } from "react-native";const initialState = {    inputValues: {        email: "",        password: ""    },    inputValidities: {        email: false,        password: false    },    formIsValid: false}const SignInForm = props => {    const dispatch = useDispatch();    const [error, setError] = useState();    const [isLoading, setIsLoading] = useState(false)    const [formState, dispatchFormState] = useReducer(reducer, initialState);    const inputChangedHandler = useCallback((inputId, inputValue) => {        //validate Input User's        const result = validateInput(inputId, inputValue);        dispatchFormState({ inputId,validationResult: result, inputValue });    }, [dispatchFormState])    useEffect(() => {        if (error) {            Alert.alert("An error occured", error, [{ text: "OKE" }])        }    }, [error])    const authHandler = useCallback(async () => {        try {            setIsLoading(true);            // console.log(formState.inputValues);            const action = signIn(                formState.inputValues.email,                formState.inputValues.password,            )            setError(null);            await dispatch(action);        } catch (error) {            setError(error.message);            setIsLoading(false);        }    }, [dispatch, formState]);    return (        <>            <Input id="email"                   label="Email"                   icon="mail"                   iconPack={Feather}                   // mặc định tất cả chữ cái là chữ thường                   autoCapitalize="none"                   //chỉ định loại bàn phím sẽ dùng để nhập văn bản                   keyboardType="email-address"                   onInputChanged={inputChangedHandler}                   errorText={formState.inputValidities["email"]}            />            <Input id="password"                   label="Password"                   icon="lock"                   iconPack={Feather}                   // mặc định tất cả chữ cái là chữ thường                   autoCapitalize="none"                   // vô hiệu hoá và ẩn văn bản                   secureTextEntry                   onInputChanged={inputChangedHandler}                   errorText={formState.inputValidities["password"]}            />            <SubmitButton title={'Sign in'}                          onPress={authHandler}                          style={{ marginTop: 20 }}                          disabled={!formState.formIsValid}            />        </>    )}export default SignInForm;