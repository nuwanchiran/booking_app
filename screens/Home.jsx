import React from "react";
import Card from "../common/Card";
import HorizontalScrollView from "../components/HorizontalScrollView";
import Screen from "../components/Screen";
import { ScrollView } from "react-native-gesture-handler";
import SoakUpTheSun from "../dataset/soakUpTheSun";
import { TouchableOpacity } from 'react-native';
import routes from '../navigations/routes'
//TODO: just a test
export default function Home({ navigation }) {
  return (
    <Screen navigation={navigation}>
      <ScrollView>
        <TouchableOpacity onPress={() => navigation.navigate(routes.HotelList, { hotels: SoakUpTheSun[0].data })}>
          <Card image={require("../assets/paris.jpg")} label="Today's special" />
        </TouchableOpacity>
        <HorizontalScrollView
          title='Soak up the sun'
          list={SoakUpTheSun}
          navigation={navigation}
        />
        <HorizontalScrollView
          title='Soak up the sun'
          list={SoakUpTheSun}
          navigation={navigation}
        />
      </ScrollView>
    </Screen>
  );
}
