import React, {useCallback, useReducer} from 'react';import Input from "./Input";import {Feather, FontAwesome} from "@expo/vector-icons";import SubmitButton from "./SubmitButton";import validate from "validate.js";import {validateEmail, validatePassword, validateString} from "../utils/ValidationConstraints";import {validateInput} from "../utils/actions/FormActions";import {reducer} from "../utils/reducers/FormReducer";const initialState = {    inputValidities: {        firstName: false,        lastName: false,        email: false,        password: false    },    formIsValid: false}const SignUpForm = props => {    const [formState, dispatchFormState] = useReducer(reducer, initialState);    const inputChangedHandler = useCallback((inputId, inputValue) => {        //validate Input User's        const result = validateInput(inputId, inputValue);        dispatchFormState({ inputId,validationResult: result });    }, [dispatchFormState])    return (        <>            <Input id="firstName"                   label="First name"                   icon="user-o"                   iconPack={FontAwesome}                   onInputChanged={inputChangedHandler}                   // mặc định tất cả chữ cái là chữ thường                   autoCapitalize="none"                   errorText={formState.inputValidities["firstName"]}            />            <Input id="lastName"                   label="Last name"                   icon="user-o"                   iconPack={FontAwesome}                   onInputChanged={inputChangedHandler}                   // mặc định tất cả chữ cái là chữ thường                   autoCapitalize="none"                   errorText={formState.inputValidities["lastName"]}            />            <Input id="email"                   label="Email"                   icon="mail"                   iconPack={Feather}                   onInputChanged={inputChangedHandler}                   // mặc định tất cả chữ cái là chữ thường                   autoCapitalize="none"                   //chỉ định loại bàn phím sẽ dùng để nhập văn bản                   keyboardType="email-address"                   errorText={formState.inputValidities["email"]}            />            <Input id="password"                   label="Password"                   icon="lock"                   iconPack={Feather}                   onInputChanged={inputChangedHandler}                   // mặc định tất cả chữ cái là chữ thường                   autoCapitalize="none"                   // vô hiệu hoá và ẩn văn bản                   secureTextEntry                   errorText={formState.inputValidities["password"]}            />            <SubmitButton                title={'Sign up'}                onPress={() => console.log("button press!")}                style={{ marginTop: 20 }}                disabled={!formState.formIsValid}            />        </>    )}export default SignUpForm;