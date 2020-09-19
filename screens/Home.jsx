import React from "react";
import { Button, StyleSheet, Text } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import Card from "../common/Card";
import Screen from "../components/Screen";

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
        <Card
          image={require("../assets/bed.jpg")}
          label='just a test'
          title='Double bed'
          subTitle='sdafjhkadsjfhk lkdsfbhdaskfj kaklasdfjhtk asdfhkjsdaflsdkafjlhsd  sdafhjklasdfsdf adshfhasdjkfasd'
          price={12000}
        />
        <Card
          image={require("../assets/bed.jpg")}
          title='Double bed'
          label='just a test'
        />
        <Card
          image={require("../assets/bed.jpg")}
          title='Double bed'
          label='just a test'
        />
        <Card
          image={require("../assets/bed.jpg")}
          title='Double bed'
          label='just a test'
        />
        <Card
          image={require("../assets/bed.jpg")}
          title='Double bed'
          label='just a test'
        />
        <Card
          image={require("../assets/bed.jpg")}
          title='Double bed'
          label='just a test'
        />
        <Card
          image={require("../assets/bed.jpg")}
          title='Double bed'
          label='just a test'
        />
      </ScrollView>
    </Screen>
  );
}

const styles = StyleSheet.create({});
