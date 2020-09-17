import React from "react";
import { StyleSheet } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../screens/Home";
import HotelList from "../screens/HotelList";
import routes from "./routes";

const Stack = createStackNavigator();

export default function HomeNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name={routes.Home} component={Home} />
      <Stack.Screen name={routes.HotelList} component={HotelList} />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  icon: {
    left: 20,
    height: "100%",
  },
});
