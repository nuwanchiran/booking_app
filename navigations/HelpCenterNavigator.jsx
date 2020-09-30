import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import HelpCenter from '../screens/HelpCenter';
import routes from './routes';
import Questions from '../screens/Questions';
import QuestionsAdd from '../screens/QuestionsAdd';

const Stack = createStackNavigator();

export default function HelpCenterNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name={routes.HelpCenter} component={HelpCenter} />
      <Stack.Screen name={routes.Questions} component={Questions} />
      <Stack.Screen name={routes.QuestionsAdd} component={QuestionsAdd} />
    </Stack.Navigator>
  )
}
