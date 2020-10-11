import React, { useEffect, useState } from "react";
import Screen from "../components/Screen";
import {
  FlatList,
  View,
  ImageBackground,
  StyleSheet,
  Text,
  SafeAreaView,
  StatusBar,
  TextInput,
  Image,
} from "react-native";
import AppButton from "../common/AppButton";
import AppText from "../common/AppText";
import Card from "../common/Card";
import { ProgressSteps, ProgressStep } from "react-native-progress-steps";
import colors from "../config/colors";
import { RadioButton } from "react-native-paper";
import CheckBox from "@react-native-community/checkbox";
import {
  ScrollView,
  TouchableNativeFeedback,
} from "react-native-gesture-handler";
import AppTextInput from "../common/AppTextInput";
import routes from "../navigations/routes";
import { Colors } from "react-native/Libraries/NewAppScreen";
import { Rating, AirbnbRating } from "react-native-ratings";

export default function HotelFillInfo({ navigation, route }) {
  const buttonTextStyle = {
    color: "#fff",
  };

  const [checked, setChecked] = React.useState("first");
  const [toggleCheckBox, setToggleCheckBox] = useState(false);

  return (
    <Screen navigation={navigation} title="Hotel Booking" goBack>
      <SafeAreaView style={{ flex: 1 }}>
        <ProgressSteps topOffset={10} marginBottom={10}>
          <ProgressStep
            label="Info"
            nextBtnTextStyle={buttonTextStyle}
            nextBtnStyle={styles.button}
            nextBtnText="Next step"
            scrollable={true}
          >
            <View>
              <View style={styles.card}>
                <View style={styles.formContainer}>
                  <Text style={{ paddingTop: 5 }}>
                    First Name <Text style={styles.star}>*</Text>
                  </Text>
                  <AppTextInput placeholder="John" />

                  <Text style={{ paddingTop: 5 }}>
                    Last Name <Text style={styles.star}>*</Text>
                  </Text>
                  <AppTextInput placeholder="John" />

                  <Text style={{ paddingTop: 5 }}>
                    Email Address <Text style={styles.star}>*</Text>
                  </Text>
                  <AppTextInput placeholder="John" />

                  <Text style={{ paddingTop: 5 }}>
                    Country <Text style={styles.star}>*</Text>
                  </Text>
                  <AppTextInput placeholder="John" />

                  <Text style={{ paddingTop: 5 }}>
                    Phone Number <Text style={styles.star}>*</Text>
                  </Text>
                  <AppTextInput placeholder="John" />

                  <Text style={{ paddingTop: 5 }}>
                    Reservation type <Text style={styles.star}>*</Text>
                  </Text>
                  <View
                    style={{
                      flexDirection: "row",
                      marginLeft: 10,
                    }}
                  >
                    <RadioButton
                      value="first"
                      status={checked === "first" ? "checked" : "unchecked"}
                      onPress={() => setChecked("first")}
                    />
                    <Text
                      style={{
                        top: 10,
                      }}
                    >
                      Business
                    </Text>

                    <RadioButton
                      value="second"
                      status={checked === "second" ? "checked" : "unchecked"}
                      onPress={() => setChecked("second")}
                    />
                    <Text
                      style={{
                        top: 10,
                      }}
                    >
                      Leisure
                    </Text>
                  </View>

                  <View
                    style={{
                      flexDirection: "row",
                      marginTop: 10,
                    }}
                  >
                    <CheckBox
                      disabled={false}
                      value={toggleCheckBox}
                      onValueChange={(newValue) => setToggleCheckBox(newValue)}
                    />
                    <Text
                      style={{
                        top: 5,
                      }}
                    >
                      Save your details
                    </Text>
                  </View>
                </View>
              </View>
            </View>
          </ProgressStep>
          <ProgressStep
            label="Overview"
            nextBtnTextStyle={buttonTextStyle}
            previousBtnTextStyle={buttonTextStyle}
            nextBtnStyle={styles.button}
            previousBtnStyle={styles.button}
            nextBtnText="Confirm"
          >
            <View
              style={{
                width: "90%",
                height: "auto",
                marginHorizontal: 20,
                flexDirection: "row",
              }}
            >
              <Image
                source={require("../assets/TravelCommunity/Home.jpg")}
                style={styles.Image2}
              />
              <View
                style={{
                  width: "45%",
                  flexDirection: "column",
                  paddingVertical: 10,
                }}
              >
                <Text>Ebenezer cottage,8 Bloomfield road</Text>
                <Text style={styles.step2Text}>Mobile only price</Text>
                <View style={{ marginTop: 0, marginLeft: -20 }}>
                  <AirbnbRating
                    defaultRating={4.5}
                    count={5}
                    size={20}
                    reviewSize={153}
                    showRating={false}
                  />
                </View>
                <Text>4(153)</Text>
              </View>
            </View>

            <View style={styles.card}>
              <View style={styles.Container}>
                <View
                  style={{
                    width: "100%",
                    flexDirection: "row",
                  }}
                >
                  <Text style={styles.LeftTextCard}>Your trip</Text>
                </View>
                <View
                  style={{
                    width: "100%",
                    flexDirection: "row",
                  }}
                >
                  <Text style={styles.LeftTextCard}>Dates</Text>
                  <Text style={styles.RightTextCard1}>
                    13/08/2020to15/08/2020
                  </Text>
                </View>
                <View
                  style={{
                    width: "100%",
                    flexDirection: "row",
                  }}
                >
                  <Text style={styles.LeftTextCard}>Guest</Text>
                  <Text style={styles.RightTextCard1}>2 Guest</Text>
                </View>
              </View>
            </View>

            <View style={styles.card}>
              <View style={styles.Container}>
                <View
                  style={{
                    width: "100%",
                    flexDirection: "row",
                  }}
                >
                  <Text style={styles.LeftTextCard2}>Price Details</Text>
                </View>
                <View
                  style={{
                    width: "100%",
                    flexDirection: "row",
                  }}
                >
                  <Text style={styles.LeftTextCard2}>Rs.7000 * 2 nights</Text>
                  <Text style={styles.RightTextCard2}>Rs14000.00</Text>
                </View>
                <View
                  style={{
                    width: "100%",
                    flexDirection: "row",
                  }}
                >
                  <Text style={styles.LeftTextCard2}>Service fee</Text>
                  <Text style={styles.RightTextCard2}>Rs1000.00</Text>
                </View>
                <View
                  style={{
                    width: "100%",
                    flexDirection: "row",
                  }}
                >
                  <Text style={styles.LeftTextCard2}>Total</Text>
                  <Text style={styles.RightTextCard2}>Rs15000.00</Text>
                </View>
              </View>
            </View>
          </ProgressStep>
          <ProgressStep
            label="Confirm"
            nextBtnTextStyle={buttonTextStyle}
            previousBtnTextStyle={buttonTextStyle}
            nextBtnStyle={styles.button}
            previousBtnStyle={styles.button}
            removeBtnRow={true}
          >
            <Image
              source={require("../assets/TravelCommunity/clipart624281.png")}
              style={styles.Image1}
            />
            <Text style={styles.travelCommunityHeading}>
              Hotel is successfully booked
            </Text>
            <View
              style={{
                marginHorizontal: 10,
              }}
            >
              <AppButton
                title="Go Home Page"
                color="primary"
                onPress={() => navigation.navigate(routes.Home)}
              />
            </View>
          </ProgressStep>
        </ProgressSteps>
      </SafeAreaView>
    </Screen>
  );
}

