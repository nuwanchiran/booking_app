import React, { Component } from "react";
import { Button, Text, StyleSheet, View, Image } from "react-native";
import AppText from "../../common/AppText";
import colors from "../../config/colors";
import StyledText from "react-native-styled-text";

export default class ProgressBarComponent extends Component {
  constructor(props) {
    super();
    this.state = {
      //   isLoaded: false,
    };
  }

  //   componentDidMount() {
  //     this.timeoutHandle = setTimeout(() => {
  //       this.setState({ isLoaded: true });
  //     }, 1000);
  //   }

  render() {
    return (
      <View style={{ flex: 0.2 }}>
        <View
          style={[
            styles.container,
            {
              // flexDirection: rowMode ? "row" : "column",
              minHeight: 150,
              // height: height,
            },
          ]}
        >
          <AppText>ProgressBar component</AppText>
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
});
