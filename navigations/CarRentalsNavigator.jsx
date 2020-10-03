import React from "react";
import { StyleSheet } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import CarSearch from "../screens/CarSearch";
import SelectedCar from "../screens/SelectedCar";
import routes from "./routes";
import CarRentals from "../screens/CarRentals";
import FilterCars from "../screens/FilterCars";
import PaymentGateway from "../screens/PaymentGateway";
import CarSearchResults from "../screens/CarSearchResults";
import CarCustomerDetails from "../screens/CarCustomerDetails";
import CarBookingFinished from "../screens/CarBookingFinished";

const Stack = createStackNavigator();

export default function CarRentalsNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name={routes.CarRentals} component={CarRentals} />
      <Stack.Screen name={routes.CarSearch} component={CarSearch} />
      <Stack.Screen
        name={routes.CarSearchResults}
        component={CarSearchResults}
      />
      <Stack.Screen name={routes.SelectedCar} component={SelectedCar} />
      <Stack.Screen name={routes.FilterCars} component={FilterCars} />
      <Stack.Screen name={routes.PaymentGateway} component={PaymentGateway} />
      <Stack.Screen
        name={routes.CarCustomerDetails}
        component={CarCustomerDetails}
      />
      <Stack.Screen
        name={routes.CarBookingFinished}
        component={CarBookingFinished}
      />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  icon: {
    left: 20,
    height: "100%",
  },
});
