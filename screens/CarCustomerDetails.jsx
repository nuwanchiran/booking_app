import React, { Component } from "react";
import { Button, Text, StyleSheet, View } from "react-native";
import Screen from "../components/Screen";
import CarResult from "../components/CarRental/CarResult";
import SearchCarComponent from "../components/CarRental/SearchCarComponent";

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
          title='Submit'
        />
      </Screen>
    );
  }
}

const styles = StyleSheet.create({});