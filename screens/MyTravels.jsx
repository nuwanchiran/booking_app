import React, { useEffect, useState } from "react";
import Screen from "../components/Screen";
import {
  FlatList,
  View,
  ImageBackground,
  StyleSheet,
  Text,
} from "react-native";
import AppButton from "../common/AppButton";
import AppText from "../common/AppText";
import Card from "../common/Card";
import { SearchBar } from "react-native-elements";

import {
  ScrollView,
  TouchableNativeFeedback,
} from "react-native-gesture-handler";
import AppTextInput from "../common/AppTextInput";
import routes from "../navigations/routes";

export default function MyTravel({ navigation, route }) {
  return (
    <Screen navigation={navigation} title="Travel Community" goBack>
      <ImageBackground
        source={require("../assets/TravelCommunity/community.jpg")}
        style={{ width: "100%", height: 200 }}
      >
        <View
          style={{
            position: "absolute",
            top: 130,
            left: 0,
            right: 0,
            bottom: 0,
            alignItems: "center",
          }}
        >
          <AppText style={styles.travelCommunityHeading}>
            My travel community
          </AppText>
        </View>
      </ImageBackground>
      <View style={{ marginHorizontal: 17 }}>
        <AppTextInput placeholder="Search my community" icon="map-search" />
      </View>
      <ScrollView>
        <View
          style={{
            marginHorizontal: 10,
          }}
        >
          <AppButton
            title="SRI Lanka"
            color="primary"
            onPress={() => navigation.navigate(routes.MyCommunities)}
          />

          <AppButton
            title="INDIA"
            color="primary"
            onPress={() => navigation.navigate(routes.MyCommunities)}
          />

          <AppButton
            title="AUSTRALIA"
            color="primary"
            onPress={() => navigation.navigate(routes.MyCommunities)}
          />
        </View>
      </ScrollView>
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
