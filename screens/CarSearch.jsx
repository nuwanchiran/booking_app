import React, { Component } from "react";
import { Button, Text, StyleSheet, View } from "react-native";
import Screen from "../components/Screen";
import HotelOrCarSelectorCard from "../components/cards/HotelOrCarSelectorCard";
import SearchCarComponent from "../components/CarRental/SearchCarComponent";
import SearchCarHistoryComponent from "../components/CarRental/SearchCarHistoryComponent";

export default class CarSearch extends Component {
  constructor(props) {
    super();
    this.state = {};
  }

  render() {
    return (
      <Screen navigation={this.props.navigation}>
        <HotelOrCarSelectorCard type={"car"} />
        <SearchCarComponent navigation={this.props.navigation} />
        <SearchCarHistoryComponent navigation={this.props.navigation} />
      </Screen>
    );
  }
}

const styles = StyleSheet.create({});
