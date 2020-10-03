import React, { Component } from "react";
import { Button, Text, StyleSheet, View } from "react-native";
import Screen from "../components/Screen";
import CarResult from "../components/CarRental/CarResult";
import SearchCarComponent from "../components/CarRental/SearchCarComponent";
import CarFilterComponent from "../components/CarRental/CarFilterComponent";
import AppButton from "../common/AppButton";

export default class CarSearchResults extends Component {
  constructor(props) {
    super();
    this.state = {};
  }

  render() {
    return (
      <Screen navigation={this.props.navigation}>
        <CarFilterComponent />

        <AppButton
          title="Filter"
          color="primary"
          iconColor="light"
          onPress={() => this.props.navigation.navigate("CarSearchResults")}
        />
      </Screen>
    );
  }
}

const styles = StyleSheet.create({});
