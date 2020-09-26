import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import Card from "../common/Card";
import HorizontalScrollView from "../components/HorizontalScrollView";
import Screen from "../components/Screen";
import { ScrollView } from "react-native-gesture-handler";
import SoakUpTheSun from "../dataset/soakUpTheSun";
import MapView from "react-native-maps";

const data = [
  { user: "lskadjfl", review: "sadjfklasdhfj" },
  { user: "lskadjfl", review: "sadjfklasdhfj" },
  { user: "lskadjfl", review: "sadjfklasdhfj" },
];
export default function Home({ navigation }) {
  return (
    <Screen navigation={navigation}>
      <ScrollView>
        {/* <Text>Home</Text>
        <Button
          onPress={() => navigation.navigate("GiftCard")}
          title='Go to GiftCard screen'
        />
        <Button
          onPress={() => navigation.navigate("HotelList")}
          title='Hotel List'
        /> */}
        <Card image={require("../assets/paris.jpg")} label="Today's special" />
        <HorizontalScrollView
          title='Soak up the sun'
          list={SoakUpTheSun}
          navigation={navigation}
        />
      </ScrollView>
    </Screen>
  );
}

const styles = StyleSheet.create({});
