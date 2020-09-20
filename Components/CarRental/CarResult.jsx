import React, { Component } from "react";
import { Button, Text, StyleSheet, View } from "react-native";

export default class CarResult extends Component {
  constructor(props) {
    super();
    this.state = {};
    console.log(props.navigation);
  }

  navigate() {
    this.props.navigation.navigate("SelectedCar");
    //console.log("fffffff");
  }

  render() {
    return (
      <View>
        <div onClick={() => this.navigate()}>
          {/* onClick={() => this.props.navigation.navigate("SelectedCar")} */}
          <Text>Car Result ###</Text>
          {/* <Button
            onPress={() => this.props.navigation.navigate("SelectedCar")}
            title="View this car>>"
          /> */}
        </div>
      </View>
    );
  }
}

const styles = StyleSheet.create({});
