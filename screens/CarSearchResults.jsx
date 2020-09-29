import React, { Component } from "react";
import { Button, Text, StyleSheet, View } from "react-native";
import Screen from "../components/Screen";
import CarResult from "../components/CarRental/CarResult";
import SearchCarComponent from "../components/CarRental/SearchCarComponent";
import CarRentals from "./CarRentals";
import SelectedCar from "./SelectedCar";
import HotelOrCarSelectorCard from "../components/cards/HotelOrCarSelectorCard";
import FilterSortByComponent from "../components/CarRental/FilterSortByComponent";
import { ScrollView } from "react-native-gesture-handler";

export default class CarSearchResults extends Component {
  constructor(props) {
    super();
    this.state = {};
  }

  render() {
    return (
      <Screen navigation={this.props.navigation}>
        <HotelOrCarSelectorCard type={"car"} />
        <FilterSortByComponent navigation={this.props.navigation} />

        {/* <Button
          onPress={() => this.props.navigation.navigate("FilterCars")}
          title="Filter"
        /> */}
        <ScrollView>
          <CarResult navigation={this.props.navigation} />
          <CarResult navigation={this.props.navigation} />
          <CarResult navigation={this.props.navigation} />
          <CarResult navigation={this.props.navigation} />
          <CarResult navigation={this.props.navigation} />
        </ScrollView>
      </Screen>
    );
  }
}

const styles = StyleSheet.create({});
