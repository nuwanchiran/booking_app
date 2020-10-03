import React, { Component } from "react";
import { Button, Text, StyleSheet, View, Image } from "react-native";
import Screen from "../components/Screen";
import FeedbackCard from "../components/cards/FeedbackCard";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";

export default class AppFeedback extends Component {
  constructor(props) {
    super();
    this.state = {};
  }

  render() {
    return (
      <Screen navigation={this.props.navigation}>
        {/* <Text>App Feedback</Text> */}
        <TouchableOpacity>
          <Image
            source={require("../assets/appFeedback/appFeedbackMain.jpg")}
            style={{ width: "100%", height: 250 }}
          />
        </TouchableOpacity>

        <ScrollView>
          <FeedbackCard />
        </ScrollView>
        {/* <Button
          onPress={() => this.props.navigation.goBack()}
          title="Go back home"
        /> */}
      </Screen>
    );
  }
}

const styles = StyleSheet.create({});
