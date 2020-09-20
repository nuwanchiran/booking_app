import React, { Component } from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import Screen from "../Components/Screen";
import SelectedCarDetailsComponent from "../Components/CarRental/SelectedCarDetailsComponent";
import PickupDropOffComponent from "../Components/CarRental/PickupDropOffComponent";
import CarRatingComponent from "../Components/CarRental/CarRatingComponent";
import MapComponent from "../Components/CarRental/MapComponent";
import CarFeeComponent from "../Components/CarRental/CarFeeComponent";

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
          title="Book this car"
        />
      </Screen>
    );
  }
}

const styles = StyleSheet.create({});
