import React, { Component } from "react";
import {
  Button,
  Text,
  StyleSheet,
  View,
  Image,
  TouchableHighlight,
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { TouchableEffect } from "react-native-simple-dialogs";
import AppText from "../../common/AppText";
import colors from "../../config/colors";
import { SliderBox } from "react-native-image-slider-box";
import { Feather } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import StarRating from "react-native-star-rating";
import StyledText from "react-native-styled-text";

export default class CarResult extends Component {
  constructor(props) {
    super();
    this.state = {
      image:
        "https://firebasestorage.googleapis.com/v0/b/ueeproject-63bc8.appspot.com/o/images%2Fcars%2FcarLoading.jpg?alt=media&token=620009e8-1edc-469b-b56b-13600c16f7f2",
      driverPhoto:
        "https://firebasestorage.googleapis.com/v0/b/ueeproject-63bc8.appspot.com/o/images%2Floading%2Fperson.png?alt=media&token=db634ce2-10f9-4e56-a8e4-caaacc66172a",
      companyLogo:
        "https://firebasestorage.googleapis.com/v0/b/ueeproject-63bc8.appspot.com/o/images%2Floading%2Fload.jpg?alt=media&token=21e27402-7824-4e3c-a30a-c70f7ff42636",

      initialPassengerArr: [],
      initialLuggageArr: [],

      carName: "",
      carRating: "",
      driverName: "",
      driverRating: 0,
      price: "0.00",
      token: 0,
    };
  }
  componentDidMount() {
    this.setState({
      carName: this.props.carName,
      carRating: this.props.carRating,
      driverName: this.props.driverName,
      driverRating: this.props.driverRating,
      initialPassengerArr: this.props.initialPassengerArr,
      initialLuggageArr: this.props.initialLuggageArr,
      image: this.props.image,
      driverPhoto: this.props.driverPhoto,
      companyLogo: this.props.companyLogo,
      price: this.props.price,
      token: this.props.token,
    });
  }

  navigate() {
    this.props.navigation.navigate("SelectedCar");
  }

  renderPassengers() {
    return this.state.initialPassengerArr.map((item, i) => {
      return (
        <TouchableHighlight key={i}>
          <Image
            source={require("../../assets/carSearchResults/man.png")}
            style={styles.iconStyles}
          />
        </TouchableHighlight>
      );
    });
  }

  renderLuggage() {
    return this.state.initialLuggageArr.map((item, i) => {
      return (
        <TouchableHighlight key={i}>
          <Image
            source={require("../../assets/carSearchResults/luggage.png")}
            style={styles.iconStyles}
          />
        </TouchableHighlight>
      );
    });
  }

  render() {
    return (
      <View style={{ flex: 0.3 }}>
        <View
          style={[
            styles.container,
            {
              minHeight: 200,
            },
          ]}
        >
          <TouchableOpacity
            // https://reactnavigation.org/docs/3.x/params/
            onPress={() =>
              this.props.navigation.navigate("SelectedCar", {
                image: this.state.image,
                driverPhoto: this.state.driverPhoto,
                companyLogo: this.state.companyLogo,
                initialPassengerArr: this.state.initialPassengerArr,
                initialLuggageArr: this.state.initialLuggageArr,
                carName: this.state.carName,
                carRating: this.state.carRating,
                driverName: this.state.driverName,
                driverRating: this.state.driverRating,
                price: this.state.price,
                token: this.state.token,
              })
            }
            // style={{ backgroundColor: "gray" }}
          >
            <View style={styles.nameRatingHeartContainer}>
              <View style={styles.compLogoContainer}>
                <Image
                  source={{
                    uri: this.state.companyLogo.toString(),
                  }}
                  style={styles.companyLogo}
                />
              </View>
              <View style={styles.nameContainer}>
                <AppText style={styles.vehicleNametxt}>
                  {this.state.carName}
                </AppText>
              </View>
              <View style={styles.ratingContainer}>
                <AppText
                  style={{
                    fontSize: 20,
                    backgroundColor: "green",
                    color: colors.light,
                    textAlign: "center",
                    paddingHorizontal: 5,
                    borderRadius: 5,
                    marginBottom: 10,
                  }}
                >
                  {this.state.carRating}
                </AppText>
              </View>
              <View style={styles.heartContainer}>
                {/* <Text></Text> */}

                <TouchableOpacity style={{ paddingLeft: 5 }}>
                  <Image
                    style={styles.heartStyles}
                    source={require("../../assets/carSearchResults/heart.png")}
                  />
                </TouchableOpacity>
              </View>
            </View>

            <View style={styles.carDetailsImageContainer}>
              <View style={styles.carImageSection}>
                <Image
                  source={{
                    uri: this.state.image.toString(),
                  }}
                  style={styles.carImageStyle}
                />
              </View>
              <View style={styles.carDetailsSection}>
                <View style={styles.carDetailsSectionSingleRow}>
                  <View>
                    <Image
                      source={require("../../assets/carSearchResults/ac.png")}
                      style={styles.iconStyles}
                    />
                  </View>
                  <View style={styles.singleRowDesc}>
                    <AppText style={styles.descText}>Air Conditioning</AppText>
                  </View>
                </View>
                <View style={styles.carDetailsSectionSingleRow}>
                  <View>
                    <Image
                      source={require("../../assets/carSearchResults/mileage.png")}
                      style={styles.iconStyles}
                    />
                  </View>
                  <View style={styles.singleRowDesc}>
                    <AppText style={styles.descText}>Unlimited Mileage</AppText>
                  </View>
                </View>
                <View style={styles.carDetailsSectionSingleRow}>
                  <View>
                    <Image
                      source={require("../../assets/carSearchResults/fuel.png")}
                      style={styles.iconStyles}
                    />
                  </View>
                  <View style={styles.singleRowDesc}>
                    <AppText style={styles.descText}>
                      Full to full policy
                    </AppText>
                  </View>
                </View>
                <View style={styles.carDetailsSectionSingleRow}>
                  <View>
                    <Image
                      source={require("../../assets/carSearchResults/money.png")}
                      style={styles.iconStyles}
                    />
                  </View>
                  <View style={styles.singleRowDesc}>
                    <AppText style={styles.descText}>
                      No Additional Charges
                    </AppText>
                  </View>
                </View>
                <View style={styles.carDetailsSectionSingleRow}>
                  <View>
                    <Image
                      source={require("../../assets/carSearchResults/driver.png")}
                      style={styles.iconStyles}
                    />
                  </View>
                  <View style={styles.singleRowDesc}>
                    <AppText style={styles.descText}>
                      {this.state.driverName}
                    </AppText>
                  </View>
                  <View style={styles.singleRowDesc}>
                    <View style={{ marginLeft: "25%" }}>
                      <Image
                        source={{
                          uri: this.state.driverPhoto.toString(),
                        }}
                        style={styles.driverPhoto}
                      />
                    </View>
                  </View>
                </View>

                <View style={styles.carDetailsSectionSingleRow}>
                  <View></View>
                  <View style={{ paddingLeft: 30, marginTop: -20 }}>
                    <StarRating
                      disabled={false}
                      maxStars={5}
                      starSize={20}
                      rating={this.state.driverRating}
                      fullStarColor={"gold"}
                      // selectedStar={(rating) => this.onStarRatingPress(rating)}
                    />
                  </View>
                </View>
              </View>
            </View>
            <View style={styles.personLuggageContainer}>
              <AppText style={{ fontSize: 15 }}>Suitable for: </AppText>

              {this.renderPassengers()}
              {this.renderLuggage()}

              {/* <Image
                source={require("../../assets/carSearchResults/luggage.png")}
                style={styles.iconStyles}
              />
              <Image
                source={require("../../assets/carSearchResults/luggage.png")}
                style={styles.iconStyles}
              /> */}
            </View>
            <View style={styles.priceView}>
              <StyledText
                style={{
                  fontSize: 20,
                  fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
                  padding: 10,
                }}
              >
                {"US$: <b>15.20</b>/day"}
              </StyledText>
            </View>
            {/* <View>
              <Button
                onPress={() => this.props.navigation.navigate("SelectedCar")}
                title="View this car>>"
              />
            </View> */}
          </TouchableOpacity>
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
  nameRatingHeartContainer: {
    flexDirection: "row",
    alignItems: "flex-start",
    alignContent: "flex-start",
    padding: 10,
  },
  nameContainer: {
    flexGrow: 10,
    color: "blue",
    paddingLeft: 5,
  },
  compLogoContainer: {
    flexGrow: 1,
  },
  ratingContainer: {
    flexGrow: 1,
    color: "yellow",
  },
  heartContainer: {
    flexGrow: 1,
    // color: "green",
  },
  vehicleNametxt: {
    fontSize: 22,
    fontWeight: "bold",
  },
  heartStyles: {
    width: 40,
    height: 35,
  },
  carImageStyle: {
    width: 160,
    marginRight: 8,
    height: 160,
    borderRadius: 10,
  },
  //
  carDetailsImageContainer: {
    flexDirection: "row",
    // justifyContent: "space-between",
    // alignItems: "flex-start",
    // backgroundColor: "green",
  },
  carImageSection: {
    // backgroundColor: "blue",
    padding: 7,
  },
  carDetailsSection: {
    // backgroundColor: "yellow",
  },
  carDetailsSectionSingleRow: {
    flexDirection: "row",
    alignItems: "flex-start",
    padding: 5,
  },
  singleRowDesc: {
    paddingLeft: 10,
  },
  iconStyles: {
    width: 25,
    height: 25,
  },
  descText: {
    fontSize: 14,
  },
  driverPhoto: {
    width: 40,
    height: 40,
    borderRadius: 10,
  },
  personLuggageContainer: {
    flexDirection: "row",
    alignItems: "flex-start",
    paddingLeft: 10,
  },
  priceView: {
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "flex-start",
  },
  companyLogo: {
    width: 64,
    height: 36,
    borderRadius: 8,
  },
});
