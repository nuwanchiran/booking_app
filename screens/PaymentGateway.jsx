import React, { Component } from "react";
import { Button, Text, StyleSheet, View } from "react-native";
import Screen from "../components/Screen";
import CarResult from "../components/CarRental/CarResult";
import SearchCarComponent from "../components/CarRental/SearchCarComponent";
import HotelOrCarSelectorCard from "../components/cards/HotelOrCarSelectorCard";
import PaymentGatewayComponent from "../components/CarRental/PaymentGatewayComponent";
import { ScrollView } from "react-native-gesture-handler";
import AppButton from "../common/AppButton";
import AppText from "../common/AppText";
import ProgressBarCard from "../components/cards/ProgressBarCard";

export default class PaymentGateway extends Component {
  constructor(props) {
    super();
    this.state = {
      totPrice: 0,
    };
  }

  callbackFunction = (childData) => {
    this.setState({ totPrice: childData });
  };

  render() {
    const var1 = "Pay > US$ " + this.state.totPrice;
    return (
      <Screen navigation={this.props.navigation}>
        <HotelOrCarSelectorCard
          type={"car"}
          navigation={this.props.navigation}
        />
        <ProgressBarCard curStep={2} />

        <ScrollView>
          <PaymentGatewayComponent parentCallback={this.callbackFunction} />
        </ScrollView>

        {/* <Button
          onPress={() => this.props.navigation.navigate("CarBookingFinished")}
          title="Pay"
        /> */}

        <AppButton
          title={"Pay > US$" + this.state.totPrice}
          color="primary"
          icon="wallet"
          onPress={() => this.props.navigation.navigate("CarBookingFinished")}
        />
      </Screen>
    );
  }
}

const styles = StyleSheet.create({});
