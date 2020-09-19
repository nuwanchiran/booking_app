import React, { Component } from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import Header from "../common/Header";
import Screen from "../common/Screen";

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
        <Text>CarRentals</Text>

        {/* <Button
          onPress={() => this.props.navigation.navigate("CarSearch")}
          title="Go to Car Search screen"
        /> */}
      </Screen>
    );
  }
}

const styles = StyleSheet.create({});
