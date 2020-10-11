import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../screens/Home";
import HotelList from "../screens/HotelList";
import routes from "./routes";
import HotelDetails from "../screens/HotelDetails";
import HotelFillInfo from "../screens/HotelFillInfo";

const Stack = createStackNavigator();

export default function HomeNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name={routes.Home} component={Home} />
      <Stack.Screen name={routes.HotelList} component={HotelList} />
      <Stack.Screen name={routes.HotelDetails} component={HotelDetails} />
      <Stack.Screen name={routes.HotelFillInfo} component={HotelFillInfo} />
    </Stack.Navigator>
  );
}
