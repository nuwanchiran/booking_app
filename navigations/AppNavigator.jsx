import * as React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";

import GiftCard from "../screens/GiftCard";
import routes from "./routes";
import TravelOffers from "../screens/TravelOffers";
import YourContributions from "../screens/YourContributions";
import AppFeedback from "../screens/AppFeedback";
import HomeNavigator from "./HomeNavigator";
import CarRentalsNavigator from "./CarRentalsNavigator";

const Drawer = createDrawerNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName={routes.Home}
        drawerLockMode="locked-closed"
      >
        <Drawer.Screen name={routes.Home} component={HomeNavigator} />
        <Drawer.Screen name={routes.GiftCard} component={GiftCard} />
        <Drawer.Screen
          name={routes.CarRentals}
          component={CarRentalsNavigator}
        />
        <Drawer.Screen name={routes.TravelOffers} component={TravelOffers} />
        <Drawer.Screen
          name={routes.YourContributions}
          component={YourContributions}
        />
        <Drawer.Screen name={routes.AppFeedback} component={AppFeedback} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
