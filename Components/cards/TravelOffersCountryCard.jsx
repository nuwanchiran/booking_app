import React, { useState } from "react";
import { ImageBackground, StyleSheet, Text, View, Image } from "react-native";
import colors from "../../config/colors";
import AppText from "../../common/AppText";
import {
  ScrollView,
  TextInput,
  TouchableOpacity,
} from "react-native-gesture-handler";
import Textarea from "react-native-textarea";
import AppButton from "../../common/AppButton";
import { Dialog } from "react-native-simple-dialogs";

export default function Card({ rowMode, height, name, imagePath }) {
  const [imgPth, setImgPth] = useState(imagePath);
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
      <AppText style={{ fontWeight: "bold", padding: 10, fontSize: 24 }}>
        {name}
      </AppText>
      <View>
        <TouchableOpacity>
          <Image
            //   source={require("../../assets/travelOffers/merlion.jpg")}
            // source={{ uri: imagePath }}

            // source={require("../../assets/travelOffers/merlion.jpg")}
            source={{ uri: imgPth }}
            style={{ width: "100%", height: 250, borderRadius: 20 }}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.descOfferMainContainer}>
        <View style={styles.leftSide}>
          {/* lestSide start */}
          <View style={{ padding: 10 }}>
            <View style={styles.desc}>
              <AppText>30 Hotels have a lower rate as just </AppText>
              <AppText style={styles.offer}>US$ 5 per day </AppText>
            </View>
          </View>
          {/* leftSide end */}
        </View>
        <View style={styles.rightSide}>
          {/* right Side start */}
          <View>
            <Image
              source={require("../../assets/travelOffers/offerIcon.png")}
              style={{
                width: 65,
                height: 65,
                borderRadius: 5,
              }}
            />
          </View>
          {/* right Side end */}
        </View>
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
  desc: {
    alignSelf: "center",
  },
  offer: {
    alignSelf: "center",
    color: "green",
    fontWeight: "bold",
  },
  offerIcon: {},
  descOfferMainContainer: {
    flexDirection: "row",
    flexWrap: "nowrap",
    justifyContent: "space-around",
    alignItems: "flex-start",
    alignContent: "flex-start",
  },
  leftSide: {
    flexGrow: 1,
  },
  rightSide: {
    flexGrow: 5,
  },
});
