import React, { Component } from "react";
import {
  CheckBox,
  Button,
  Text,
  StyleSheet,
  View,
  TextInput,
  Image,
} from "react-native";
import colors from "../../config/colors";
import AppButton from "../../common/AppButton";
import AppText from "../../common/AppText";
import RangeSlider, { Slider } from "react-native-range-slider-expo";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { TouchableOpacity } from "react-native-gesture-handler";

export default class SearchCarComponent extends Component {
  constructor(props) {
    super();
    this.state = {
      isSelected: true,
      isSelectedAge: false,
      isDatePickerVisible: false,
      isTimePickerVisible: false,

      isDatePickerVisibleEnd: false,
      isTimePickerVisibleEnd: false,

      selectedStartDate: "",
      selectedStartTime: "",
      selectedEndDate: "",
      selectedEndTime: "",
    };
    this.setSelected = this.setSelected.bind(this);
    this.setSelectedAge = this.setSelectedAge.bind(this);

    this.showDatePicker = this.showDatePicker.bind(this);
    this.hideDatePicker = this.hideDatePicker.bind(this);
    this.showTimePicker = this.showTimePicker.bind(this);
    this.hideTimePicker = this.hideTimePicker.bind(this);
    this.handleConfirm = this.handleConfirm.bind(this);
    this.handleConfirmTime = this.handleConfirmTime.bind(this);

    this.showDatePickerEnd = this.showDatePickerEnd.bind(this);
    this.hideDatePickerEnd = this.hideDatePickerEnd.bind(this);
    this.showTimePickerEnd = this.showTimePickerEnd.bind(this);
    this.hideTimePickerEnd = this.hideTimePickerEnd.bind(this);
    this.handleConfirmEnd = this.handleConfirmEnd.bind(this);
    this.handleConfirmTimeEnd = this.handleConfirmTimeEnd.bind(this);
  }

  setFromValue(val) {
    console.log("from" + val);
  }
  setToValue(val) {
    console.log("to" + val);
  }

  setSelected() {
    this.setState({ isSelected: !this.state.isSelected });
  }
  setSelectedAge() {
    this.setState({ isSelectedAge: !this.state.isSelectedAge });
  }

  showDatePicker() {
    this.setState({ isDatePickerVisible: true });
  }

  hideDatePicker() {
    this.setState({ isDatePickerVisible: false });
  }

  handleConfirm(date) {
    this.setState({ selectedStartDate: date });
    this.hideDatePicker();
  }

  showTimePicker() {
    this.setState({ isTimePickerVisible: true });
  }
  handleConfirmTime(time) {
    console.warn("A time has been picked: ", time);
    this.setState({ selectedStartTime: time });
    this.hideTimePicker();
  }
  hideTimePicker() {
    this.setState({ isTimePickerVisible: false });
  }

  //
  showDatePickerEnd() {
    this.setState({ isDatePickerVisibleEnd: true });
  }

  hideDatePickerEnd() {
    this.setState({ isDatePickerVisibleEnd: false });
  }

  handleConfirmEnd(date) {
    this.setState({ selectedEndDate: date });
    this.hideDatePicker();
  }

  showTimePickerEnd() {
    this.setState({ isTimePickerVisibleEnd: true });
  }
  handleConfirmTimeEnd(time) {
    console.warn("A time has been picked: ", time);
    this.setState({ selectedEndTime: time });
    this.hideTimePickerEnd();
  }
  hideTimePickerEnd() {
    this.setState({ isTimePickerVisibleEnd: false });
  }

