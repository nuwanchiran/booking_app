import React, { Component } from "react";
import {
  Button,
  Text,
  StyleSheet,
  View,
  Image,
  ImageBackground,
  Picker,
} from "react-native";
import Screen from "../components/Screen";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import AppText from "../common/AppText";
import TravelOffersCountryCard from "../components/cards/TravelOffersCountryCard";
// import ModalDropdown from "react-native-modal-dropdown";

export default class TravelOffers extends Component {
  constructor(props) {
    super();
    this.state = {
      selectedValue: "Java",
    };
  }

  render() {
    return (
      <Screen navigation={this.props.navigation}>
        <ImageBackground
          source={require("../assets/travelOffers/travelOffers.jpeg")}
          style={{ width: "100%", height: 250 }}
        >
          <View
            style={{
              position: "absolute",
              top: 15,
              left: 0,
              right: 0,
              bottom: 0,
              // justifyContent: "center",
              // alignSelf: "center",
              alignItems: "center",
            }}
          >
            <AppText style={styles.travelOffersHeading}>Travel Offers</AppText>
          </View>
        </ImageBackground>
        <View style={styles.countrySelectionView}>
          <View style={styles.countrySelectionTitleView}>
            <AppText style={{ fontWeight: "bold" }}>Select a country</AppText>
          </View>

          <View style={styles.countrySelectionPickerView}>
            <Picker
              selectedValue={this.state.selectedValue}
              style={{ height: 50, width: 150 }}
              // onValueChange={(itemValue, itemIndex) =>
              //   setSelectedValue(itemValue)
              // }
            >
              <Picker.Item label="Australia" value="java" />
              <Picker.Item label="Canada" value="js" />
              <Picker.Item label="India" value="js" />
              <Picker.Item label="New Zealand" value="js" />
              <Picker.Item label="Singapre" value="js" />
              <Picker.Item label="USA" value="js" />
            </Picker>
          </View>
        </View>

        <View style={{ flex: 1 }}>
          <ScrollView>
            {/* <TravelOffersCountryCard
              name={"Singapore"}
              imagePath={"../../assets/travelOffers/merlion.jpg"}
            />
            <TravelOffersCountryCard
              name={"Gardens By The Bay"}
              imagePath={"../../assets/travelOffers/Gardens-by-the-Bay.jpg"}
            />
            <TravelOffersCountryCard
              name={"Little India"}
              imagePath={"../../assets/travelOffers/littleIndia.jpg"}
            />
            <TravelOffersCountryCard
              name={"Senthosa Island"}
              imagePath={"../../assets/travelOffers/sentosa-island.jpg"}
            /> */}
            <TravelOffersCountryCard
              name={"Singaporey"}
              imagePath={
                "https://firebasestorage.googleapis.com/v0/b/ueeproject-63bc8.appspot.com/o/images%2Fmerlion.jpg?alt=media&token=dbaae4d9-4869-47e5-87a3-34ca6774cfe1"
              }
            />
            <TravelOffersCountryCard
              name={"Gardens By The Bay"}
              imagePath={
                "https://firebasestorage.googleapis.com/v0/b/ueeproject-63bc8.appspot.com/o/images%2FGardens-by-the-Bay.jpg?alt=media&token=1ef2deb9-530b-47ee-9c66-5012c7f7dccd"
              }
            />
            <TravelOffersCountryCard
              name={"Little India"}
              imagePath={
                "https://firebasestorage.googleapis.com/v0/b/ueeproject-63bc8.appspot.com/o/images%2FlittleIndia.jpg?alt=media&token=566e9f59-f8d6-4593-8860-9c0a26172b4b"
              }
            />
            <TravelOffersCountryCard
              name={"Senthosa Island"}
              imagePath={
                "https://firebasestorage.googleapis.com/v0/b/ueeproject-63bc8.appspot.com/o/images%2Fsentosa-island.jpg?alt=media&token=729a3bd9-bbaf-4047-8ccf-539e314761fb"
              }
            />
          </ScrollView>
        </View>
        {/* <Button
          onPress={() => this.props.navigation.goBack()}
          title="Go back home"
        /> */}
      </Screen>
    );
  }
}

const styles = StyleSheet.create({
  travelOffersHeading: {
    fontWeight: "bold",
    fontSize: 30,
    color: "white",
  },

  // countrySelectionView: {
  //   flex: 1,
  //   flexDirection: "row",
  //   justifyContent: "space-between",
  //   // justifyContent: "space-between",
  //   backgroundColor: "powderblue",
  //   alignItems: "flex-start",
  // },
  // countrySelectionTitleView: {
  //   backgroundColor: "steelblue",
  //   paddingLeft: "10%",
  //   paddingTop: "2%",
  //   alignItems: "flex-start",
  // },

  // countrySelectionPickerView: {},

  countrySelectionView: {
    flexDirection: "row",
    flexWrap: "nowrap",
    justifyContent: "space-around",
    alignItems: "flex-start",
    alignContent: "flex-start",
    backgroundColor: "#e6e6e6",
  },
  countrySelectionTitleView: {
    flexGrow: 0,
    flexShrink: 1,
    paddingTop: 11,
  },
  countrySelectionPickerView: {
    flexGrow: 0,
    flexShrink: 1,
  },
});
