import React, { Component } from "react";
import { Button, Text, StyleSheet, View, Switch, Picker } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { TouchableEffect } from "react-native-simple-dialogs";
import AppText from "../../common/AppText";
import colors from "../../config/colors";
import StyledText from "react-native-styled-text";

export default class FilterSortByComponent extends Component {
  constructor(props) {
    super();
    this.state = {
      //   name: props.isEnabled,
      //   isEnabled: props.isEnabled,
      selectedType: "Relavance",
    };
  }
  setSelectedValue(value) {
    this.setState({ isEnabled: !this.state.isEnabled });
  }

  render() {
    return (
      <View>
        <View style={styles.filterSortContainer}>
          <View style={styles.filterSection}>
            <TouchableOpacity style={{ width: 75 }}>
              <Button
                color="#d6d6d6"
                onPress={() => this.props.navigation.navigate("FilterCars")}
                title="Filter"
              />
            </TouchableOpacity>
          </View>
          <View style={styles.filterCountSection}>
            <AppText style={styles.filterCountTxt}>0 Filters applied</AppText>
          </View>
          <View style={styles.filterBySesion}>
            <AppText style={styles.filterByTxt}>Filter By |</AppText>
          </View>
          <View style={styles.filterByComboSection}>
            <Picker
              selectedValue={this.state.selectedType}
              style={{ height: 50, width: 160 }}
              // onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
              onValueChange={(itemValue, itemIndex) =>
                this.setState({ selectedType: itemValue })
              }
            >
              <Picker.Item label="Relavance" value="relavance" />
              <Picker.Item label="Price" value="price" />
              <Picker.Item label="Car Rating" value="carRating" />
              <Picker.Item label="Safty" value="safty" />
              <Picker.Item label="Driver Rating" value="driverRating" />
            </Picker>
          </View>
        </View>
        <View>
          <View>
            <View style={{ alignSelf: "center" }}>
              <StyledText
                style={{
                  fontSize: 18,
                  fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
                  paddingBottom: 10,
                }}
              >
                {"<b>150</b> Results found for you in <b> Singapore</b>"}
              </StyledText>
            </View>
            <View style={{ alignSelf: "center" }}>
              <AppText style={{ fontWeight: "bold", fontSize: 16 }}>
                10/09/2020 08:30 {">"} 12/09/2020 01:30
              </AppText>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    marginTop: "5%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    alignContent: "flex-start",
    padding: 10,
  },
  filterSortContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    padding: 10,
  },
  filterSection: {},
  filterCountSection: { padding: 12 },
  filterBySesion: { padding: 10 },
  filterByComboSection: { marginTop: -4 },
  filterCountTxt: {
    fontSize: 11,
  },
  filterByTxt: {
    fontSize: 15,
  },
});
