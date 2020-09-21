import React, { Component } from "react";
import { Button, Text, StyleSheet, View } from "react-native";
import Screen from "../Components/Screen";
import CarResult from "../Components/CarRental/CarResult";
import SearchCarComponent from "../Components/CarRental/SearchCarComponent";

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
          title="Pay"
        />
      </Screen>
    );
  }
}

const styles = StyleSheet.create({});