const styles = StyleSheet.create({
  travelCommunityHeading: {
    fontWeight: "bold",
    fontSize: 25,
    color: "black",
    textAlign: "center",
    marginTop: 10,
  },
  formContainer: {
    paddingHorizontal: 30,
    paddingVertical: 80,
  },
  Container: {
    paddingHorizontal: 30,
    paddingVertical: 10,
  },
  btnask: {
    paddingHorizontal: 30,
    paddingVertical: 60,
  },
  safeAreaView: {
    flex: 1,
  },
  button: {
    backgroundColor: "#003580",
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  buttonText: {
    color: "#ffffffdd",
    fontSize: 16,
  },
  star: {
    color: "red",
  },
  formContainer: {
    paddingHorizontal: 20,
    paddingVertical: 30,
    flexDirection: "column",
  },
  card: {
    height: "auto",
    marginHorizontal: 10,
    marginVertical: 10,
    display: "flex",
    flex: 1,
    borderRadius: 15,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 3,
  },
  input: {
    margin: 15,
    height: 20,
  },
  Image1: {
    marginHorizontal: 0,
    resizeMode: "contain",
    width: "100%",
    alignContent: "center",
  },
  Image2: {
    margin: 10,
    resizeMode: "contain",
    width: "50%",
    height: 100,
    borderRadius: 20,
  },
  step2Text: {
    backgroundColor: "#eeb507",
    color: "#fff",
    fontWeight: "bold",
    width: 120,
    padding: 2,
    marginTop: 5,
  },
  LeftTextCard: {
    color: "black",
    fontWeight: "bold",
    padding: 2,
    marginTop: 2,
    fontSize: 16,
    width: "35%",
  },
  LeftTextCard2: {
    color: "black",
    fontWeight: "bold",
    padding: 2,
    marginTop: 2,
    fontSize: 16,
    width: "60%",
  },
  RightTextCard1: {
    color: "black",
    padding: 2,
    marginTop: 2,
    fontSize: 15,
    width: "65%",
    textAlign: "left",
  },
  RightTextCard2: {
    color: "black",
    padding: 2,
    marginTop: 2,
    fontSize: 15,
    width: "40%",
    textAlign: "right",
  },
});
