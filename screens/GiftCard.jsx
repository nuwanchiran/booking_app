import React from "react";
import { Button, StyleSheet, Text, ImageBackground, View } from "react-native";
import AppButton from "../common/AppButton";
import AppTextInput from "../common/AppTextInput";
import Screen from "../Components/Screen";

export default function GiftCard({ navigation }) {
  return (
    <Screen navigation={navigation} title="Gift Card">
      <ImageBackground
        source={require("../assets/giftCard.jpg")}
        style={styles.image}
      >
        <View style={styles.formContainer}>
          <AppTextInput placeholder="Card No" icon="card" />
          <AppTextInput placeholder="Pin No" icon="pin" />
          <AppButton
            title="Add to wallet"
            color="primary"
            icon="wallet"
            iconColor="light"
          />
        </View>
      </ImageBackground>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
  },
  formContainer: {
    paddingHorizontal: 30,
    paddingVertical: 60,
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "flex-end",
  },
});
