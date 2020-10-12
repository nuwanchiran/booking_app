import React from "react";
import Card from "../common/Card";
import HorizontalScrollView from "../components/HorizontalScrollView";
import Screen from "../components/Screen";
import { ScrollView } from "react-native-gesture-handler";
import SoakUpTheSun from "../dataset/soakUpTheSun";
//TODO: hi
export default function Home({ navigation }) {
  return (
    <Screen navigation={navigation}>
      <ScrollView>
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
