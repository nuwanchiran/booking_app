import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import colors from "../config/colors";

export default function Header({ navigation }) {
  return (
    <View style={styles.container}>
      <MaterialIcons
        name='menu'
        style={styles.icon}
        size={30}
        color={colors.white}
        onPress={() => navigation.openDrawer()}
      />
      <Text style={styles.title}>Header</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 60,
    display: "flex",
    flexDirection: "row",
    backgroundColor: colors.primary,
    padding: 10,
  },
  icon: {
    left: 20,
    height: "100%",
  },
  title: {
    height: "100%",
    color: colors.white,
    fontSize: 22,
    marginLeft: 50,
  },
});
