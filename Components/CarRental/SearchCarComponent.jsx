import React, { Component } from "react";
import { CheckBox, Button, Text, StyleSheet, View } from "react-native";
import colors from "../../config/colors";
import AppButton from "../../common/AppButton";
import AppText from "../../common/AppText";
import RangeSlider, { Slider } from "react-native-range-slider-expo";

export default class SearchCarComponent extends Component {
  constructor(props) {
    super();
    this.state = {
      isSelected: true,
    };
    this.setSelected = this.setSelected.bind(this);
  }

  setFromValue(val) {
    console.log("from" + val);
  }
  setToValue(val) {
    console.log("to" + val);
  }

  setSelected() {
    console.log("sele");
    this.setState({ isSelected: !this.state.isSelected });
  }

  render() {
    return (
      <View
        style={[
          styles.container,
          {
            // flexDirection: rowMode ? "row" : "column",
            minHeight: 100,
            // height: height,
          },
        ]}
      >
        <View>
          <View style={styles.returnToSameLocContainer}>
            <View style={styles.returnToSameLocTextView}>
              <AppText>Return to same location</AppText>
            </View>
            <View style={styles.returnToSameLocTick}>
              <CheckBox
                value={this.state.isSelected}
                onValueChange={this.setSelected}
                style={styles.checkboxcust}
              />
            </View>
          </View>
          <View>
            <RangeSlider
              min={5}
              max={25}
              fromValueOnChange={(value) => this.setFromValue(value)}
              toValueOnChange={(value) => this.setToValue(value)}
              initialFromValue={11}
            />
          </View>
          <AppButton
            title="Search"
            color="primary"
            iconColor="light"
            onPress={() => this.props.navigation.navigate("CarSearchResults")}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    backgroundColor: colors.light,
    flex: 1,
    padding: 3,
    borderRadius: 3,
    marginVertical: 10,
    marginHorizontal: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 3,
  },
  returnToSameLocContainer: {
    flexDirection: "row",
    alignItems: "flex-start",
    alignContent: "flex-start",
  },
  returnToSameLocTextView: { flexGrow: 1, paddingTop: 15, paddingLeft: 10 },
  returnToSameLocTick: { flexGrow: 0 },
  checkboxcust: {
    marginVertical: 10,
    marginHorizontal: 10,
  },
});
