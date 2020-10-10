import React, { Component } from "react";
import { Button, Text, StyleSheet, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import AppText from "../common/AppText";
import colors from "../config/colors";
import YourContributionCard from "./cards/YourContributionCard";

export default class YourContributionsComponenet extends Component {
  constructor(props) {
    super();
    this.state = {
      //   charge: props.charge,
      //   noDays: props.noDays,
      //   tax: props.tax,
      //   tot: 0,
    };
    // this.handleClick();
  }

  handleClick() {}

  //   componentDidMount() {
  //     var temp = this.state.charge * this.state.noDays + this.state.tax;
  //     this.setState({ tot: temp });
  //   }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <View
          style={[
            styles.container,
            {
              minHeight: 100,
            },
          ]}
        >
          <View style={{ padding: 15 }}>
            <AppText style={{ fontSize: 20, fontWeight: "bold" }}>
              Your Bookings
            </AppText>
          </View>
          <ScrollView>
            <YourContributionCard
              hotelNamePara={"Marina Bay Sands"}
              imagePathPara={
                "https://firebasestorage.googleapis.com/v0/b/ueeproject-63bc8.appspot.com/o/images%2FyourContributions%2Fmarina.jpg?alt=media&token=c3b6bd14-5545-4cb3-8e72-c7d0c6ab0c25"
              }
              locationPara={"Singapore"}
              startDatePara={"20/01/2020"}
              endDatePara={"23/01/2020"}
              ratingPara={3}
            />
            <YourContributionCard
              hotelNamePara={"Corinthia Hotel"}
              imagePathPara={
                "https://firebasestorage.googleapis.com/v0/b/ueeproject-63bc8.appspot.com/o/images%2FyourContributions%2Fcorinthia.jpg?alt=media&token=212ab0d5-f915-4e9b-886c-c90c99f1e449"
              }
              locationPara={"London, UK"}
              startDatePara={"10/02/2020"}
              endDatePara={"15/02/2020"}
              ratingPara={4}
            />

            <YourContributionCard
              hotelNamePara={"The Plaza Hotel"}
              imagePathPara={
                "https://firebasestorage.googleapis.com/v0/b/ueeproject-63bc8.appspot.com/o/images%2FyourContributions%2Fplaza.jpg?alt=media&token=94d68683-55f0-44ce-9853-dba255fd4502"
              }
              locationPara={"NY, USA"}
              startDatePara={"05/03/2020"}
              endDatePara={"07/03/2020"}
              ratingPara={2}
            />
          </ScrollView>
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
});
