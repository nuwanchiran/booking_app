import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import Header from "../common/Header";
import Screen from "../common/Screen";

export default function GiftCard({ navigation }) {
  return (
    <Screen navigation={navigation}>
      <Text>GiftCard</Text>
      <Button onPress={() => navigation.goBack()} title='Go back home' />
    </Screen>
  );
}

const styles = StyleSheet.create({});
