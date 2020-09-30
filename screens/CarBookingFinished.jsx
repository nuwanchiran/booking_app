import React, { Component } from "react";
import { Button, Text, StyleSheet, View } from "react-native";
import Screen from "../components/Screen";
import CarResult from "../components/CarRental/CarResult";
import SearchCarComponent from "../components/CarRental/SearchCarComponent";
import HotelOrCarSelectorCard from "../components/cards/HotelOrCarSelectorCard";
import CarBookingFinishedComponent from "../components/CarRental/CarBookingFinishedComponent";
import AppButton from "../common/AppButton";
import { ScrollView } from "react-native-gesture-handler";
import PickupDropOffComponent from "../components/CarRental/PickupDropOffComponent";
import AppText from "../common/AppText";
import ProgressBarCard from "../components/cards/ProgressBarCard";

export default class CarBookingFinished extends Component {
  constructor(props) {
    super();
    this.state = {};
  }

  render() {
    return (
      <Screen navigation={this.props.navigation}>
        <HotelOrCarSelectorCard type={"car"} />
        <ProgressBarCard />
        <ScrollView>
          <CarBookingFinishedComponent />

          <PickupDropOffComponent />
          <View style={styles.thanksMsgView}>
            <AppText style={styles.thanksMsgTxt}>
              Thanks for booking with us...
            </AppText>
          </View>
        </ScrollView>

        <AppButton
          title="Continue Searching"
          color="primary"
          onPress={() => this.props.navigation.navigate("CarSearch")}
        />
      </Screen>
    );
  }
}

const styles = StyleSheet.create({
  thanksMsgView: { alignItems: "center", padding: 20 },
  thanksMsgTxt: { fontSize: 15 },
});
