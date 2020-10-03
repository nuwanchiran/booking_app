import React, { Component } from "react";
import { Button, Text, StyleSheet, View } from "react-native";
import AppText from "../../common/AppText";
import colors from "../../config/colors";

export default class CarFeeComponent extends Component {
  constructor(props) {
    super();
    this.state = {
      charge: props.charge,
      noDays: props.noDays,
      tax: props.tax,
      tot: 0,
    };
    this.handleClick();
  }

  handleClick() {}

  componentDidMount() {
    var temp = this.state.charge * this.state.noDays + this.state.tax;
    this.setState({ tot: temp });
  }
  render() {
    return (
      <View style={{ flex: 0.33 }}>
        <View
          style={[
            styles.container,
            {
              // flexDirection: rowMode ? "row" : "column",
              minHeight: 100,
            },
          ]}
        >
          <View style={styles.costContainer}></View>

          <View style={styles.costSecContainer}>
            <View>
              <AppText style={styles.priceData}>Charge Per Day</AppText>
            </View>
            <View>
              <AppText style={styles.priceData}>
                US$ {this.state.charge}
              </AppText>
            </View>
          </View>

          <View style={styles.costSecContainer}>
            <View>
              <AppText style={styles.priceData}>Days Selected</AppText>
            </View>
            <View>
              <AppText style={styles.priceData}>X {this.state.noDays}</AppText>
            </View>
          </View>

          <View style={styles.costSecContainer}>
            <View>
              <AppText style={styles.priceData}>Government Tax</AppText>
            </View>
            <View>
              <AppText style={styles.priceData}>US$ {this.state.tax}</AppText>
            </View>
          </View>

          <View style={styles.costSecContainer}>
            <View>
              <AppText style={{ fontWeight: "bold", fontSize: 22 }}>
                Total Charge
              </AppText>
            </View>
            <View>
              <AppText style={{ fontWeight: "bold", fontSize: 22 }}>
                US$ {this.state.tot}
              </AppText>
            </View>
          </View>
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
  costSecContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    padding: 5,
  },
  priceData: {
    fontSize: 15,
  },
});