  render() {
    return (
      <View style={styles.container}>
        <View>
          <View style={styles.returnToSameLocContainer}>
            <View style={styles.returnToSameLocTextView}>
              <AppText>Return to same location</AppText>
            </View>

            <View style={styles.returnToSameLocTick}>
              <CheckBox
                value={this.state.isSelected}
                onValueChange={this.setSelected}
                style={styles.checkboxcust}
              />
            </View>
          </View>
          <View style={styles.searchSection}>
            <Image
              source={require("../../assets/search/location.png")} //Change your icon image here
              style={{ width: 40, height: 40, borderRadius: 10 }}
            />

            <TextInput
              style={styles.input}
              autoFocus={true}
              // inlineImageLeft='search'
              // inlineImagePadding={5}
              placeHolder="Search Product"
              placeholderTextColor="gray"
              // onChangeText={ (text) => this.setState({text})}
              // value = {this.state.text}
            />
          </View>
          <AppText style={{ padding: 5, fontSize: 15, paddingLeft: "40%" }}>
            Start Date
          </AppText>

          {/*  */}
          <View style={styles.datetimeContainer}>
            <View style={styles.imageSection}>
              <Image
                source={require("../../assets/search/calendar.png")} //Change your icon image here
                style={{ width: 40, height: 40, borderRadius: 10 }}
              />
            </View>
            <View style={styles.buttonSection}>
              <View>
                {/* <Button
                  style={{ width: "50%" }}
                  color="#dddddd"
                  title={this.state.selectedStartDate.toString()}
                  onPress={this.showDatePicker}
                /> */}

                <TouchableOpacity
                  style={{ backgroundColor: "#dddddd" }}
                  onPress={this.showDatePicker}
                >
                  <AppText style={{ fontSize: 15, height: 40 }}>
                    {this.state.selectedStartDate.toString()}
                  </AppText>
                </TouchableOpacity>

                <DateTimePickerModal
                  isVisible={this.state.isDatePickerVisible}
                  mode="date"
                  onConfirm={this.handleConfirm}
                  onCancel={this.hideDatePicker}
                />
              </View>
            </View>
          </View>
          <AppText style={{ padding: 5, fontSize: 15, paddingLeft: "40%" }}>
            Start Time
          </AppText>
          <View style={styles.datetimeContainer}>
            <View style={styles.imageSection}>
              <Image
                source={require("../../assets/search/clock.png")} //Change your icon image here
                style={{ width: 40, height: 40, borderRadius: 10 }}
              />
            </View>
            <View style={styles.buttonSection}>
              <View>
                {/* <Button
                  color="#dddddd"
                  title={this.state.selectedStartTime.toString()}
                  onPress={this.showTimePicker}
                /> */}

                <TouchableOpacity
                  style={{ backgroundColor: "#dddddd" }}
                  onPress={this.showTimePicker}
                >
                  <AppText style={{ fontSize: 15, height: 40 }}>
                    {this.state.selectedStartTime.toString()}
                  </AppText>
                </TouchableOpacity>

                <DateTimePickerModal
                  isVisible={this.state.isTimePickerVisible}
                  mode="time"
                  onConfirm={this.handleConfirmTime}
                  onCancel={this.hideTimePicker}
                />
              </View>
            </View>
          </View>
          {/*  */}
          <AppText style={{ padding: 5, fontSize: 15, paddingLeft: "40%" }}>
            End Date
          </AppText>
          {/*  */}
          <View style={styles.datetimeContainer}>
            <View style={styles.imageSection}>
              <Image
                source={require("../../assets/search/calendar.png")} //Change your icon image here
                style={{ width: 40, height: 40, borderRadius: 10 }}
              />
            </View>
            <View style={styles.buttonSection}>
              <View>
                {/* <Button
                  style={{ width: "50%" }}
                  color="#dddddd"
                  title={this.state.selectedEndDate.toString()}
                  onPress={this.showDatePickerEnd}
                /> */}

                <TouchableOpacity
                  style={{ backgroundColor: "#dddddd" }}
                  onPress={this.showDatePickerEnd}
                >
                  <AppText style={{ fontSize: 15, height: 40 }}>
                    {this.state.selectedEndDate.toString()}
                  </AppText>
                </TouchableOpacity>

                <DateTimePickerModal
                  isVisible={this.state.isDatePickerVisibleEnd}
                  mode="date"
                  onConfirm={this.handleConfirmEnd}
                  onCancel={this.hideDatePickerEnd}
                />
              </View>
            </View>
          </View>
          <AppText style={{ padding: 5, fontSize: 15, paddingLeft: "40%" }}>
            End Time
          </AppText>
          <View style={styles.datetimeContainer}>
            <View style={styles.imageSection}>
              <Image
                source={require("../../assets/search/clock.png")} //Change your icon image here
                style={{ width: 40, height: 40, borderRadius: 10 }}
              />
            </View>
            <View style={styles.buttonSection}>
              <View>
                {/* <Button
                  color="#dddddd"
                  title={this.state.selectedEndTime.toString()}
                  onPress={this.showTimePickerEnd}
                /> */}

                <TouchableOpacity
                  style={{ backgroundColor: "#dddddd" }}
                  onPress={this.showTimePickerEnd}
                >
                  <AppText style={{ fontSize: 15, height: 40 }}>
                    {this.state.selectedEndTime.toString()}
                  </AppText>
                </TouchableOpacity>

                <DateTimePickerModal
                  isVisible={this.state.isTimePickerVisibleEnd}
                  mode="time"
                  onConfirm={this.handleConfirmTimeEnd}
                  onCancel={this.hideTimePickerEnd}
                />
              </View>
            </View>
          </View>
          {/*  */}

          <View>
            <RangeSlider
              min={18}
              max={80}
              fromValueOnChange={(value) => this.setFromValue(value)}
              toValueOnChange={(value) => this.setToValue(value)}
              initialFromValue={25}
            />
          </View>
          <View style={styles.returnToSameLocContainer}>
            <View style={styles.anyAgeTextView}>
              <AppText>Any age</AppText>
            </View>
            <View style={styles.AnyAgeTickView}>
              <CheckBox
                value={this.state.isSelectedAge}
                onValueChange={this.setSelectedAge}
                style={styles.checkboxcust}
              />
            </View>
          </View>
          <AppButton
            title="Search"
            color="primary"
            iconColor="light"
            onPress={() => this.props.navigation.navigate("CarSearchResults")}
          />
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
  returnToSameLocContainer: {
    flexDirection: "row",
    alignItems: "flex-start",
    alignContent: "flex-start",
  },
  returnToSameLocTextView: { flexGrow: 1, paddingTop: 15, paddingLeft: 10 },
  returnToSameLocTick: { flexGrow: 0 },
  checkboxcust: {
    marginVertical: 10,
    marginHorizontal: 10,
  },
  anyAgeContainer: {
    flexDirection: "row",
    alignItems: "flex-start",
    alignContent: "flex-start",
  },

  anyAgeTextView: { flexGrow: 1, paddingTop: 15, paddingLeft: 10 },
  AnyAgeTickView: { flexGrow: 0 },

  searchSection: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f8f4f4",
  },
  searchIcon: {
    padding: 10,
  },
  input: {
    flex: 1,
    paddingTop: 10,
    paddingRight: 10,
    paddingBottom: 10,
    paddingLeft: 10,
    borderRadius: 10,
    borderColor: "black",
    color: "#424242",
    backgroundColor: "#dddddd",
  },

  datetimeContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
  },
  imageSection: {
    flexGrow: 1,
  },
  buttonSection: {
    flexGrow: 10,
    paddingRight: 10,
  },
});
