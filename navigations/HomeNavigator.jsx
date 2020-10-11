import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../screens/Home";
import HotelList from "../screens/HotelList";
import routes from "./routes";
import HotelDetails from "../screens/HotelDetails";
import RoomList from "../screens/RoomList";
import RoomSingleView from "../screens/RoomSingleView";

const Stack = createStackNavigator();

export default function HomeNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name={routes.Home} component={Home} />
      <Stack.Screen name={routes.HotelList} component={HotelList} />
      <Stack.Screen name={routes.HotelDetails} component={HotelDetails} />
      <Stack.Screen name={routes.RoomList} component={RoomList} />
      <Stack.Screen name={routes.RoomSingleView} component={RoomSingleView} />
    </Stack.Navigator>
  );
}

