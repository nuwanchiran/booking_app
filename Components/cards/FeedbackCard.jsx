import React, { useState } from "react";
import { ImageBackground, StyleSheet, Text, View, Image } from "react-native";
import colors from "../../config/colors";
import AppText from "../../common/AppText";
import { FontAwesome } from "@expo/vector-icons";
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";
import Textarea from "react-native-textarea";
import AppButton from "../../common/AppButton";
import { Dialog } from "react-native-simple-dialogs";

export default function Card({ rowMode, height }) {
  const [selectedFeedbackType, setFeedbackType] = useState("");
  const [dialogVisible, setDialogVisible] = useState(false);

  const pressComplaint = () => {
    setFeedbackType((selectedFeedbackType) => "Write a complaint");
  };

  const pressReview = () => {
    setFeedbackType((selectedFeedbackType) => "Write a review");
  };

  const pressSuggestion = () => {
    setFeedbackType((selectedFeedbackType) => "Write a suggestion");
  };

  const pressPraise = () => {
    setFeedbackType((selectedFeedbackType) => "Write a praise");
  };

  const submitPressed = () => {
    setDialogVisible((dialogVisible) => true);
  };

  const jewelStyle = function () {
    return {
      borderWidth: 2,
      borderColor: "black",
      // background: randomColor(),
    };
  };

  return (
    <View
      style={[
        styles.container,
        {
          flexDirection: rowMode ? "row" : "column",
          minHeight: 100,
          height: height,
        },
      ]}
    >
      {/* Feedback face icons row */}
      <View style={styles.feedbackIconsView}>
        <View style={styles.imageRow}>
          <TouchableOpacity style={styles.faceImgStyle}>
            <Image
              source={require("../../assets/appFeedback/feedback1.jpg")}
              style={styles.faceImgStyle}
            />
          </TouchableOpacity>

          <TouchableOpacity>
            <Image
              source={require("../../assets/appFeedback/feedback2.jpg")}
              style={styles.faceImgStyle}
            />
          </TouchableOpacity>

          <TouchableOpacity>
            <Image
              source={require("../../assets/appFeedback/feedback3.jpg")}
              style={styles.faceImgStyle}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              source={require("../../assets/appFeedback/feedback4.jpg")}
              style={styles.faceImgStyle}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              source={require("../../assets/appFeedback/feedback5.jpg")}
              style={styles.faceImgStyle}
            />
          </TouchableOpacity>
        </View>
      </View>

      {/* Feedback type and submit view */}
      <View style={styles.feedbackIconsView}>
        <View style={styles.imageRow}>
          {/* <View style={{selectedFeedbackType == ""? borderWidth: 2, borderColor: "black" }}> */}
          <View
            style={
              selectedFeedbackType == "Write a complaint"
                ? { borderWidth: 2, borderColor: "gray", borderRadius: 6 }
                : {}
            }
          >
            <TouchableOpacity onPress={pressComplaint}>
              <Image
                source={require("../../assets/appFeedback/complaint.jpg")}
                style={styles.feedbackTypeIcons}
              />
            </TouchableOpacity>
          </View>

          <View
            style={
              selectedFeedbackType == "Write a review"
                ? { borderWidth: 2, borderColor: "gray", borderRadius: 6 }
                : {}
            }
          >
            <TouchableOpacity onPress={pressReview}>
              <Image
                source={require("../../assets/appFeedback/review.jpg")}
                style={styles.feedbackTypeIcons}
              />
            </TouchableOpacity>
          </View>

          <View
            style={
              selectedFeedbackType == "Write a suggestion"
                ? { borderWidth: 2, borderColor: "gray", borderRadius: 6 }
                : {}
            }
          >
            <TouchableOpacity onPress={pressSuggestion}>
              <Image
                source={require("../../assets/appFeedback/suggestion.jpg")}
                style={styles.feedbackTypeIcons}
              />
            </TouchableOpacity>
          </View>

          <View
            style={
              selectedFeedbackType == "Write a praise"
                ? { borderWidth: 2, borderColor: "gray", borderRadius: 6 }
                : {}
            }
          >
            <TouchableOpacity onPress={pressPraise}>
              <Image
                source={require("../../assets/appFeedback/praise.jpg")}
                style={styles.feedbackTypeIcons}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>

      {/* user submit form area */}
      <View>
        <AppText style={{ padding: 5, fontWeight: "bold" }}>
          {selectedFeedbackType}
        </AppText>

        <Textarea
          containerStyle={styles.textareaContainer}
          style={styles.textarea}
          // onChangeText={this.onChange}
          // defaultValue={this.state.text}
          maxLength={120}
          placeholder={"Write here..."}
          placeholderTextColor={"#c7c7c7"}
          underlineColorAndroid={"transparent"}
        />

        <TouchableOpacity onPress={submitPressed}>
          <View>
            <AppButton title="Submit" color="primary" iconColor="light" />
          </View>
        </TouchableOpacity>

        <Dialog
          visible={dialogVisible}
          title="Thanks for your feedback"
          onTouchOutside={() => setDialogVisible((dialogVisible) => false)}
        >
          <View></View>
        </Dialog>
      </View>
    </View>
  );
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
  feedbackIconsView: {
    display: "flex",
    backgroundColor: colors.light,
    flex: 0,
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
    elevation: 4,
  },

  imageRow: {
    // flex: 1,
    // display: "flex",
    // flexDirection: "row",
    // width: "100%",

    flexDirection: "row",
    flexWrap: "nowrap",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    alignContent: "stretch",
    width: "100%",
    //marginHorizontal: 20,
  },
  faceImgStyle: {
    width: 64,
    height: 64,
  },

  feedbackTypeIcons: {
    width: 79,
    height: 90,
    borderRadius: 5,
    // borderWidth: 2,
    // borderColor: "black",
  },
  textareaContainer: {
    height: 180,
    padding: 5,
    backgroundColor: "#F5FCFF",
    borderRadius: 10,
  },
  textarea: {
    textAlignVertical: "top", // hack android
    height: 170,
    fontSize: 14,
    color: "#333",
    borderRadius: 10,
  },
});
