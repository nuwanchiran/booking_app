import React, { Component } from "react";
import {
  Button,
  Text,
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  CheckBox,
} from "react-native";
import AppText from "../../common/AppText";
import colors from "../../config/colors";
import ProgressBar from "react-native-progress/Bar";
import { AwesomeTextInput } from "react-native-awesome-text-input";
import Textarea from "react-native-textarea";
import Icon from "react-native-vector-icons/FontAwesome";
import { Input } from "react-native-elements";
import MonthPicker from "react-native-month-year-picker";

export default class PaymentGatewayComponent extends Component {
  constructor(props) {
    super();
    this.state = {
      isSelected: false,
      totPrice: 22.43,
    };
    this.setSelected = this.setSelected.bind(this);
  }

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
          <View style={styles.cardContainer}>
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
          </View>

          <View style={styles.cardDetailsContainer}>
            {/* <AwesomeTextInput label="Name on the Card" /> */}
            <Input
              placeholder="Name on the Card"
              leftIcon={
                <Icon
                  name="user"
                  size={24}
                  color="black"
                  style={{ paddingRight: 10 }}
                />
              }
            />

            <Input
              placeholder="Card Number"
              leftIcon={
                <Icon
                  name="credit-card"
                  size={24}
                  color="black"
                  style={{ paddingRight: 10 }}
                />
              }
            />

            <Input
              placeholder="MM/YYYY"
              leftIcon={
                <Icon
                  name="calendar-check-o"
                  size={24}
                  color="black"
                  style={{ paddingRight: 10 }}
                />
              }
            />

            <TouchableOpacity onPress={() => this.setState({ show: true })}>
              <Text>OPEN</Text>
            </TouchableOpacity>
            {this.state.show && (
              <MonthPicker
                onChange={this.onValueChange}
                // value={date}
                // minimumDate={new Date()}
                // maximumDate={new Date(2025, 5)}
                locale="ko"
              />
            )}
            {/* https://www.npmjs.com/package/react-native-month-year-picker */}

            <Input
              placeholder="CVC"
              leftIcon={
                <Icon
                  name="shield"
                  size={24}
                  color="black"
                  style={{ paddingRight: 10 }}
                />
              }
            />

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
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 3,
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
