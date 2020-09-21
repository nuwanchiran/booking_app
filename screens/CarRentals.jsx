import React, { Component } from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import AppText from "../common/AppText";
import Screen from "../components/Screen";

export default class CarRentals extends Component {
  constructor(props) {
    super();
    this.state = {};
  }

  componentDidMount() {
    this.timeoutHandle = setTimeout(() => {
      this.props.navigation.navigate("CarSearch");
    }, 2000);
  }

  render() {
    return (
      <Screen navigation={this.props.navigation}>
        <AppText>CarRentals</AppText>

        {/* <Button
          onPress={() => this.props.navigation.navigate("CarSearch")}
          title="Go to Car Search screen"
        /> */}
      </Screen>
    );
  }
}

const styles = StyleSheet.create({});
