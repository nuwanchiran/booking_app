import React from "react";
import { StyleSheet, View, TextInput } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "../config/colors";
import defaultStyles from "../config/styles";

export default function AppTextInput({
  onBlur,
  icon,
  onChangeText,
  width = "100%",
  noShadow,
  backgroundColor = colors.light,
  keyboardType = "default",
  ...rest
}) {

  const styles = StyleSheet.create({
    container: {
      backgroundColor: backgroundColor,
      borderRadius: 10,
      flexDirection: "row",
      padding: 10,
      marginVertical: 10,
      borderRadius: 15,
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: noShadow ? 1 : 3,
    },
    icon: {
      paddingVertical: 10,
      paddingHorizontal: 5,
    },
    textBox: {
      width: "90%",
    },
  });

  return (
    <View style={[styles.container, { width }]}>
      {icon && (
        <MaterialCommunityIcons
          name={icon}
          size={25}
          color={colors.medium}
          style={styles.icon}
        />
      )}
      <TextInput
        placeholderTextColor={colors.medium}
        onBlur={onBlur}
        onChangeText={onChangeText}
        keyboardType={keyboardType}
        style={[defaultStyles.text, styles.textBox]}
        {...rest}
      />
    </View>
  );
}

