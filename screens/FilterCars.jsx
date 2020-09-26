import React, { Component } from "react";
import { Button, Text, StyleSheet, View } from "react-native";
import Screen from "../components/Screen";
import CarResult from "../components/CarRental/CarResult";
import SearchCarComponent from "../components/CarRental/SearchCarComponent";

export default class CarSearchResults extends Component {
  constructor(props) {
    super();
    this.state = {};
  }

  render() {
    return (
      <Screen navigation={this.props.navigation}>
        <Text>Filter Cars</Text>

        <Text>Filter 1</Text>
        <Text>Filter 2</Text>
        <Text>Filter 3</Text>
        <Text>Filter 4</Text>

        <Button
          onPress={() => this.props.navigation.navigate("CarSearchResults")}
          title='Filter'
        />
      </Screen>
    );
  }
}

const styles = StyleSheet.create({});