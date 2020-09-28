import React, { Component } from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import Screen from "../components/Screen";
import SelectedCarDetailsComponent from "../components/CarRental/SelectedCarDetailsComponent";
import PickupDropOffComponent from "../components/CarRental/PickupDropOffComponent";
import CarRatingComponent from "../components/CarRental/CarRatingComponent";
import MapComponent from "../components/CarRental/MapComponent";
import CarFeeComponent from "../components/CarRental/CarFeeComponent";
import HotelOrCarSelectorCard from "../components/cards/HotelOrCarSelectorCard";

export default class SelectedCar extends Component {
  constructor(props) {
    super();
    this.state = {};
  }

  render() {
    return (
      <Screen navigation={this.props.navigation}>
        <HotelOrCarSelectorCard type={"car"} />
        <Text>Selected Car </Text>

        <SelectedCarDetailsComponent />
        <PickupDropOffComponent />
        <CarRatingComponent />
        <MapComponent />
        <CarFeeComponent charge={10.2} noDays={2} tax={3.03} />

        <Button
          onPress={() => this.props.navigation.navigate("CarCustomerDetails")}
          title="Book this car"
        />
      </Screen>
    );
  }
}

const styles = StyleSheet.create({});
