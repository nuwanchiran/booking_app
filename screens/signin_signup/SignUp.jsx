
import React, { useState } from "react";
import { View } from "react-native";
import AppButton from "../../common/AppButton";
import AppTextInput from "../../common/AppTextInput";

export default  SignUp = (
    {

    }
) =>{
    const [fName, setFname] = useState("")
    const [lName, setLname] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    return (
        <View>
            <AppTextInput
                placeholder='First name'
                icon='account'
                value={fName}
                backgroundColor="white"
                noShadow
                onChange={({ target }) => setFname(target.value)}
            />
            <AppTextInput
                placeholder='Last name'
                icon='account'
                value={lName}
                backgroundColor="white"
                noShadow
                onChange={({ target }) => setLname(target.value)}
            />
            <AppTextInput
                placeholder='Email'
                icon='account'
                value={email}
                backgroundColor="white"
                noShadow
                onChange={({ target }) => setEmail(target.value)}
            />
            <AppTextInput
                placeholder='Password'
                icon='lock'
                // rightIcon='eye'
                value={password}
                backgroundColor="white"
                noShadow
                onChange={({ target }) => setPassword(target.value)}
            />
            <AppButton
                title='Sign up'
                color='primary'
                iconColor='light'
                noShadow
                onPress={() => alert('Signing up')}
            />
        </View>
    )

}