import React, { useState } from "react";
import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  Image,
  Button,
} from "react-native";
import colors from "../../config/colors";
import AppText from "../../common/AppText";
import {
  ScrollView,
  TextInput,
  TouchableOpacity,
} from "react-native-gesture-handler";
import Textarea from "react-native-textarea";
import AppButton from "../../common/AppButton";
import { Dialog } from "react-native-simple-dialogs";
// import StarRating from "react-native-star-rating";
import { Rating, AirbnbRating } from "react-native-ratings";

export default function Card({
  rowMode,
  height,
  hotelNamePara,
  imagePathPara,
  locationPara,
  startDatePara,
  endDatePara,
  ratingPara,
}) {
  const [hotelName, setHotelName] = useState(hotelNamePara);
  const [imgPth, setImgPth] = useState(imagePathPara);
  const [location, setLocation] = useState(locationPara);
  const [startDate, setStartDate] = useState(startDatePara);
  const [endDate, setEndDate] = useState(endDatePara);
  const [rating, setRating] = useState(ratingPara);

  return (
    <View
      style={[
        styles.container,
        {
          flexDirection: rowMode ? "row" : "column",
          minHeight: 100,
          height: height,
        },
      ]}
    >
      <View style={styles.hotelContainer}>
        <View style={styles.imageSide}>
          <View style={{ padding: 10 }}>
            <TouchableOpacity>
              <Image
                // source={require("../../assets/yourContributions/marina.jpg")}
                // source={require(imgPth)}
                source={{
                  uri: imgPth.toString(),
                }}
                style={styles.hotelImgStyle}
              />
            </TouchableOpacity>
          </View>
          <View style={{ paddingLeft: 10, paddingBottom: 5 }}>
            <AppText style={{ fontSize: 16, fontWeight: "bold" }}>
              {hotelName}
            </AppText>
          </View>
        </View>

        <View style={styles.detailsSide}>
          <View style={styles.locationView}>
            <AppText style={styles.locationText}>{location}</AppText>
          </View>
          <View style={styles.dateRangeView}>
            <AppText style={styles.dateRangeText}>
              {startDate + " - " + endDate}
            </AppText>
          </View>

          <TouchableOpacity style={styles.buttonOpStyle}>
            <Button title="Write a review" color="#003580" />
          </TouchableOpacity>
          <View style={{ paddingLeft: 10 }}>
            {/* <StarRating
              disabled={false}
              maxStars={5}
              starSize={20}
              rating={rating}
              fullStarColor={"gold"}
              // selectedStar={(rating) => this.onStarRatingPress(rating)}
            /> */}
            <View style={{ marginTop: -10 }}>
              <AirbnbRating
                defaultRating={rating}
                count={5}
                size={20}
                reviewSize={20}
              />
            </View>
          </View>
        </View>
      </View>
    </View>
  );
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
  hotelImgStyle: {
    width: 130,
    height: 130,
    borderRadius: 20,
  },
  hotelContainer: {
    flexDirection: "row",
    alignItems: "flex-start",
    alignContent: "flex-start",
  },
  imageSide: {},
  detailsSide: {},
  locationText: { fontSize: 20, fontWeight: "bold" },
  locationView: {
    alignItems: "center",
    paddingTop: 15,
    paddingBottom: 15,
  },
  dateRangeView: {
    paddingLeft: 10,
  },
  dateRangeText: {
    fontSize: 12,
  },
  buttonOpStyle: {
    // padding: 15,
    paddingTop: 5,
    paddingLeft: 15,
    paddingRight: 15,
  },
});
