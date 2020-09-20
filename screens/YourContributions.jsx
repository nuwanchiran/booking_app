import React, { Component } from "react";
import { Button, Text, StyleSheet, View } from "react-native";
import Screen from "../Components/Screen";

export default class YourContributions extends Component {
  constructor(props) {
    super();
    this.state = {};
  }

  render() {
    return (
      <Screen navigation={this.props.navigation}>
        <Text>Your Contributions</Text>
        <Button
          onPress={() => this.props.navigation.goBack()}
          title="Go back home"
        />
      </Screen>
    );
  }
}

const styles = StyleSheet.create({});
