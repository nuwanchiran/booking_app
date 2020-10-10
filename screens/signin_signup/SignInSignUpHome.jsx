import React, { useState } from "react";
import { StyleSheet, ImageBackground, View, Text, Pressable, ScrollView  } from "react-native";
import AppButton from "../../common/AppButton";
import AppTextInput from "../../common/AppTextInput";
import Screen from "../../components/Screen";
import AwesomeAlert from 'react-native-awesome-alerts';
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Card from "../../components/cards/FeedbackCard";
import TabPanelButton from "../../common/TabPanelButton";
import colors from "../../config/colors";
import AppText from "../../common/AppText";
import SignIn from "./SignIn";
import SignUp from "./SignUp";

export default function SignInSignUpHome({ navigation }) {
  const [no, setNo] = useState("");
  const [pin, setPin] = useState("");
  const [alert, setAlert] = useState(false)

  const SIGN_IN = "SIGN_IN"
  const SIGN_UP  = "SIGN_UP"

  const[currentTab, setCurrentTab] = useState(SIGN_IN)

  return (
    <Screen topBarHidden>
      <AwesomeAlert
        show={alert}
        showProgress={false}
        title="Alert"
        message={(no !== "" && pin !== "") ? "Message sent successfully" : "Please fill the form and resubmit"}
        closeOnTouchOutside={true}
        closeOnHardwareBackPress={false}
        showConfirmButton={true}
        confirmText="ok"
        confirmButtonColor={(no !== "" && pin !== "") ? "green" : "#DD6B55"}
        onConfirmPressed={() => {
          setAlert(false)
          setNo("");
          setPin("");
        }}
      />
      <ImageBackground
        source={require("../../assets/signInUp_background.png")}
        style={styles.image}
      >
        <ScrollView>
          <View style={styles.homeContainer}>
            <AppText style={styles.title}>
                <React.Fragment>
                  Booking
                  <AppText style={[styles.title, { color: colors.secondary} ] }>.com</AppText>
                </React.Fragment>
            </AppText>
            <View style={styles.tabPanel}>
              <View  style={styles.tabItem}>
                  <TabPanelButton
                    title="Sign in"
                    clicked={currentTab === SIGN_IN}
                    width="100%"
                    borderTopStartRadius={10}
                    onPress={()=>{
                      setCurrentTab(SIGN_IN);
                    }}
                    />
              </View> 
              <View style={styles.tabItem}>
                  <TabPanelButton
                    title="Sign up"
                    clicked={currentTab === SIGN_UP}
                    borderTopEndRadius={10}
                    onPress={()=>{
                      setCurrentTab(SIGN_UP);
                    }}
                  />
              </View>
            </View>
            <View style={styles.signUpSignUpTabHome}>
            {
              currentTab === SIGN_IN ? 
                <SignIn/>
                : currentTab === SIGN_UP ?
                  <SignUp/> : null
            }
            </View>
          </View>
        </ScrollView>
      </ImageBackground>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
  },
  title:{
    fontSize:55, 
    textAlign: "center",
    fontWeight: "bold",
    paddingBottom:25,
    color: colors.white,
  },  
  homeContainer: {
    paddingHorizontal: 20,
    paddingVertical: 20,
    // display:"flex",
    // flexDirection: "column"
  },
  signUpSignUpTabHome: {
    borderRadius:10,
    backgroundColor: colors.white,
    borderTopEndRadius:0,
    borderTopStartRadius:0,
    paddingHorizontal: 20,
    paddingBottom: 15,
    paddingTop: 15,
  },
  tabPanel:{
    flex:1,
    flexDirection: 'row',
    backgroundColor: colors.white,
    borderTopEndRadius:10,
    borderTopStartRadius:10,
  },
  tabItem:{
    flex:1,
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    height: "100%",
    justifyContent: "flex-end",
  },
});
