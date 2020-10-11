import React from "react";
import { Image, ImageBackground, StyleSheet, Text, View } from "react-native";
import colors from "../../config/colors";
import AppText from "../../common/AppText";
import { FontAwesome } from "@expo/vector-icons";
export default function WishListPropertyCard({
  rowMode,
  horizontalScroll,
  image,
  label,
  height,
  marginNone,
}) {

  return (
    <View
      style={[
        styles.container,
        {
          flexDirection: rowMode ? "row" : "column",
          marginHorizontal: marginNone ? 0 : 20,
          minHeight: height,
          marginVertical: marginNone ? 0 : 10,
        },
      ]}
    >
      {image && (
        <ImageBackground
          source={image}
          style={[
            styles.img,
            { height: rowMode ? "100%" : 229 },
            { width: rowMode ? 50 : "100%" },
            { minWidth: horizontalScroll ? 200 : null },
          ]}
        >
          {label && <AppText style={styles.label}>{label}</AppText>}
        </ImageBackground>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    backgroundColor: colors.light,
    flex: 1,
    borderRadius: 15,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 3,
  },
  img: {
    flex: 1,
    borderRadius: 15,
    resizeMode: "cover",
    justifyContent: "flex-end",
    overflow: "hidden",
  },
  label: {
    backgroundColor: colors.secondary,
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginVertical: 10,
    marginHorizontal: 10,
    width: 150,
    borderRadius: 15,
    color: colors.white,
    textAlign: "center",
  },
  details: {
    display: "flex",
    padding: 10,
  },
  feedback: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 10,
  },
});
