import React, { useState, useEffect } from "react";
import { ImageBackground, StyleSheet, Text, View, Image } from "react-native";
import colors from "../../config/colors";
import AppText from "../../common/AppText";
import { FontAwesome } from "@expo/vector-icons";
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";
import Textarea from "react-native-textarea";
import AppButton from "../../common/AppButton";

export default function Card({ rowMode, height, type, navigation }) {
  const temp = false;

  const [selectedTypeCar, setselectedTypeCar] = useState(false);

  const pressTypeHotel = () => {
    setselectedTypeCar((selectedTypeCar) => false);
    navigation.navigate("Home");
  };

  const pressTypeCar = () => {
    setselectedTypeCar((selectedTypeCar) => true);
    navigation.navigate("CarSearch");
  };

  useEffect(() => {
    if (type == "car") {
      setselectedTypeCar(() => true);
    } else if (type == "hotel") {
      setselectedTypeCar(() => false);
    }
  });

  return (
    <View
      style={[
        styles.container,
        {
          flexDirection: rowMode ? "row" : "column",
          minHeight: 80,
          height: height,
          backgroundColor: "white",
        },
      ]}
    >
      <View style={styles.typeLogoContainer}>
        <View style={styles.typeCarRentalSide}>
          {/* Left side start */}
          {selectedTypeCar && (
            <TouchableOpacity onPress={pressTypeCar}>
              <Image
                style={styles.imgStyles}
                source={require("../../assets/selectorCard/car-dark.png")}
              />
            </TouchableOpacity>
          )}

          {!selectedTypeCar && (
            <TouchableOpacity onPress={pressTypeCar}>
              <Image
                style={styles.imgStyles}
                source={require("../../assets/selectorCard/car-light.png")}
              />
            </TouchableOpacity>
          )}

          {/* Left Side end */}
        </View>
        <View style={styles.typeHotelRentalSide}>
          {/* Right side start */}
          {selectedTypeCar && (
            <TouchableOpacity onPress={pressTypeHotel}>
              <Image
                style={styles.imgStyles}
                source={require("../../assets/selectorCard/hotel-light.png")}
              />
            </TouchableOpacity>
          )}
          {!selectedTypeCar && (
            <TouchableOpacity onPress={pressTypeHotel}>
              <Image
                style={styles.imgStyles}
                source={require("../../assets/selectorCard/hotel-dark.png")}
              />
            </TouchableOpacity>
          )}
          {/* Right Side end */}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  imgStyles: {
    width: 100,
    height: 66,
  },
  typeLogoContainer: {
    flexDirection: "row",
    flexWrap: "nowrap",
    justifyContent: "space-around",
    alignItems: "flex-start",
    alignContent: "stretch",
  },
  typeCarRentalSide: {
    flexGrow: 0,
    flexShrink: 1,
  },
  typeHotelRentalSide: {
    flexGrow: 0,
    flexShrink: 1,
  },
});
