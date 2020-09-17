import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import Header from "../common/Header";
import Screen from "../common/Screen";

export default function Home({ navigation }) {
  return (
    <Screen navigation={navigation}>
      <Text>Home</Text>
      <Button
        onPress={() => navigation.navigate("GiftCard")}
        title='Go to GiftCard screen'
      />
      <Button
        onPress={() => navigation.navigate("HotelList")}
        title='Hotel List'
      />
    </Screen>
  );
}

const styles = StyleSheet.create({});
