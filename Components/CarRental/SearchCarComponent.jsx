import React, { Component } from "react";
import { Button, Text, StyleSheet, View } from "react-native";

export default class SearchCarComponent extends Component {
  constructor(props) {
    super();
    this.state = {};
    console.log(props.navigation);
  }

  render() {
    return (
      <View>
        <div>
          <Button
            onPress={() => this.props.navigation.navigate("CarSearchResults")}
            title="Search Cars#"
          />
        </div>
      </View>
    );
  }
}

const styles = StyleSheet.create({});
