import React, {useCallback, useEffect, useReducer, useState} from 'react';import Input from "./Input";import {Feather, FontAwesome} from "@expo/vector-icons";import SubmitButton from "./SubmitButton";// import validate from "validate.js";// import {validateEmail, validatePassword, validateString} from "../utils/ValidationConstraints";import {validateInput} from "../utils/actions/FormActions";import {reducer} from "../utils/reducers/FormReducer";import {signUp} from "../utils/actions/AuthActionos";import {ActivityIndicator, Alert} from "react-native";import colors from "../constants/Colors";import {useDispatch, useSelector} from "react-redux";const initialState = {    inputValues: {        firstName: "",        lastName: "",        email: "",        password: ""    },    inputValidities: {        firstName: false,        lastName: false,        email: false,        password: false    },    formIsValid: false}const SignUpForm = props => {    const dispatch = useDispatch();    const [error, setError] = useState();    const [isLoading, setIsLoading] = useState(false)    const [formState, dispatchFormState] = useReducer(reducer, initialState);    useEffect(() => {        if (error) {            Alert.alert("An error occured", error)        }    }, [error])    const inputChangedHandler = useCallback((inputId, inputValue) => {        //validate Input User's        const result = validateInput(inputId, inputValue);        dispatchFormState({ inputId,validationResult: result, inputValue });    }, [dispatchFormState])    const authHandler = async () => {        try {            setIsLoading(true);            const action = signUp(                formState.inputValues.firstName,                formState.inputValues.lastName,                formState.inputValues.email,                formState.inputValues.password,            )            dispatch(action);            setError(null);        } catch (error) {            setError(error.message);            setIsLoading(false);        }    }    return (        <>            <Input id="firstName"                   label="First name"                   icon="user-o"                   iconPack={FontAwesome}                   onInputChanged={inputChangedHandler}                   // mặc định tất cả chữ cái là chữ thường                   autoCapitalize="none"                   errorText={formState.inputValidities["firstName"]}            />            <Input id="lastName"                   label="Last name"                   icon="user-o"                   iconPack={FontAwesome}                   onInputChanged={inputChangedHandler}                   // mặc định tất cả chữ cái là chữ thường                   autoCapitalize="none"                   errorText={formState.inputValidities["lastName"]}            />            <Input id="email"                   label="Email"                   icon="mail"                   iconPack={Feather}                   onInputChanged={inputChangedHandler}                   // mặc định tất cả chữ cái là chữ thường                   autoCapitalize="none"                   //chỉ định loại bàn phím sẽ dùng để nhập văn bản                   keyboardType="email-address"                   errorText={formState.inputValidities["email"]}            />            <Input id="password"                   label="Password"                   icon="lock"                   iconPack={Feather}                   onInputChanged={inputChangedHandler}                   // mặc định tất cả chữ cái là chữ thường                   autoCapitalize="none"                   // vô hiệu hoá và ẩn văn bản                   secureTextEntry                   errorText={formState.inputValidities["password"]}            />            {                isLoading ?                <ActivityIndicator size={"small"} color={colors.primary} style={{ marginTop: 10 }} /> :                <SubmitButton                    title={'Sign up'}                    onPress={authHandler}                    style={{ marginTop: 20 }}                    disabled={!formState.formIsValid}                />            }        </>    )}export default SignUpForm;