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
      isSelectedAge: false,
    };
    this.setSelected = this.setSelected.bind(this);
    this.setSelectedAge = this.setSelectedAge.bind(this);
  }

  setFromValue(val) {
    console.log("from" + val);
  }
  setToValue(val) {
    console.log("to" + val);
  }

  setSelected() {
    this.setState({ isSelected: !this.state.isSelected });
  }
  setSelectedAge() {
    this.setState({ isSelectedAge: !this.state.isSelectedAge });
  }

  render() {
    return (
      <View
        style={[
          styles.container,
          {
            // flexDirection: rowMode ? "row" : "column",
            // minHeight: 100,
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
            {/* <View onPress={showDatepicker}>Date</View>
            <View onPress={showTimepicker}>Time</View> */}

            {/* <View>
              {show && (
                <DateTimePicker
                  testID="dateTimePicker"
                  value={date}
                  mode={mode}
                  is24Hour={true}
                  display="default"
                  onChange={this.onChange}
                />
              )}
            </View> */}
          </View>
          <View>
            <RangeSlider
              min={18}
              max={80}
              fromValueOnChange={(value) => this.setFromValue(value)}
              toValueOnChange={(value) => this.setToValue(value)}
              initialFromValue={25}
            />
          </View>
          <View style={styles.returnToSameLocContainer}>
            <View style={styles.anyAgeTextView}>
              <AppText>Any age</AppText>
            </View>
            <View style={styles.AnyAgeTickView}>
              <CheckBox
                value={this.state.isSelectedAge}
                onValueChange={this.setSelectedAge}
                style={styles.checkboxcust}
              />
            </View>
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
  anyAgeContainer: {
    flexDirection: "row",
    alignItems: "flex-start",
    alignContent: "flex-start",
  },

  anyAgeTextView: { flexGrow: 1, paddingTop: 15, paddingLeft: 10 },
  AnyAgeTickView: { flexGrow: 0 },
});
