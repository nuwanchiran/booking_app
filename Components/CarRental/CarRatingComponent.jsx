import React, { Component } from "react";
import { Button, Text, StyleSheet, View, Image } from "react-native";
import AppText from "../../common/AppText";
import colors from "../../config/colors";
import ProgressBar from "react-native-progress/Bar";

export default class CarRatingComponent extends Component {
  constructor(props) {
    super();
    this.state = {};
  }

  render() {
    return (
      <View style={{ flex: 0.7 }}>
        <View
          style={[
            styles.container,
            {
              // flexDirection: rowMode ? "row" : "column",
              minHeight: 100,
            },
          ]}
        >
          <View style={{ flexDirection: "row" }}>
            <AppText style={{ fontSize: 20, fontWeight: "bold", padding: 10 }}>
              Rating
            </AppText>
            <AppText
              style={{ paddingTop: 20, paddingLeft: "20%", fontSize: 10 }}
            >
              Based on 50k reviews
            </AppText>
          </View>

          <View style={styles.ratingContainer}>
            <View style={styles.ratingBarsSideContainer}>
              <AppText style={styles.ratingTypeTextStyle}>
                Overall Value for money
              </AppText>
              <ProgressBar progress={0.7} width={200} />
              <AppText style={styles.ratingTypeTextStyle}>
                Cleanliness of the car
              </AppText>
              <ProgressBar progress={0.2} width={200} />
              <AppText style={styles.ratingTypeTextStyle}>
                Service at the rent desk
              </AppText>
              <ProgressBar progress={0.5} width={200} />
              <AppText style={styles.ratingTypeTextStyle}>
                Car hire pick up in process
              </AppText>
              <ProgressBar progress={0.8} width={200} />
              <AppText style={styles.ratingTypeTextStyle}>
                Car hire drop off process
              </AppText>
              <ProgressBar progress={0.9} width={200} />
              <AppText style={styles.ratingTypeTextStyle}>
                Overall Value for money
              </AppText>
              <ProgressBar progress={0.7} width={200} />
              <AppText></AppText>
            </View>
            <View style={styles.faceSideContainer}>
              <View style={{ paddingRight: "17%" }}>
                <View>
                  <AppText
                    style={{
                      fontSize: 20,
                      backgroundColor: "green",
                      color: colors.light,
                      textAlign: "center",
                      // paddingHorizontal: 5,
                      borderRadius: 5,
                      marginBottom: 10,
                    }}
                  >
                    9.5/10
                  </AppText>
                </View>
              </View>
              <View>
                <Image
                  source={require("../../assets/rating/rating.jpg")}
                  style={styles.ratingImgStyle}
                />
              </View>
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
  ratingContainer: {
    // backgroundColor: "green",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
  },
  ratingBarsSideContainer: {
    // backgroundColor: "yellow",
    paddingLeft: 5,
  },
  faceSideContainer: {
    alignSelf: "center",
  },
  ratingTypeTextStyle: {
    fontSize: 15,
  },
  ratingImgStyle: {
    width: 80,
    height: 80,
  },
});
