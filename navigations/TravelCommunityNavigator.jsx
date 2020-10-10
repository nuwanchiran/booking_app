import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import routes from "./routes";
import GiveTips from "../screens/GiveTips";
import GiveQuestions from "../screens/GiveQuestions";
import DiscoverTravel from "../screens/DiscoverTravel";
import Communities from "../screens/Communities";
import MyTravel from "../screens/MyTravels";
import MyCommunities from "../screens/MyCommunities";
import TravelCommunity from "../screens/TravelCommunity";

const Stack = createStackNavigator();

export default function TravelCommunityNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name={routes.TravelCommunity} component={TravelCommunity} />
      <Stack.Screen name={routes.GiveTips} component={GiveTips} />
      <Stack.Screen name={routes.GiveQuestions} component={GiveQuestions} />
      <Stack.Screen name={routes.DiscoverTravel} component={DiscoverTravel} />
      <Stack.Screen name={routes.Communities} component={Communities} />
      <Stack.Screen name={routes.MyTravel} component={MyTravel} />
      <Stack.Screen name={routes.MyCommunities} component={MyCommunities} />
    </Stack.Navigator>
  );
}
