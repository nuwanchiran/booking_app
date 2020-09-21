import React, { Component } from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import Screen from "../components/Screen";
import SelectedCarDetailsComponent from "../components/CarRental/SelectedCarDetailsComponent";
import PickupDropOffComponent from "../components/CarRental/PickupDropOffComponent";
import CarRatingComponent from "../components/CarRental/CarRatingComponent";
import MapComponent from "../components/CarRental/MapComponent";
import CarFeeComponent from "../components/CarRental/CarFeeComponent";

export default class SelectedCar extends Component {
  constructor(props) {
    super();
    this.state = {};
  }

  render() {
    return (
      <Screen navigation={this.props.navigation}>
        <Text>Selected Car </Text>

        <SelectedCarDetailsComponent />
        <PickupDropOffComponent />
        <CarRatingComponent />
        <MapComponent />
        <CarFeeComponent />

        <Button
          onPress={() => this.props.navigation.navigate("CarCustomerDetails")}
          title='Book this car'
        />
      </Screen>
    );
  }
}

const styles = StyleSheet.create({});
