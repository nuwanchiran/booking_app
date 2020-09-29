import React, { useState, useEffect } from "react";
import { ImageBackground, StyleSheet, Text, View, Image } from "react-native";
import colors from "../../config/colors";
import AppText from "../../common/AppText";
import { FontAwesome } from "@expo/vector-icons";
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";
import Textarea from "react-native-textarea";
import AppButton from "../../common/AppButton";
import { ProgressSteps, ProgressStep } from "react-native-progress-steps";

export default function Card({ rowMode, height, type }) {
  //   const temp = false;

  const [invalid, setInvalid] = useState(false);
  const [errors, setErrors] = useState(false);

  //   const pressTypeHotel = () => {
  //     setselectedTypeCar((selectedTypeCar) => false);
  //   };

  //   const pressTypeCar = () => {
  //     setselectedTypeCar((selectedTypeCar) => true);
  //   };

  //   useEffect(() => {
  //     if (type == "car") {
  //       setselectedTypeCar(() => true);
  //     } else if (type == "hotel") {
  //       setselectedTypeCar(() => false);
  //     }
  //   });

  return (
    <View
      style={[
        styles.container,
        {
          flexDirection: rowMode ? "row" : "column",
          minHeight: 85,
          height: height,
          backgroundColor: "#f5f4f4",
        },
      ]}
    >
      {/* https://www.npmjs.com/package/react-native-progress-steps */}
      <View>
        <View style={{ flex: 1, marginTop: -25 }}>
          <ProgressSteps style={{ alignTop: -10 }}>
            <ProgressStep label="Select a car">
              <View style={{ alignItems: "center" }}>
                <Text>Select a car</Text>
              </View>
            </ProgressStep>
            <ProgressStep label="Customer Details">
              <View style={{ alignItems: "center" }}>
                <Text>Customer Details</Text>
              </View>
            </ProgressStep>
            <ProgressStep label="Payment Gateway">
              <View style={{ alignItems: "center" }}>
                <Text>Payment Gateway</Text>
              </View>
            </ProgressStep>
            <ProgressStep label="Booking Complete">
              <View style={{ alignItems: "center" }}>
                <Text>Booking Complete</Text>
              </View>
            </ProgressStep>
          </ProgressSteps>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
