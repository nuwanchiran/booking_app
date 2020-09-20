import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Screen from "../Components/Screen";

export default function HotelList({ navigation }) {
  return (
    <Screen navigation={navigation} title="Hotel List" goBack>
      <Text>HotelList</Text>
    </Screen>
  );
}

const styles = StyleSheet.create({});
