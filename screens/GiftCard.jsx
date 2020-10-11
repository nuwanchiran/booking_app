import React, { useState } from "react";
import { StyleSheet, ImageBackground, View } from "react-native";
import AppButton from "../common/AppButton";
import AppTextInput from "../common/AppTextInput";
import Screen from "../components/Screen";
import AwesomeAlert from "react-native-awesome-alerts";

export default function GiftCard({ navigation }) {
  const [no, setNo] = useState("");
  const [pin, setPin] = useState("");
  const [alert, setAlert] = useState(false);

  return (
    <Screen navigation={navigation} title="Gift Card">
      <AwesomeAlert
        show={alert}
        showProgress={false}
        title="Alert"
        message={
          no !== "" && pin !== ""
            ? "Message sent successfully"
            : "Please fill the form and resubmit"
        }
        closeOnTouchOutside={true}
        closeOnHardwareBackPress={false}
        showConfirmButton={true}
        confirmText="ok"
        confirmButtonColor={no !== "" && pin !== "" ? "green" : "#DD6B55"}
        onConfirmPressed={() => {
          setAlert(false);
          setNo("");
          setPin("");
        }}
      />
      <ImageBackground
        source={require("../assets/giftCard.jpg")}
        style={styles.image}
      >
        <View style={styles.formContainer}>
          <AppTextInput
            placeholder="Card No"
            icon="card"
            keyboardType="phone-pad"
            value={no}
            onChange={({ target }) => setNo(target.value)}
          />
          <AppTextInput
            placeholder="Pin No"
            icon="pin"
            value={pin}
            keyboardType="phone-pad"
            onChange={({ target }) => setPin(target.value)}
          />
          <AppButton
            title="Add to wallet"
            color="primary"
            icon="wallet"
            iconColor="light"
            onPress={() => setAlert(true)}
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
