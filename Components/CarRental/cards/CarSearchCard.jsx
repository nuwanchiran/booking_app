import React, { useState } from "react";
import { ImageBackground, StyleSheet, Text, View, Image } from "react-native";
import colors from "../../../config/colors";
import AppText from "../../../common/AppText";
import { FontAwesome } from "@expo/vector-icons";
import {
  ScrollView,
  TextInput,
  TouchableOpacity,
} from "react-native-gesture-handler";
import Textarea from "react-native-textarea";
import AppButton from "../../../common/AppButton";
import { Dialog } from "react-native-simple-dialogs";
import SearchCarComponent from "../SearchCarComponent";

export default function Card({ rowMode, height }) {
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
      <SearchCarComponent navigation={this.props.navigation} />
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
});
