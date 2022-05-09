import React, { useState } from 'react';


const UserForm = (props) => {
    const [firstName, setfirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const [firstNameError, setFirstNameError] = useState("")
    const [lastNameError, setLastNameError] = useState("")
    const [emailError, setEmailError] = useState("")
    const [passwordError, setPasswordError] = useState("")
    const [confirmPasswordError, setConfirmPasswordError] = useState("")

    const createUser = (e) => {
        e.preventDefault();
        const newUser = { firstName, lastName, email, password, confirmPassword };
        console.log("Welcome", newUser);
    };

    const firstNameHandler = (event) => {
        setfirstName(event.target.value) 
        if(event.target.value.length < 1){
            setFirstNameError("first name is required")
        }
        else if (event.target.value.length < 2){
            setFirstNameError("first name must be longer than 2 letters")
        }
        else{
            setFirstNameError("")
        }
    }

    const lastNameHandler = (event) => {
        setLastName(event.target.value) 
        if(event.target.value.length < 1){
            setLastNameError("last name is required")
        }
        else if (event.target.value.length < 2){
            setLastNameError("last name must be longer than 2 letters")
        }
        else{
            setLastNameError("")
        }
    }

    const emailHandler = (event) => {
        setEmail(event.target.value) 
        if(event.target.value.length < 1){
            setEmailError("email is required")
        }
        else if (event.target.value.length < 2){
            setEmailError("email must be longer than 2 letters")
        }
        else{
            setEmailError("")
        }
    }

    const passwordHandler = (event) => {
        setPassword(event.target.value)
        if(event.target.value.length < 1){
            setPasswordError("Password is required")
        }
        else if (event.target.value.length < 2){
            setPasswordError("Password must be longer than 2 letters")
        }
        else{
            setPasswordError("")
        }
    }

    const confirmPasswordHandler = (event) => {
        setConfirmPassword(event.target.value)
        if(event.target.value !== password){
            setConfirmPasswordError("Passwords must match")
        }
        else{
            setConfirmPasswordError("")
        }
    }

    return (
        <div>
            <form onSubmit={createUser}>
                <div>
                    <label>First Name: </label>
                    <input type="text" onChange={firstNameHandler} name="firstName"/>
                    {firstNameError ? <p>{firstNameError} </p>: null}
                </div>
                <div>
                    <label>Last Name: </label>
                    <input type="text" onChange={lastNameHandler} name="lastName"/>
                    {lastNameError ? <p>{lastNameError} </p>: null}
                </div>
                <div>
                    <label>Email: </label>
                    <input type="text" onChange={emailHandler} name="email"/>
                    {emailError ? <p>{emailError} </p>: null}
                </div>
                <div>
                    <label>Password: </label>
                    <input type="password" onChange={passwordHandler} name="password"/>
                    {passwordError ? <p>{passwordError} </p>: null}
                    {confirmPasswordError ? <p>{confirmPasswordError} </p>: null}
                </div>
                <div>
                    <label>Confrim Password: </label>
                    <input type="password" onChange={confirmPasswordHandler} name="confrimPassword"/>
                </div>
                <input type="submit" value="Create User" />
            </form>
            <h1>First Name: {firstName}</h1>
            <h1>Last Name: {lastName}</h1>
            <h1>Email: {email}</h1>
            <h1>Password: {password}</h1>
            <h1>Confirm Password: {confirmPassword}</h1>
        </div>
    );
};

export default UserForm;
