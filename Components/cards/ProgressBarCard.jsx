import React, { useState, useEffect } from "react";
import { ImageBackground, StyleSheet, Text, View, Image } from "react-native";
import colors from "../../config/colors";
import AppText from "../../common/AppText";
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";
import Textarea from "react-native-textarea";
import AppButton from "../../common/AppButton";
import { ProgressSteps, ProgressStep } from "react-native-progress-steps";

export default function Card({ rowMode, height, curStep }) {
  //   const temp = false;

  const [invalid, setInvalid] = useState(false);
  const [errors, setErrors] = useState(false);
  const [currentStep, setSurrentStep] = useState(curStep);

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
          <ProgressSteps activeStep={currentStep} style={{ alignTop: -10 }}>
            <ProgressStep
              label="Select a car"
              nextBtnTextStyle={styles.buttonTextStyle}
              previousBtnTextStyle={styles.buttonTextStyle}
            >
              <View style={{ alignItems: "center" }}>
                <Text>Select a car</Text>
              </View>
            </ProgressStep>
            <ProgressStep
              label="Customer Details"
              nextBtnTextStyle={styles.buttonTextStyle}
              previousBtnTextStyle={styles.buttonTextStyle}
            >
              <View style={{ alignItems: "center" }}>
                <Text>Customer Details</Text>
              </View>
            </ProgressStep>
            <ProgressStep
              label="Payment Gateway"
              nextBtnTextStyle={styles.buttonTextStyle}
              previousBtnTextStyle={styles.buttonTextStyle}
            >
              <View style={{ alignItems: "center" }}>
                <Text>Payment Gateway</Text>
              </View>
            </ProgressStep>
            <ProgressStep
              label="Booking Complete"
              nextBtnTextStyle={styles.buttonTextStyle}
              previousBtnTextStyle={styles.buttonTextStyle}
            >
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

const styles = StyleSheet.create({
  buttonTextStyle: {
    display: "none",
  },
});
