import React, { Component } from "react";
import { Button, StyleSheet, Text, View, Image } from "react-native";
import AppText from "../common/AppText";
import ProgressBar from "react-native-progress/Bar";

export default class CarRentals extends Component {
  constructor(props) {
    super();
    this.state = {
      progress: 0.0,
    };
  }

  componentDidMount() {
    this.timeoutHandle = setTimeout(() => {
      this.loading();
    }, 20);
  }

  loading() {
    var prg = this.state.progress;
    this.setState({
      progress: prg + 0.01,
    });
    if (this.state.progress >= 1) {
      this.props.navigation.navigate("CarSearch");
    } else {
      this.timeoutHandle = setTimeout(() => {
        this.loading();
      }, 20);
    }
  }

  render() {
    return (
      <View>
        {/* <Screen navigation={this.props.navigation}> */}
        <Image
          source={require("../assets/carRental/BookingLogoTransparent.png")}
          style={{
            transform: [{ scale: 0.3 }],
            alignSelf: "center",
            marginTop: "20%",
          }}
        />

        <Image
          source={require("../assets/carRental/carRentalLogoTransparent.png")}
          style={{
            transform: [{ scale: 0.9 }],
            alignSelf: "center",
            marginTop: "10%",
          }}
        />
        {/* <AppText>CarRentals</AppText> */}
        <ProgressBar
          progress={this.state.progress}
          width={250}
          style={{ alignSelf: "center", marginTop: "70%" }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({});
