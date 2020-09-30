import React, { Component } from "react";
import { Button, Text, StyleSheet, View, Switch } from "react-native";
import AppText from "../../common/AppText";
import colors from "../../config/colors";

export default class FilterBarComponent extends Component {
  constructor(props) {
    super();
    this.state = {
      name: props.isEnabled,
      isEnabled: false,
    };
  }
  toggleSwitch() {
    this.setState({ isEnabled: !this.state.isEnabled });
  }

  render() {
    return (
      <View>
        <View style={styles.mainContainer}>
          <View style={styles.titleView}>
            {/* Left side - start */}
            <AppText
              style={{ fontWeight: "bold", fontSize: 20, paddingLeft: 10 }}
            >
              {this.props.name}
            </AppText>
            {/* Left side -end  */}
          </View>
          <View style={styles.anyButtonView}>
            {/* Right side - start */}
            <AppText>Any</AppText>
            <Switch
              trackColor={{ false: "#767577", true: "#81b0ff" }}
              thumbColor={this.state.isEnabled ? "#003580" : "#f4f3f4"}
              ios_backgroundColor="#3e3e3e"
              onValueChange={() => this.toggleSwitch()}
              value={this.state.isEnabled}
            />
            {/* Right side -end  */}
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    marginTop: "5%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    alignContent: "flex-start",
    padding: 10,
  },
  titleView: {},
  anyButtonView: {
    flexDirection: "row",
  },
});
