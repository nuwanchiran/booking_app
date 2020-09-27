import React from "react";
import { StyleSheet, View, TextInput } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "../config/colors";
import defaultStyles from "../config/styles";

export default function AppTextInput({
  onBlur,
  icon,
  width = "100%",
  ...rest
}) {
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
        style={[defaultStyles.text, styles.textBox]}
        {...rest}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.light,
    borderRadius: 10,
    flexDirection: "row",
    padding: 10,
    marginVertical: 10,
  },
  icon: {
    paddingVertical: 10,
    paddingHorizontal: 5,
  },
  textBox: {
    width: "90%",
  },
});
