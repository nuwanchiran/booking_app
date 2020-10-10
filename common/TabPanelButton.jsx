import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { TouchableNativeFeedback } from "react-native-gesture-handler";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "../config/colors";
import AppText from "./AppText";
import AppButton from "./AppButton";

export default function TabPanelButton({
  title,
  onPress,
  clicked,
  opacity,
  icon,
  iconColor,
  borderRadius,
  width="100%", 
  padding=15,
  marginVertical=0,

  borderTopStartRadius=0,
  borderTopEndRadius=0,
  backgroundColor= colors.primary
}){
    
  const styles = StyleSheet.create({
    btn: {
      borderRadius: borderRadius,
      borderTopStartRadius:borderTopStartRadius,
      borderTopEndRadius:borderTopEndRadius,
      backgroundColor:clicked ? backgroundColor : colors.light  ,
      justifyContent: "center",
      alignItems: "center",
      padding: padding,
      width: width,
      marginVertical: marginVertical,
      // display: "flex",
      // flexDirection: "row",
    },
    txt: {
      color: clicked ? colors.white : colors.medium,
      fontSize: 25,
      fontWeight: clicked ? "bold" : null,
    },
    icon: {
      paddingHorizontal: 10,
    },
  });

  const buttonIcon = () => (
    <MaterialCommunityIcons
      name={icon}
      size={25}
      color={colors[iconColor]}
      style={styles.icon}
    />
  );

  const buttonText = () => <AppText style={styles.txt}>{title}</AppText>;

  return (
    <React.Fragment>
      {opacity ? (
        <TouchableOpacity
          style={styles.btn}
          onPress={onPress}
        >
          {icon && buttonIcon()}
          {buttonText()}
        </TouchableOpacity>
      ) : (
          <TouchableNativeFeedback
            style={styles.btn}
            onPress={onPress}
          >
            {icon && buttonIcon()}
            {buttonText()}
          </TouchableNativeFeedback>
        )}
    </React.Fragment>
  );
}
