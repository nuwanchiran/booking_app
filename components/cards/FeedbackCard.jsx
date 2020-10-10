import React, { useState } from "react";
import { ImageBackground, StyleSheet, Text, View, Image } from "react-native";
import colors from "../../config/colors";
import AppText from "../../common/AppText";
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";
import Textarea from "react-native-textarea";
import AppButton from "../../common/AppButton";
import { Dialog } from "react-native-simple-dialogs";

export default function Card({ rowMode, height }) {
  const [selectedFeedbackType, setFeedbackType] = useState("");
  const [dialogVisible, setDialogVisible] = useState(false);
  const [feedback1, setFeedback1] = useState(false);
  const [feedback2, setFeedback2] = useState(false);
  const [feedback3, setFeedback3] = useState(false);
  const [feedback4, setFeedback4] = useState(false);
  const [feedback5, setFeedback5] = useState(false);

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

  // const jewelStyle = function () {
  //   return {
  //     borderWidth: 2,
  //     borderColor: "black",
  //   };
  // };

  const onPressFeedback1 = () => {
    setFeedback1((feedback1) => !feedback1);
    setFeedback2((feedback2) => false);
    setFeedback3((feedback3) => false);
    setFeedback4((feedback4) => false);
    setFeedback5((feedback5) => false);
  };

  const onPressFeedback2 = () => {
    setFeedback1((feedback1) => false);
    setFeedback2((feedback2) => !feedback2);
    setFeedback3((feedback3) => false);
    setFeedback4((feedback4) => false);
    setFeedback5((feedback5) => false);
  };

  const onPressFeedback3 = () => {
    setFeedback1((feedback1) => false);
    setFeedback2((feedback2) => false);
    setFeedback3((feedback3) => !feedback3);
    setFeedback4((feedback4) => false);
    setFeedback5((feedback5) => false);
  };

  const onPressFeedback4 = () => {
    setFeedback1((feedback1) => false);
    setFeedback2((feedback2) => false);
    setFeedback3((feedback3) => false);
    setFeedback4((feedback4) => !feedback4);
    setFeedback5((feedback5) => false);
  };

  const onPressFeedback5 = () => {
    setFeedback1((feedback1) => false);
    setFeedback2((feedback2) => false);
    setFeedback3((feedback3) => false);
    setFeedback4((feedback4) => false);
    setFeedback5((feedback5) => !feedback5);
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
        <View style={styles.imageRowFaces}>
          <TouchableOpacity onPress={onPressFeedback1}>
            {!feedback1 && (
              <View>
                <Image
                  source={require("../../assets/appFeedback/feedback1.jpg")}
                  style={styles.faceImgStyle}
                />
              </View>
            )}
            {feedback1 && (
              <View>
                <Image
                  source={require("../../assets/appFeedback/feedback1-selected.jpg")}
                  style={styles.faceImgStyle}
                />
              </View>
            )}
          </TouchableOpacity>

          <TouchableOpacity onPress={onPressFeedback2}>
            {!feedback2 && (
              <View>
                <Image
                  source={require("../../assets/appFeedback/feedback2.jpg")}
                  style={styles.faceImgStyle}
                />
              </View>
            )}
            {feedback2 && (
              <View>
                <Image
                  source={require("../../assets/appFeedback/feedback2-selected.jpg")}
                  style={styles.faceImgStyle}
                />
              </View>
            )}
          </TouchableOpacity>

          <TouchableOpacity onPress={onPressFeedback3}>
            {!feedback3 && (
              <View>
                <Image
                  source={require("../../assets/appFeedback/feedback3.jpg")}
                  style={styles.faceImgStyle}
                />
              </View>
            )}
            {feedback3 && (
              <View>
                <Image
                  source={require("../../assets/appFeedback/feedback3-selected.jpg")}
                  style={styles.faceImgStyle}
                />
              </View>
            )}
          </TouchableOpacity>

          <TouchableOpacity onPress={onPressFeedback4}>
            {!feedback4 && (
              <View>
                <Image
                  source={require("../../assets/appFeedback/feedback4.jpg")}
                  style={styles.faceImgStyle}
                />
              </View>
            )}
            {feedback4 && (
              <View>
                <Image
                  source={require("../../assets/appFeedback/feedback4-selected.jpg")}
                  style={styles.faceImgStyle}
                />
              </View>
            )}
          </TouchableOpacity>

          <TouchableOpacity onPress={onPressFeedback5}>
            {!feedback5 && (
              <View>
                <Image
                  source={require("../../assets/appFeedback/feedback5.jpg")}
                  style={styles.faceImgStyle}
                />
              </View>
            )}
            {feedback5 && (
              <View>
                <Image
                  source={require("../../assets/appFeedback/feedback5-selected.jpg")}
                  style={styles.faceImgStyle}
                />
              </View>
            )}
          </TouchableOpacity>
        </View>
      </View>

      {/* Feedback type and submit view */}
      <View style={styles.feedbackIconsView}>
        <View style={styles.imageRowTypes}>
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

  imageRowFaces: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    alignContent: "flex-start",
    width: "100%",
  },
  imageRowTypes: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    alignContent: "flex-start",
    width: "100%",
  },
  faceImgStyle: {
    width: 64,
    height: 64,
  },

  feedbackTypeIcons: {
    width: 79,
    height: 90,
    borderRadius: 5,
  },
  textareaContainer: {
    height: 180,
    padding: 5,
    backgroundColor: "#F5FCFF",
    borderRadius: 10,
  },
  textarea: {
    textAlignVertical: "top",
    height: 170,
    fontSize: 14,
    color: "#333",
    borderRadius: 10,
  },
});
