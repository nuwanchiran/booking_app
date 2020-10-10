import React from "react";
import { StyleSheet, SafeAreaView, View } from "react-native";
import Constants from "expo-constants";
import { StatusBar } from "expo-status-bar";
import colors from "../config/colors";
import Header from "./Header";

export default function Screen({ children, style, navigation, title, goBack,topBarHidden }) {
  return (
    <SafeAreaView style={[styles.container, style]}>
      <StatusBar
        backgroundColor={topBarHidden?colors.light:colors.primary}
        barStyle='light-content'
        animated
      />
     {!topBarHidden && <Header navigation={navigation} title={title} goBack={goBack} />}
      <View style={[styles.view, style]}>{children}</View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: Constants.statusBarHeight,
    flex: 1,
  },
  view: { flex: 1 },
});
