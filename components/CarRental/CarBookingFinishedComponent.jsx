import React, { Component } from "react";
import { Button, Text, StyleSheet, View, Image } from "react-native";
import AppText from "../../common/AppText";
import colors from "../../config/colors";
import StyledText from "react-native-styled-text";

export default class CarBookingFinishedComponent extends Component {
  constructor(props) {
    super();
    this.state = {
      isLoaded: false,
    };
  }

  componentDidMount() {
    this.timeoutHandle = setTimeout(() => {
      this.setState({ isLoaded: true });
    }, 1000);
  }

  render() {
    return (
      <View style={{ flex: 0.3 }}>
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
          <View style={styles.titleContainer}>
            <AppText style={styles.titleText}>Booking Completed</AppText>
          </View>

          <View style={styles.bookingSuccessContainer}>
            <View style={styles.tickSection}>
              {/* Tick side start */}

              {!this.state.isLoaded && (
                <Image
                  source={require("../../assets/carbookingCompleted/tick.gif")}
                  style={styles.tickImgStyle}
                />
              )}

              {this.state.isLoaded && (
                <Image
                  source={require("../../assets/carbookingCompleted/tickStable.jpg")}
                  style={styles.tickImgStyle}
                />
              )}

              {/* Tick side end */}
            </View>
            <View style={styles.msgSection}>
              {/* Mgs side start */}
              <AppText>Your Booking is confirmed</AppText>

              <StyledText
                style={{
                  fontSize: 15,
                  fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
                  padding: 10,
                }}
              >
                {"Reference ID: <b> #34846392</b>"}
              </StyledText>

              {/* Msg side end*/}
            </View>
          </View>

          <View>
            <StyledText
              style={{
                fontSize: 15,
                fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
                padding: 10,
              }}
            >
              {
                "Confirmation email has been sent to your email address <b> johnPeter@gmail.com</b>!"
              }
            </StyledText>
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
  titleContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "flex-start",
  },
  titleText: {
    fontWeight: "bold",
    fontSize: 22,
    padding: 15,
  },

  bookingSuccessContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    alignContent: "space-between",
  },
  tickSection: { flexGrow: 1 },
  msgSection: { flexGrow: 1, paddingTop: "10%" },
  tickImgStyle: {
    width: 130,
    height: 130,
  },
});
