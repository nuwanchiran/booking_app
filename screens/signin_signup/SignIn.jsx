import { MaterialCommunityIcons } from "@expo/vector-icons";
import React, { useState } from "react";
import { View, StyleSheet, TouchableNativeFeedback, Text } from "react-native";
import AppButton from "../../common/AppButton";
import AppText from "../../common/AppText";
import AppTextInput from "../../common/AppTextInput";
import colors from "../../config/colors";


export default SignIn = (
    {

    }
) => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const styles = StyleSheet.create({
        externalAuthPanel: {
            padding: 5,
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
        },
        externalAuthItem: {
            backgroundColor: colors.light,
            borderRadius: 10,
            padding: 15,
            margin: 10
        },
        loginStatement: {
            fontSize: 13,
            textAlign: "center",
            color: colors.medium,
        }
    })

    return (
        <View>
            <AppTextInput
                placeholder='Username or email'
                icon='account'
                value={email}
                backgroundColor="white"
                keyboardType="email-address"
                noShadow
                onChange={({ target }) => setEmail(target.value)}
            />
            <AppTextInput
                placeholder='Password'
                icon='lock'
                value={password}
                backgroundColor="white"
                keyboardType="visible-password"
                noShadow
                onChange={({ target }) => setPassword(target.value)}
            />
            <AppButton
                title='Sign in'
                color='primary'
                iconColor='light'
                onPress={() => alert('Signing in')}
            />

            <View style={styles.externalAuthPanel}>
                <TouchableNativeFeedback
                    style={styles.externalAuthItem}
                    onPress={() => alert('Sign in with Google')}
                >
                    <MaterialCommunityIcons
                        name="google"
                        size={40}
                        color={colors.dark}
                        style={styles.externalAuthItem}
                    />
                </TouchableNativeFeedback>
                <TouchableNativeFeedback
                    style={styles.externalAuthItem}
                    onPress={() => alert('Sign in with Facebook')}
                >
                    <MaterialCommunityIcons
                        name="facebook"
                        size={40}
                        color={colors.dark}
                        style={styles.externalAuthItem}
                    />
                </TouchableNativeFeedback>
            </View>
            <AppText style={styles.loginStatement}>
                By creating or logging into an  account you are agreeing with our Terms and Conditions and Privacy Statements
            </AppText>
        </View>
    )

}