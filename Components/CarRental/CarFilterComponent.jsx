import React, { Component } from "react";
import { Button, Text, StyleSheet, View, Image } from "react-native";
import AppText from "../../common/AppText";
import colors from "../../config/colors";
import FilterBarComponent from "./FilterBarComponent";
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";
import { FontAwesome } from "@expo/vector-icons";

export default class CarFilterComponent extends Component {
  constructor(props) {
    super();
    this.state = {};
  }

  render() {
    return (
      <View
        style={[
          styles.container,
          {
            // flexDirection: rowMode ? "row" : "column",
            minHeight: 80,
            // height: height,
            backgroundColor: "white",
          },
        ]}
      >
        <View
          style={{
            alignSelf: "center",
            paddingTop: 20,
          }}
        >
          <AppText style={{ fontWeight: "bold", fontSize: 24 }}>
            Filter Cars
          </AppText>
        </View>

        {/* Category - start */}
        <FilterBarComponent name={"Category"} isEnabled={true} />

        <View style={styles.imagesContainerCategory}>
          <TouchableOpacity style={styles.categoryTouStyle}>
            <Image
              source={require("../../assets/filter/category/compact.jpg")}
              style={styles.catImgStyle}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.categoryTouStyle}>
            <Image
              source={require("../../assets/filter/category/Economy.jpg")}
              style={styles.catImgStyle}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.categoryTouStyle}>
            <Image
              source={require("../../assets/filter/category/FullSize.jpg")}
              style={styles.catImgStyle}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.categoryTouStyle}>
            <Image
              source={require("../../assets/filter/category/Intermediate.jpg")}
              style={styles.catImgStyle}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.categoryTouStyle}>
            <Image
              source={require("../../assets/filter/category/Luxury.jpg")}
              style={styles.catImgStyle}
            />
          </TouchableOpacity>
        </View>

        {/* Category - end */}

        {/* Supplier - start */}

        <FilterBarComponent name={"Supplier"} isEnabled={true} />
        <View style={styles.imagesContainerCategory}>
          <TouchableOpacity style={styles.suplierTouStyle}>
            <Image
              source={require("../../assets/filter/supplier/kangaroo.jpg")}
              style={styles.supImgStyle}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.suplierTouStyle}>
            <Image
              source={require("../../assets/filter/supplier/deerlake.jpg")}
              style={styles.supImgStyle}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.suplierTouStyle}>
            <Image
              source={require("../../assets/filter/supplier/taxid.jpg")}
              style={styles.supImgStyle}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.suplierTouStyle}>
            <Image
              source={require("../../assets/filter/supplier/yellowcab.jpg")}
              style={styles.supImgStyle}
            />
          </TouchableOpacity>
        </View>

        {/* Supplier - end */}

        {/* Vehicle Type - start */}
        <FilterBarComponent name={"Vehicle Type"} isEnabled={true} />

        <View style={styles.fuelContainerCategory}>
          <TouchableOpacity style={styles.fuelTouStyle}>
            <Image
              source={require("../../assets/filter/fuel/petrol.jpg")}
              style={styles.fuelImgStyle}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.fuelTouStyle}>
            <Image
              source={require("../../assets/filter/fuel/diesel.jpg")}
              style={styles.fuelImgStyle}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.fuelTouStyle}>
            <Image
              source={require("../../assets/filter/fuel/hybrid.jpg")}
              style={styles.fuelImgStyle}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.fuelTouStyle}>
            <Image
              source={require("../../assets/filter/fuel/pluginhybrid.jpg")}
              style={styles.fuelImgStyle}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.fuelTouStyle}>
            <Image
              source={require("../../assets/filter/fuel/electric.jpg")}
              style={styles.fuelImgStyle}
            />
          </TouchableOpacity>
        </View>

        {/* Vehicle Type - end */}

        {/* Cost component - start */}
        <FilterBarComponent name={"Cost"} isEnabled={true} />
        {/* Cost component - end */}

        {/* Rating component - start */}
        <FilterBarComponent name={"Rating"} isEnabled={true} />
        <View
          style={{
            // marginVertical: rowMode && 5,
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-evenly",
            // width: rowMode ? 120 : 180,
          }}
        >
          <FontAwesome
            name="star"
            size={25}
            color="#FFC911"
            style={{ marginVertical: 2 }}
          />
          <FontAwesome
            name="star"
            size={25}
            color="#FFC911"
            style={{ marginVertical: 2 }}
          />
          <FontAwesome
            name="star"
            size={25}
            color="#FFC911"
            style={{ marginVertical: 2 }}
          />
          <FontAwesome
            name="star"
            size={25}
            color="#FFC911"
            style={{ marginVertical: 2 }}
          />
          <FontAwesome
            name="star"
            size={25}
            color="#FFC911"
            style={{ marginVertical: 2 }}
          />
          <AppText
            style={{
              fontSize: 20,
              backgroundColor: colors.primary,
              color: colors.light,
              textAlign: "center",
              paddingHorizontal: 5,
              borderRadius: 5,
              marginBottom: 10,
            }}
          >
            {5}
          </AppText>
        </View>
        {/* Raing component - end */}
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
  imagesContainerCategory: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
  },
  categoryTouStyle: {},
  catImgStyle: {
    width: 50,
    height: 50,
  },

  suplierTouStyle: {},
  supImgStyle: {
    width: 80,
    height: 40,
  },

  fuelContainerCategory: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
  },
  fuelTouStyle: {},
  fuelImgStyle: {
    width: 50,
    height: 50,
  },
});
