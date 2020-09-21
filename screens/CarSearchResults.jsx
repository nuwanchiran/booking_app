import React, { Component } from "react";
import { Button, Text, StyleSheet, View } from "react-native";
import Screen from "../Components/Screen";
import CarResult from "../Components/CarRental/CarResult";
import SearchCarComponent from "../Components/CarRental/SearchCarComponent";
import CarRentals from "./CarRentals";
import SelectedCar from "./SelectedCar";

export default class CarSearchResults extends Component {
  constructor(props) {
    super();
    this.state = {};
  }

  render() {
    return (
      <Screen navigation={this.props.navigation}>
        <Text>Car Search Results</Text>

        <Button
          onPress={() => this.props.navigation.navigate("FilterCars")}
          title="Filter"
        />

        <CarResult navigation={this.props.navigation} />
        <CarResult navigation={this.props.navigation} />
        <CarResult navigation={this.props.navigation} />
        <CarResult navigation={this.props.navigation} />
        <CarResult navigation={this.props.navigation} />
      </Screen>
    );
  }
}

const styles = StyleSheet.create({});
