import React, { useState } from "react";
import { StyleSheet, ImageBackground, View } from "react-native";
import AppButton from "../common/AppButton";
import AppTextInput from "../common/AppTextInput";
import Screen from "../components/Screen";

export default function GiftCard({ navigation }) {
  const [no, setNo] = useState("");
  const [pin, setPin] = useState("");
  const handleSubmit = () => {
    if (no === "" || pin === "") {
      alert("Please, Fill all columns");
    } else {
      alert("Gift added successfully");
    }
    setNo("");
    setPin("");
  };

  return (
    <Screen navigation={navigation} title='Gift Card'>
      <ImageBackground
        source={require("../assets/giftCard.jpg")}
        style={styles.image}
      >
        <View style={styles.formContainer}>
          <AppTextInput
            placeholder='Card No'
            icon='card'
            value={no}
            onChange={({ target }) => setNo(target.value)}
          />
          <AppTextInput
            placeholder='Pin No'
            icon='pin'
            value={pin}
            onChange={({ target }) => setPin(target.value)}
          />
          <AppButton
            title='Add to wallet'
            color='primary'
            icon='wallet'
            iconColor='light'
            onPress={handleSubmit}
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
