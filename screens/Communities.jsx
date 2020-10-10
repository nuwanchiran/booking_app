import React, { useEffect, useState } from "react";
import Screen from "../components/Screen";
import {
  FlatList,
  View,
  ImageBackground,
  StyleSheet,
  Text,
  Picker,
} from "react-native";
import AppButton from "../common/AppButton";
import AppText from "../common/AppText";
import Card from "../common/Card";
import { SearchBar } from "react-native-elements";
import AwesomeAlert from "react-native-awesome-alerts";

import {
  ScrollView,
  TouchableNativeFeedback,
} from "react-native-gesture-handler";
import AppTextInput from "../common/AppTextInput";
import routes from "../navigations/routes";
import { dark } from "@material-ui/core/styles/createPalette";

export default function Communities({ navigation, route }) {
  const [tip, setTip] = useState("Join Community");
  const [alert, setAlert] = useState(false);

  return (
    <Screen navigation={navigation} title="Travel Community">
      <AwesomeAlert
        show={alert}
        showProgress={false}
        title="Alert"
        message="Do you want to join the community"
        closeOnTouchOutside={true}
        closeOnHardwareBackPress={false}
        showCancelButton={true}
        showConfirmButton={true}
        cancelText="don't join"
        confirmText="join community"
        onConfirmPressed={() => {
          setAlert(false);
          setTip("Joined");
        }}
        onCancelPressed={() => {
          setAlert(false);
        }}
      />
      <ImageBackground
        source={require("../assets/TravelCommunity/SLCommunity.jpg")}
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
            SRI LANKA Travel Community
          </AppText>
        </View>
      </ImageBackground>

      <View style={styles.joinBtn}>
        <AppButton
          color="primary"
          onPress={() => setAlert(true)}
          onChange={({ target }) => setTip(target.value)}
          title={tip}
        />
      </View>

      <View
        style={{
          borderWidth: 1,
          borderColor: "black",
          borderRadius: 4,
          width: 150,
          marginLeft: 10,
          marginBottom: 20,
        }}
      >
        <Picker>
          <Picker.Item label="Filter" value="0" />
          <Picker.Item label="Questios" value="Questios" />
          <Picker.Item label="Tips" value="Tips" />
        </Picker>
      </View>

      <ScrollView styles={styles.details}>
        <Card
          title="Question"
          subTitle="Where is the best place for surfing?"
        />
        <Card title="Tip" subTitle="Best place for hike" />
        <Card
          title="Question"
          subTitle="Where is the best place for surfing?"
        />
        <Card title="Tip" subTitle="Best place for hike" />
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
  joinBtn: {
    flex: 0,
    width: "80%",
    alignSelf: "center",
  },
});
