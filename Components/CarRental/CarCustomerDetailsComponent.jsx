import React, { Component } from "react";
import {
  Button,
  Text,
  StyleSheet,
  View,
  Image,
  Picker,
  CheckBox,
} from "react-native";
import AppText from "../../common/AppText";
import colors from "../../config/colors";
import ProgressBar from "react-native-progress/Bar";
import { AwesomeTextInput } from "react-native-awesome-text-input";
import Textarea from "react-native-textarea";
import PhoneInput from "react-native-phone-input";
import ModalPickerImage from "./ModalPickerImage";
// import PhoneInput from "react-phone-number-input/react-native-input";

export default class CarCustomerDetailsComponent extends Component {
  constructor(props) {
    super();

    this.state = {
      valid: "",
      type: "",
      value: "",
    };
  }

  onPressFlag() {
    this.myCountryPicker.open();
  }

  selectCountry(country) {
    this.phone.selectCountry(country.iso2);
  }

  render() {
    return (
      <View style={{ flex: 0.3 }}>
        <View
          style={[
            styles.container,
            {
              // flexDirection: rowMode ? "row" : "column",
              minHeight: 100,
            },
          ]}
        >
          <View style={styles.customerDetailsView}>
            <AppText
              style={{ fontSize: 20, fontWeight: "bold", paddingTop: 15 }}
            >
              Customer Details
            </AppText>
          </View>
          <View>
            <View style={{ padding: 10 }}>
              <View style={styles.titleFnameContainer}>
                <View>
                  <Picker
                    //   selectedValue={this.state.selectedValue}
                    style={{ height: 50, width: 100, borderColor: "gray" }}
                    // onValueChange={(itemValue, itemIndex) =>
                    //   setSelectedValue(itemValue)
                    // }
                  >
                    <Picker.Item label="Mr." value="mr" />
                    <Picker.Item label="Mrs." value="mrs" />
                    <Picker.Item label="Miss" value="miss" />
                  </Picker>
                </View>
                <View style={{ width: "72%" }}>
                  <AwesomeTextInput label="First Name" />
                </View>
              </View>
            </View>

            <View style={{ padding: 10 }}>
              <AwesomeTextInput label="Last Name" />
            </View>
            <View style={{ padding: 10 }}>
              <AwesomeTextInput label="Email" />
            </View>
            <View style={{ padding: 10 }}>
              <AwesomeTextInput label="ID Number" />
            </View>
            <View style={{ padding: 10 }}>
              <PhoneInput
                ref={(ref) => {
                  this.phone = ref;
                }}
              />
            </View>

            {/* https://www.npmjs.com/package/react-native-phone-input */}

            <View style={{ padding: 10 }}>
              <Textarea
                containerStyle={styles.textareaContainer}
                style={styles.textarea}
                onChangeText={this.onChange}
                defaultValue={this.state.text}
                maxLength={120}
                placeholder={
                  "If you have any special requirements such as need wheelchair access, please mention here"
                }
                placeholderTextColor={"#969696"}
                underlineColorAndroid={"transparent"}
              />
            </View>
            <View
              style={{
                paddingLeft: 10,
                flexDirection: "row",
                alignItems: "flex-start",
              }}
            >
              <View>
                <CheckBox
                  value={this.state.isSelected}
                  onValueChange={this.setSelected}
                  // style={styles.checkboxcust}
                />
              </View>
              <View style={{ paddingLeft: 10 }}>
                <AppText style={{ fontSize: 15, paddingTop: 5 }}>
                  Agree terms and conditions
                </AppText>
              </View>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    backgroundColor: colors.light,
    flex: 1,
    padding: 3,
    borderRadius: 3,
    marginVertical: 10,
    marginHorizontal: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 3,
  },
  customerDetailsView: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "flex-start",
  },
  textareaContainer: {
    height: 180,
    padding: 5,
    // backgroundColor: "#F5FCFF",
    backgroundColor: "#edebeb",
  },
  textarea: {
    textAlignVertical: "top", // hack android
    height: 170,
    fontSize: 14,
    color: "#333",
  },
  titleFnameContainer: {
    flexDirection: "row",
    alignItems: "flex-start",
  },
});
