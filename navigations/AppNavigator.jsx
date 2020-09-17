import * as React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";

import GiftCard from "../screens/GiftCard";
import HomeNavigator from "./HomeNavigator";
import routes from "./routes";

const Drawer = createDrawerNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName={routes.Home}
        drawerLockMode='locked-closed'
      >
        <Drawer.Screen name={routes.Home} component={HomeNavigator} />
        <Drawer.Screen name={routes.GiftCard} component={GiftCard} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
