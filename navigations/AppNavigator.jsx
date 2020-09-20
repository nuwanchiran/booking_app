import * as React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import { Feather } from "@expo/vector-icons";

import GiftCard from "../screens/GiftCard";
import HomeNavigator from "./HomeNavigator";
import routes from "./routes";
import TravelOffers from "../screens/TravelOffers";
import YourContributions from "../screens/YourContributions";
import AppFeedback from "../screens/AppFeedback";
import HomeNavigator from "./HomeNavigator";
import CarRentalsNavigator from "./CarRentalsNavigator";
import colors from "../config/colors";
import { AntDesign } from "@expo/vector-icons";

const Drawer = createDrawerNavigator();

const iconColor = colors.medium;
const iconFocusedColor = colors.secondary;

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName={routes.Home}
        drawerLockMode="locked-closed"
        drawerType='front'
        drawerStyle={{ color: colors.dark, backgroundColor: colors.light }}
      >
        <Drawer.Screen
          name={routes.Home}
          component={HomeNavigator}
          options={{
            title: "Home",
            drawerIcon: ({ focused, size }) => (
              <Feather
                name='home'
                size={size}
                color={focused ? iconFocusedColor : iconColor}
              />
            ),
          }}
        />
        <Drawer.Screen
          name={routes.GiftCard}
          component={GiftCard}
          options={{
            title: "Gift Card",
            drawerIcon: ({ focused, size }) => (
              <AntDesign
                name='gift'
                size={size}
                color={focused ? iconFocusedColor : iconColor}
              />
            ),
          }}
        />
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
