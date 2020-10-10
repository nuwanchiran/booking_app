import React from "react";

import Screen from "../components/Screen";
import { FlatList, View, ImageBackground, StyleSheet } from "react-native";
import routes from "../navigations/routes";
import AppButton from "../common/AppButton";
import AppText from "../common/AppText";
import Card from "../common/Card";

export default function DiscoverTravel({ navigation }) {
  return (
    <Screen navigation={navigation} title="Travel Community">
      <ImageBackground
        source={require("../assets/TravelCommunity/travel.jpg")}
        style={{ width: "100%", height: 200 }}
      >
        <View
          style={{
            position: "absolute",
            top: 120,
            left: 0,
            right: 0,
            bottom: 0,
            alignItems: "center",
          }}
        >
          <AppText style={styles.travelCommunityHeading}>
            Ask question and get tips when you are travelling
          </AppText>
        </View>
      </ImageBackground>

      <View
        style={{
          width: 160,
          height: 30,
          flexDirection: "row",
          marginHorizontal: 10,
        }}
      >
        <View
          style={{
            marginHorizontal: 10,
          }}
        >
          <AppButton
            title="Give Tips"
            color="secondary"
            icon="diamond"
            iconColor="light"
            onPress={() => navigation.navigate(routes.GiveTips)}
          />
        </View>
        <View
          style={{
            marginHorizontal: 10,
          }}
        >
          <AppButton
            title="Questions"
            color="secondary"
            icon="comment-question"
            iconColor="light"
            onPress={() => navigation.navigate(routes.GiveQuestions)}
          />
        </View>
      </View>
      <View style={styles.formContainer}>
        <AppButton
          title="Discover travel community"
          color="primary"
          onPress={() => navigation.navigate(routes.DiscoverTravel)}
        />
        <AppButton
          title="My travel community"
          color="primary"
          onPress={() => navigation.navigate(routes.MyTravel)}
        />
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  travelCommunityHeading: {
    fontWeight: "bold",
    fontSize: 25,
    color: "white",
    textAlign: "center",
  },
  formContainer: {
    paddingHorizontal: 30,
    paddingVertical: 80,
  },
  btnask: {
    paddingHorizontal: 30,
    paddingVertical: 60,
  },
});
