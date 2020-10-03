import React, { Component } from "react";
import {
  Button,
  Text,
  StyleSheet,
  View,
  Image,
  TouchableHighlight,
} from "react-native";
import colors from "../../config/colors";
import StarRating from "react-native-star-rating";
import StyledText from "react-native-styled-text";
import AppText from "../../common/AppText";
import { TouchableOpacity } from "react-native-gesture-handler";
import { SliderBox } from "react-native-image-slider-box";

export default class SelectedCarDetailsComponent extends Component {
  constructor(props) {
    super();
    this.state = {
      image:
        "https://firebasestorage.googleapis.com/v0/b/ueeproject-63bc8.appspot.com/o/images%2Fcars%2Fbmw%2Fbmw1.jpg?alt=media&token=59ee2db3-92b0-46f0-8cce-40368ccbc1a7",
      driverPhoto:
        "https://firebasestorage.googleapis.com/v0/b/ueeproject-63bc8.appspot.com/o/images%2Fdriver%2Fdriver1.jpg?alt=media&token=2e801479-eba9-4975-93fa-ddd6c7cafe7e",
      companyLogo:
        "https://firebasestorage.googleapis.com/v0/b/ueeproject-63bc8.appspot.com/o/images%2FcompanyLogos%2Fkangaroo.jpg?alt=media&token=718fefce-369f-4423-bfbd-18d722806cf0",

      initialPassengerArr: [{}, {}],
      initialLuggageArr: [{}, {}],

      carImagesForSlider: [
        "https://firebasestorage.googleapis.com/v0/b/ueeproject-63bc8.appspot.com/o/images%2Fcars%2Fslider%2Faudi%2Fetron1.jpg?alt=media&token=7147b543-95f1-4d21-b208-3f315062a21c",
        "https://firebasestorage.googleapis.com/v0/b/ueeproject-63bc8.appspot.com/o/images%2Fcars%2Fslider%2Faudi%2Fetron2.jpg?alt=media&token=5f839f94-655a-4d81-a7c0-73a75ac47116",
        "https://firebasestorage.googleapis.com/v0/b/ueeproject-63bc8.appspot.com/o/images%2Fcars%2Fslider%2Faudi%2Fetron3.jpg?alt=media&token=ad609056-0541-4393-9593-009c5b6a9b3c",
        "https://firebasestorage.googleapis.com/v0/b/ueeproject-63bc8.appspot.com/o/images%2Fcars%2Fslider%2Faudi%2Fetron4.jpg?alt=media&token=ead2a429-22dc-4fb4-b9b5-1b09199ff556",
        "https://firebasestorage.googleapis.com/v0/b/ueeproject-63bc8.appspot.com/o/images%2Fcars%2Fslider%2Faudi%2Fetron5.jpg?alt=media&token=2210458e-b475-4ac1-a66e-5317754b4ea2",
      ],
      carName: "BMW 3 Series",
      carRating: "9.0/10",
      driverName: "Mr. Perera",
      driverRating: 4,
      perDayCharge: "10.20",
    };
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
        <View style={styles.container}>
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
              {/* <Text>Hea</Text> */}

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
                  <AppText style={styles.descText}>Full to full policy</AppText>
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
              {"US$: <b>10.20</b>/day"}
            </StyledText>
          </View>

          {/* <View style={styles.container} onLayout={this.onLayout}> */}
          <SliderBox
            // ImageComponent={FastImage}
            images={this.state.carImagesForSlider}
            sliderBoxHeight={200}
            // onCurrentImagePressed={index => console.warn(`image ${index} pressed`)}
            dotColor="#FFEE58"
            inactiveDotColor="#90A4AE"
            paginationBoxVerticalPadding={20}
            autoplay
            circleLoop
            resizeMethod={"resize"}
            resizeMode={"cover"}
            paginationBoxStyle={{
              position: "absolute",
              bottom: 0,
              padding: 0,
              alignItems: "center",
              alignSelf: "center",
              justifyContent: "center",
              paddingVertical: 10,
            }}
            dotStyle={{
              width: 10,
              height: 10,
              borderRadius: 5,
              marginHorizontal: 0,
              padding: 0,
              margin: 0,
              backgroundColor: "rgba(128, 128, 128, 0.92)",
            }}
            ImageComponentStyle={{
              borderRadius: 15,
              width: "80%",
              marginTop: 5,
              marginLeft: -40,
            }}
            imageLoadingColor="#2196F3"
          />
          <AppText></AppText>
          {/* </View> */}

          {/*  */}
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
