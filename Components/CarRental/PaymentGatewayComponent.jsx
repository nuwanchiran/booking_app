import React, { Component } from "react";
import {
  Button,
  Text,
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  SafeAreaView,
  CheckBox,
} from "react-native";
import AppText from "../../common/AppText";
import colors from "../../config/colors";

// import Icon from "react-native-vector-icons/FontAwesome";
import { Input } from "react-native-elements";
import MonthPicker from "react-native-month-year-picker";
// import { AntDesign } from "@expo/vector-icons";

import {
  CreditCardInput,
  LiteCreditCardInput,
} from "react-native-credit-card-input";

export default class PaymentGatewayComponent extends Component {
  constructor(props) {
    super();
    this.state = {
      isSelected: false,
      totPrice: 22.43,

      date: new Date(),
      show: false,

      // show: false,
    };
    this.setSelected = this.setSelected.bind(this);
  }

  onValueChange = (event, newDate) => {
    showPicker(false);
    this.setState({ date: selectedDate });
  };

  showPicker = (value) => {
    this.setState({ show: value });
  };

  sendData = () => {
    this.props.parentCallback(this.state.totPrice);
  };

  setSelected() {
    this.setState({ isSelected: !this.state.isSelected });
  }

  componentDidMount() {
    this.sendData();
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
          <View style={styles.paymentGatewayHeader}>
            <AppText style={styles.paymentGatewayText}>Payment Gateway</AppText>
          </View>

          <View style={styles.totalFee}>
            <AppText style={styles.totalFeeText}>
              Your Total Fee | ${this.state.totPrice}
            </AppText>
          </View>
          {/* <View style={styles.cardContainer}>
            <View style={styles.cardView}>
              <Image
                source={require("../../assets/PaymentGateway/visa.jpg")}
                style={styles.visaStyle}
              />
            </View>
            <View style={styles.cardView}>
              <Image
                source={require("../../assets/PaymentGateway/master.jpg")}
                style={styles.masterStyle}
              />
            </View>
            <View style={styles.cardView}>
              <Image
                source={require("../../assets/PaymentGateway/amex.jpg")}
                style={styles.amexStyle}
              />
            </View>
          </View> */}

          <View style={styles.cardDetailsContainer}>
            {/* <Input
              placeholder="Name on the Card"
              leftIcon={
                <Image
                  source={require("../../assets/PaymentGateway/icons/user.png")}
                  style={{ width: 25, height: 25 }}
                />
              }
            /> */}
            {/* 
            <Input
              placeholder="Card Number"
              leftIcon={
                <Image
                  source={require("../../assets/PaymentGateway/icons/credit-card.png")}
                  style={{ width: 25, height: 25 }}
                />
              }
            /> */}

            {/* <Input
              placeholder="MM/YYYY"
              value={this.state.calander}
              leftIcon={
                <Image
                  source={require("../../assets/PaymentGateway/icons/calendar.png")}
                  style={{ width: 25, height: 25 }}
                />
              }
            /> */}

            {/* https://www.npmjs.com/package/react-native-month-year-picker */}
            {/*  */}
            {/* <SafeAreaView>
              <Text>{(this.state.date, "MM-YYYY")}</Text>
              <TouchableOpacity onPress={() => this.showPicker(true)}>
                <Text>OPEN</Text>
              </TouchableOpacity>
              {this.state.show && (
                // <MonthPicker
                //   onChange={this.onValueChange}
                //   value={this.state.date}
                //   minimumDate={new Date(2015, 5)}
                //   maximumDate={new Date(2025, 5)}
                //   locale="ko"
                // />
                <MonthPicker maximumDate={new Date(2030, 10)} />
              )}
            </SafeAreaView> */}
            {/*  */}

            {/* <Input
              placeholder="CVC"
              leftIcon={
                <Image
                  source={require("../../assets/PaymentGateway/icons/key.png")}
                  style={{ width: 25, height: 25 }}
                />
              }
            /> */}
            <AppText></AppText>
            <View>
              <CreditCardInput />
            </View>
            <AppText></AppText>

            <View style={styles.saveCardDetailsContainer}>
              <View style={{ paddingLeft: 10 }}>
                <CheckBox
                  value={this.state.isSelected}
                  onValueChange={this.setSelected}
                />
              </View>
              <View style={{ paddingLeft: 10, paddingTop: 5 }}>
                <AppText style={{ fontSize: 15 }}>
                  Save Card details for faster payments later
                </AppText>
              </View>
            </View>
            <AppText></AppText>
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
    // shadowColor: "#000",
    // shadowOffset: {
    //   width: 0,
    //   height: 2,
    // },
    // shadowOpacity: 0.25,
    // shadowRadius: 3.84,
    // elevation: 3,
  },
  paymentGatewayHeader: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "flex-start",
  },
  paymentGatewayText: {
    fontSize: 22,
    fontWeight: "bold",
    paddingTop: 10,
    paddingBottom: 20,
  },

  totalFee: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "flex-start",
  },
  totalFeeText: {
    fontSize: 18,
    fontWeight: "bold",
    paddingTop: 10,
    backgroundColor: "#dadada",
    borderRadius: 10,
  },
  visaStyle: {
    width: 81,
    height: 51,
  },
  masterStyle: {
    width: 81,
    height: 51,
  },
  amexStyle: {
    width: 81,
    height: 51,
  },
  cardContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "flex-start",
  },
  cardView: {
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 20,
    paddingBottom: 20,
  },
  cardDetailsContainer: {},
  saveCardDetailsContainer: {
    flexDirection: "row",
    alignItems: "flex-start",
  },
});
