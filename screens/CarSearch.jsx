import React, { Component } from "react";
import { Button, Text, StyleSheet, View } from "react-native";
import Screen from "../components/Screen";
import SearchCarComponent from "../components/CarRental/SearchCarComponent";

export default class CarSearch extends Component {
  constructor(props) {
    super();
    this.state = {};
  }

  render() {
    return (
      <Screen navigation={this.props.navigation}>
        <Text>CarSearch</Text>

        <SearchCarComponent navigation={this.props.navigation} />

        {/* <Button
          onPress={() => this.props.navigation.goBack()}
          title="Go back home"
        /> */}
      </Screen>
    );
  }
}

const styles = StyleSheet.create({});
