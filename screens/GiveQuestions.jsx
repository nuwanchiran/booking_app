import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, Picker } from "react-native";
import AppButton from "../common/AppButton";
import AppText from "../common/AppText";
import AppTextInput from "../common/AppTextInput";
import Card from "../common/Card";
import Screen from "../components/Screen";
import colors from "../config/colors";
import AwesomeAlert from "react-native-awesome-alerts";
import { FontAwesome } from "@expo/vector-icons";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import { AntDesign } from "@expo/vector-icons";

export default function GiveQuestions({ navigation }) {
  const [tip, setTip] = useState("");
  const [alert, setAlert] = useState(false);

  return (
    <Screen navigation={navigation} title="Travel Community" goBack>
      <AwesomeAlert
        show={alert}
        showProgress={false}
        title="Alert"
        message={
          tip !== ""
            ? "Added Post succesfuly"
            : "Please fill the form and resubmit"
        }
        closeOnTouchOutside={true}
        closeOnHardwareBackPress={false}
        showConfirmButton={true}
        confirmText="ok"
        onConfirmPressed={() => {
          setAlert(false);
          setTip("");
        }}
      />
      <ScrollView>
        <View style={styles.card}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              alignSelf: "center",
              paddingTop: 20,
            }}
          >
            <AntDesign name="questioncircle" size={24} color="darkblue" />
            <Text style={styles.header}>Ask a question</Text>
          </View>
          <View style={styles.formContainer}>
            <Text style={{ paddingTop: 15 }}>
              Choose a travel community <Text style={styles.star}>*</Text>
            </Text>
            <View
              style={{ borderWidth: 1, borderColor: "black", borderRadius: 4 }}
            >
              <Picker>
                <Picker.Item label="--Community--" value="0" />
                <Picker.Item label="Australia Community" value="java" />
                <Picker.Item label="Canada Community" value="js" />
                <Picker.Item label="India Community" value="js" />
                <Picker.Item label="New Zealand Community" value="js" />
                <Picker.Item label="Singapre Community" value="js" />
                <Picker.Item label="USA Community" value="js" />
              </Picker>
            </View>

            <Text style={{ paddingTop: 15 }}>
              Select question type <Text style={styles.star}>*</Text>
            </Text>
            <View
              style={{ borderWidth: 1, borderColor: "black", borderRadius: 4 }}
            >
              <Picker>
                <Picker.Item label="--Question type--" value="0" />
                <Picker.Item label="Australia Community" value="java" />
                <Picker.Item label="Canada Community" value="js" />
                <Picker.Item label="India Community" value="js" />
                <Picker.Item label="New Zealand Community" value="js" />
                <Picker.Item label="Singapre Community" value="js" />
                <Picker.Item label="USA Community" value="js" />
              </Picker>
            </View>

            <Text style={{ paddingTop: 15 }}>
              Title <Text style={styles.star}>*</Text>
            </Text>
            <View
              style={{ borderWidth: 1, borderColor: "black", borderRadius: 4 }}
            >
              <TextInput
                Input
                style={styles.input}
                underlineColorAndroid="transparent"
                autoCapitalize="none"
              />
            </View>

            <Text style={{ paddingTop: 15 }}>
              Your question <Text style={styles.star}>*</Text>
            </Text>
            <View
              style={{ borderWidth: 1, borderColor: "black", borderRadius: 4 }}
            >
              <TextInput
                multiline={true}
                numberOfLines={3}
                autoCapitalize="none"
                value={tip}
                onChange={({ target }) => setTip(target.value)}
              />
            </View>

            <AppButton
              title="POST"
              color="primary"
              onPress={() => setAlert(true)}
            />
          </View>
        </View>
      </ScrollView>
    </Screen>
  );
}

const styles = StyleSheet.create({
  star: {
    color: "red",
  },
  header: {
    marginLeft: 10,
    fontSize: 30,
    textDecorationLine: "underline",
    fontWeight: "bold",
  },
  formContainer: {
    paddingHorizontal: 20,
    paddingVertical: 30,
    flexDirection: "column",
  },
  card: {
    height: 520,
    marginHorizontal: 10,
    marginVertical: 10,
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
  input: {
    margin: 15,
    height: 20,
  },
});
