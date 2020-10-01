import React, { Component } from "react";
import { Button, Text, StyleSheet, View } from "react-native";
import Screen from "../components/Screen";
import CarResult from "../components/CarRental/CarResult";
import SearchCarComponent from "../components/CarRental/SearchCarComponent";
import SelectedCarDetailsComponent from "../components/CarRental/SelectedCarDetailsComponent";
import HotelOrCarSelectorCard from "../components/cards/HotelOrCarSelectorCard";
import CarCustomerDetailsComponent from "../components/CarRental/CarCustomerDetailsComponent";
import { ScrollView } from "react-native-gesture-handler";
import AppButton from "../common/AppButton";
import ProgressBarCard from "../components/cards/ProgressBarCard";

export default class CarCustomerDetails extends Component {
  constructor(props) {
    super();
    this.state = {};
  }

  render() {
    return (
      <Screen navigation={this.props.navigation}>
        <HotelOrCarSelectorCard type={"car"} />
        <ProgressBarCard curStep={1} />

        <ScrollView>
          <CarCustomerDetailsComponent />
        </ScrollView>

        <AppButton
          title="Submit"
          color="primary"
          onPress={() => this.props.navigation.navigate("PaymentGateway")}
        />
      </Screen>
    );
  }
}

const styles = StyleSheet.create({});
