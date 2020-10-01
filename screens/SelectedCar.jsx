import React, { Component } from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import Screen from "../components/Screen";
import SelectedCarDetailsComponent from "../components/CarRental/SelectedCarDetailsComponent";
import PickupDropOffComponent from "../components/CarRental/PickupDropOffComponent";
import CarRatingComponent from "../components/CarRental/CarRatingComponent";
import MapComponent from "../components/CarRental/MapComponent";
import CarFeeComponent from "../components/CarRental/CarFeeComponent";
import HotelOrCarSelectorCard from "../components/cards/HotelOrCarSelectorCard";
import { ScrollView } from "react-native-gesture-handler";
import AppButton from "../common/AppButton";
import AppText from "../common/AppText";
import ProgressBarComponent from "../components/CarRental/ProgressBarComponent";
import ProgressBarCard from "../components/cards/ProgressBarCard";

export default class SelectedCar extends Component {
  constructor(props) {
    super();
    this.state = {};
  }

  render() {
    return (
      <Screen navigation={this.props.navigation}>
        <HotelOrCarSelectorCard type={"car"} />
        <ProgressBarCard curStep={0} />

        <ScrollView>
          {/* <Text>CarNAme: {JSON.stringify(carName)}</Text> */}
          <SelectedCarDetailsComponent />
          <PickupDropOffComponent />
          <CarRatingComponent />

          <MapComponent />

          <CarFeeComponent charge={10.2} noDays={2} tax={3.03} />
          <View style={{ alignItems: "center" }}>
            <AppText style={{ fontSize: 12 }}>Terms and conditions</AppText>
          </View>
        </ScrollView>

        <View>
          <AppButton
            title="Book this car"
            color="primary"
            // iconColor="light"
            onPress={() => this.props.navigation.navigate("CarCustomerDetails")}
          />
        </View>
      </Screen>
    );
  }
}

const styles = StyleSheet.create({});
