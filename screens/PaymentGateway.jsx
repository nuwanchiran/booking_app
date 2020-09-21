import React, { Component } from "react";
import { Button, Text, StyleSheet, View } from "react-native";
import Screen from "../components/Screen";
import CarResult from "../components/CarRental/CarResult";
import SearchCarComponent from "../components/CarRental/SearchCarComponent";

export default class PaymentGateway extends Component {
  constructor(props) {
    super();
    this.state = {};
  }

  render() {
    return (
      <Screen navigation={this.props.navigation}>
        <Text>PaymentGateway</Text>
        <Button
          onPress={() => this.props.navigation.navigate("CarBookingFinished")}
          title='Pay'
        />
      </Screen>
    );
  }
}

const styles = StyleSheet.create({});
