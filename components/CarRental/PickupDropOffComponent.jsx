import React, { Component } from "react";
import { Button, Text, StyleSheet, View, Image } from "react-native";
import AppText from "../../common/AppText";
import colors from "../../config/colors";
import { Ionicons } from "@expo/vector-icons";
import Divider from "@material-ui/core/Divider";

export default class SelectedCarDetailsComponent extends Component {
  constructor(props) {
    super();
    this.state = {};
  }

  render() {
    return (
      <View style={{ flex: 0.5 }}>
        <View
          style={[
            styles.container,
            {
              // flexDirection: rowMode ? "row" : "column",
              minHeight: 100,
            },
          ]}
        >
          <View style={styles.pickupDropoffContainer}>
            {/* Pickup section start */}
            <View style={styles.pickUpContainer}>
              <View style={{ flexDirection: "row" }}>
                <Ionicons
                  style={{ padding: 10 }}
                  name="ios-pin"
                  size={20}
                  // color={iconColor}
                  // style={styles.icon}
                />
                <AppText
                  style={{
                    fontSize: 20,
                    fontWeight: "bold",
                    paddingTop: 10,
                    paddingLeft: "5%",
                  }}
                >
                  Pickup
                </AppText>
              </View>
              <View>
                <AppText style={{ fontSize: 15, paddingLeft: 8 }}>
                  10/09/2020 08:30
                </AppText>
                <AppText style={{ fontSize: 15, paddingLeft: 8 }}>
                  Singapore Changi Airport
                </AppText>
              </View>
            </View>
            {/* Pickup section end */}
            <View style={styles.middleLineContainer}>
              <Image
                source={require("../../assets/pickupDropoff/middleLine.jpg")}
                style={styles.middleLineImgStyle}
              />
            </View>

            {/* Drop off section start */}
            <View style={styles.dropOffContainer}>
              <View style={{ flexDirection: "row" }}>
                <Ionicons
                  style={{ padding: 10 }}
                  name="ios-pin"
                  size={20}
                  // color={iconColor}
                  // style={styles.icon}
                />
                <AppText
                  style={{
                    fontSize: 20,
                    fontWeight: "bold",
                    paddingTop: 10,
                    paddingLeft: "5%",
                  }}
                >
                  Drop off
                </AppText>
              </View>
              <View>
                <AppText style={{ fontSize: 15, paddingLeft: 8 }}>
                  12/09/2020 13:30
                </AppText>
                <AppText style={{ fontSize: 15, paddingLeft: 8 }}>
                  Singapore Changi Airport
                </AppText>
              </View>
            </View>
            {/* Drop off section end */}
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

  pickupDropoffContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    // backgroundColor: "green",
  },
  pickUpContainer: {
    flexGrow: 20,
    // backgroundColor: "pink",
  },
  middleLineContainer: {
    flexGrow: 1,
    // backgroundColor: "gray",
  },
  dropOffContainer: {
    flexGrow: 20,
    // backgroundColor: "blue",
  },
  middleLineImgStyle: {
    height: "100%",
    width: 2,
  },
});
