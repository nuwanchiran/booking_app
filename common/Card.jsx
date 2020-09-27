import React from "react";
import { ImageBackground, StyleSheet, Text, View } from "react-native";
import colors from "../config/colors";
import AppText from "./AppText";
import { FontAwesome } from "@expo/vector-icons";
export default function Card({
  rowMode,
  horizontalScroll,
  image,
  label,
  title,
  subTitle,
  price,
  rating,
  reviews,
  height,
  marginNone,
}) {
  const star = rating / 1;
  const half = rating % 1;
  return (
    <View
      style={[
        styles.container,
        {
          flexDirection: rowMode ? "row" : "column",
          minHeight: 100,
          height: height,
          marginHorizontal: marginNone ? 0 : 20,
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
            { minWidth: horizontalScroll ? 300 : null },
          ]}
        >
          {label && <AppText style={styles.label}>{label}</AppText>}
        </ImageBackground>
      )}
      {(title || price || subTitle) && (
        <View style={[styles.details, { width: rowMode ? "50%" : "100%" }]}>
          {price && (
            <AppText
              style={{
                color: colors.secondary,
                fontSize: 16,
                fontWeight: "bold",
              }}
            >
              Price : LKR {price}
            </AppText>
          )}
          {title && (
            <AppText style={{ fontWeight: "bold", paddingVertical: 5 }}>
              {title}
            </AppText>
          )}
          {subTitle && (
            <AppText style={{ fontSize: 16, paddingVertical: 5 }}>
              {subTitle}
            </AppText>
          )}
          <View
            style={[
              styles.feedback,
              { display: "flex", flexDirection: rowMode ? "column" : "row" },
            ]}
          >
            {reviews && (
              <AppText
                style={{
                  fontSize: 14,
                  color: colors.secondary,
                  paddingVertical: 5,
                }}
              >
                {reviews} Reviews
              </AppText>
            )}
            {rating && (
              <View
                style={{
                  marginVertical: rowMode && 5,
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-evenly",
                  width: rowMode ? 120 : 180,
                }}
              >
                {Array.from({ length: star }, (_, index) => (
                  <FontAwesome
                    key={index}
                    name='star'
                    size={rowMode ? 14 : 22}
                    color='#FFC911'
                    style={{ marginVertical: 2 }}
                  />
                ))}
                {half > 0 && (
                  <FontAwesome
                    name='star-half'
                    size={rowMode ? 14 : 22}
                    color='#FFC911'
                    style={{ marginVertical: 2 }}
                  />
                )}

                <AppText
                  style={{
                    fontSize: 20,
                    backgroundColor: colors.primary,
                    color: colors.light,
                    textAlign: "center",
                    paddingHorizontal: 5,
                    borderRadius: 5,
                    marginBottom: 10,
                  }}
                >
                  {half > 0 ? rating : `${rating}.0`}
                </AppText>
              </View>
            )}
          </View>
        </View>
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
