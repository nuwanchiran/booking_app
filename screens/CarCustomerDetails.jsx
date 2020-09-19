import React, { Component } from "react";
import { Button, Text, StyleSheet, View } from "react-native";
import Header from "../common/Header";
import Screen from "../common/Screen";
import CarResult from "../Components/CarRental/CarResult";
import SearchCarComponent from "../Components/CarRental/SearchCarComponent";

export default class CarCustomerDetails extends Component {
  constructor(props) {
    super();
    this.state = {};
  }

  render() {
    return (
      <Screen navigation={this.props.navigation}>
        <Text>Car Customer Details</Text>

        <Button
          onPress={() => this.props.navigation.navigate("PaymentGateway")}
          title="Submit"
        />
      </Screen>
    );
  }
}

const styles = StyleSheet.create({});
