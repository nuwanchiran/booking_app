import React, { Component } from "react";
import { Button, Text, StyleSheet, View, ImageBackground } from "react-native";
import AppText from "../common/AppText";
import Screen from "../components/Screen";
import YourContributionsComponenet from "../components/YourContributionsComponenet";

export default class YourContributions extends Component {
  constructor(props) {
    super();
    this.state = {};
  }
  //TODO: this code have some 🐛 to fix ❓
  render() {
    return (
      <Screen navigation={this.props.navigation}>
        <ImageBackground
          source={require("../assets/yourContributions/backgroundImg1.jpg")}
          style={{ width: "100%", height: 250 }}
        >
          <View
            style={{
              position: "absolute",
              top: 15,
              left: 0,
              right: 0,
              bottom: 0,
              alignItems: "center",
            }}
          >
            <AppText style={styles.yourContributionsHeading}>
              Your Contributions
            </AppText>
          </View>
        </ImageBackground>

        <YourContributionsComponenet />
        {/* <Button
          onPress={() => this.props.navigation.goBack()}
          title="Go back home"
        /> */}
      </Screen>
    );
  }
}

const styles = StyleSheet.create({
  yourContributionsHeading: {
    fontWeight: "bold",
    fontSize: 30,
    color: "black",
  },
});
