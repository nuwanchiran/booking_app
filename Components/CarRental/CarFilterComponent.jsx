import React, { Component } from "react";
import { Button, Text, StyleSheet, View, Image } from "react-native";
import AppText from "../../common/AppText";
import colors from "../../config/colors";
import FilterBarComponent from "./FilterBarComponent";
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";
import { FontAwesome } from "@expo/vector-icons";
import RangeSlider, { Slider } from "react-native-range-slider-expo";
import { Rating, AirbnbRating } from "react-native-ratings";

export default class CarFilterComponent extends Component {
  constructor(props) {
    super();
    this.state = {
      categoryArr: [
        { name: "compact", status: false },
        { name: "economy", status: false },
        { name: "fullSize", status: false },
        { name: "intermediate", status: false },
        { name: "luxury", status: false },
      ],

      supplier: [
        { name: "kangaroo", status: false },
        { name: "deerLake", status: false },
        { name: "taxiD", status: false },
        { name: "yellowCab", status: false },
      ],

      vehicleType: [
        { name: "petrol", status: false },
        { name: "diesel", status: false },
        { name: "hybrid", status: false },
        { name: "pluginHybrid", status: false },
        { name: "electric", status: false },
      ],
      fromVal: 0,
      toVal: 100,
      rating: 3,
    };
  }

  setFromValue(val) {
    // console.log("from" + val);
    this.setState({ fromVal: val });
  }
  setToValue(val) {
    // console.log("to" + val);
    this.setState({ toVal: val });
  }
  ratingCompleted(rating) {
    console.log("Rating is: " + rating);
  }

  handleAnyCategory = (isSelected, currentName) => {
    const newItemsArr = this.state.categoryArr.map((obj) =>
      obj.name !== "" ? { name: obj.name, status: isSelected } : obj
    );
    this.setState({ categoryArr: newItemsArr });
  };

  handleAnySupplier = (isSelected, currentName) => {
    const newItemsArr = this.state.supplier.map((obj) =>
      obj.name !== "" ? { name: obj.name, status: isSelected } : obj
    );
    this.setState({ supplier: newItemsArr });
  };

  handleAnyVehicleType = (isSelected, currentName) => {
    const newItemsArr = this.state.vehicleType.map((obj) =>
      obj.name !== "" ? { name: obj.name, status: isSelected } : obj
    );
    this.setState({ vehicleType: newItemsArr });
  };

  handleAnyRating = (isSelected, currentName) => {
    this.setState({
      rating: 0,
    });
  };

  handleAnyCost = (isSelected, currentName) => {
    this.setState({
      fromVal: 0,
      toVal: 100,
    });
  };

  render() {
    return (
      <View
        style={[
          styles.container,
          {
            minHeight: 80,
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
        <FilterBarComponent
          name={"Category"}
          onSelectAny={this.handleAnyCategory}
        />

        <View style={styles.imagesContainerCategory}>
          {/*  */}
          <View
            style={
              this.state.categoryArr[0].status == true
                ? { borderWidth: 2, borderColor: "gray", borderRadius: 6 }
                : {}
            }
          >
            <TouchableOpacity
              style={styles.categoryTouStyle}
              onPress={() => {
                const newItemsArr = this.state.categoryArr.map((obj) =>
                  obj.name === "compact"
                    ? { name: obj.name, status: !obj.status }
                    : obj
                );
                this.setState({ categoryArr: newItemsArr });
              }}
            >
              <Image
                source={require("../../assets/filter/category/compact.jpg")}
                style={styles.catImgStyle}
              />
            </TouchableOpacity>
          </View>
          {/*  */}

          <View
            style={
              this.state.categoryArr[1].status == true
                ? { borderWidth: 2, borderColor: "gray", borderRadius: 6 }
                : {}
            }
          >
            <TouchableOpacity
              style={styles.categoryTouStyle}
              onPress={() => {
                const newItemsArr = this.state.categoryArr.map((obj) =>
                  obj.name === "economy"
                    ? { name: obj.name, status: !obj.status }
                    : obj
                );
                this.setState({ categoryArr: newItemsArr });
              }}
            >
              <Image
                source={require("../../assets/filter/category/Economy.jpg")}
                style={styles.catImgStyle}
              />
            </TouchableOpacity>
          </View>

          <View
            style={
              this.state.categoryArr[2].status == true
                ? { borderWidth: 2, borderColor: "gray", borderRadius: 6 }
                : {}
            }
          >
            <TouchableOpacity
              style={styles.categoryTouStyle}
              onPress={() => {
                const newItemsArr = this.state.categoryArr.map((obj) =>
                  obj.name === "fullSize"
                    ? { name: obj.name, status: !obj.status }
                    : obj
                );
                this.setState({ categoryArr: newItemsArr });
              }}
            >
              <Image
                source={require("../../assets/filter/category/FullSize.jpg")}
                style={styles.catImgStyle}
              />
            </TouchableOpacity>
          </View>

          <View
            style={
              this.state.categoryArr[3].status == true
                ? { borderWidth: 2, borderColor: "gray", borderRadius: 6 }
                : {}
            }
          >
            <TouchableOpacity
              style={styles.categoryTouStyle}
              onPress={() => {
                const newItemsArr = this.state.categoryArr.map((obj) =>
                  obj.name === "intermediate"
                    ? { name: obj.name, status: !obj.status }
                    : obj
                );
                this.setState({ categoryArr: newItemsArr });
              }}
            >
              <Image
                source={require("../../assets/filter/category/Intermediate.jpg")}
                style={styles.catImgStyle}
              />
            </TouchableOpacity>
          </View>

          <View
            style={
              this.state.categoryArr[4].status == true
                ? { borderWidth: 2, borderColor: "gray", borderRadius: 6 }
                : {}
            }
          >
            <TouchableOpacity
              style={styles.categoryTouStyle}
              onPress={() => {
                const newItemsArr = this.state.categoryArr.map((obj) =>
                  obj.name === "luxury"
                    ? { name: obj.name, status: !obj.status }
                    : obj
                );
                this.setState({ categoryArr: newItemsArr });
              }}
            >
              <Image
                source={require("../../assets/filter/category/Luxury.jpg")}
                style={styles.catImgStyle}
              />
            </TouchableOpacity>
          </View>
        </View>

        {/* Category - end */}

        {/* Supplier - start */}

        <FilterBarComponent
          name={"Supplier"}
          onSelectAny={this.handleAnySupplier}
        />
        <View style={styles.imagesContainerCategory}>
          <View
            style={
              this.state.supplier[0].status == true
                ? { borderWidth: 2, borderColor: "gray", borderRadius: 6 }
                : {}
            }
          >
            <TouchableOpacity
              style={styles.suplierTouStyle}
              onPress={() => {
                const newItemsArr = this.state.supplier.map((obj) =>
                  obj.name === "kangaroo"
                    ? { name: obj.name, status: !obj.status }
                    : obj
                );
                this.setState({ supplier: newItemsArr });
              }}
            >
              <Image
                source={require("../../assets/filter/supplier/kangaroo.jpg")}
                style={styles.supImgStyle}
              />
            </TouchableOpacity>
          </View>

          <View
            style={
              this.state.supplier[1].status == true
                ? { borderWidth: 2, borderColor: "gray", borderRadius: 6 }
                : {}
            }
          >
            <TouchableOpacity
              style={styles.suplierTouStyle}
              onPress={() => {
                const newItemsArr = this.state.supplier.map((obj) =>
                  obj.name === "deerLake"
                    ? { name: obj.name, status: !obj.status }
                    : obj
                );
                this.setState({ supplier: newItemsArr });
              }}
            >
              <Image
                source={require("../../assets/filter/supplier/deerlake.jpg")}
                style={styles.supImgStyle}
              />
            </TouchableOpacity>
          </View>

          <View
            style={
              this.state.supplier[2].status == true
                ? { borderWidth: 2, borderColor: "gray", borderRadius: 6 }
                : {}
            }
          >
            <TouchableOpacity
              style={styles.suplierTouStyle}
              onPress={() => {
                const newItemsArr = this.state.supplier.map((obj) =>
                  obj.name === "taxiD"
                    ? { name: obj.name, status: !obj.status }
                    : obj
                );
                this.setState({ supplier: newItemsArr });
              }}
            >
              <Image
                source={require("../../assets/filter/supplier/taxid.jpg")}
                style={styles.supImgStyle}
              />
            </TouchableOpacity>
          </View>

          <View
            style={
              this.state.supplier[3].status == true
                ? { borderWidth: 2, borderColor: "gray", borderRadius: 6 }
                : {}
            }
          >
            <TouchableOpacity
              style={styles.suplierTouStyle}
              onPress={() => {
                const newItemsArr = this.state.supplier.map((obj) =>
                  obj.name === "yellowCab"
                    ? { name: obj.name, status: !obj.status }
                    : obj
                );
                this.setState({ supplier: newItemsArr });
              }}
            >
              <Image
                source={require("../../assets/filter/supplier/yellowcab.jpg")}
                style={styles.supImgStyle}
              />
            </TouchableOpacity>
          </View>
        </View>

        {/* Supplier - end */}

        {/* Vehicle Type - start */}
        <FilterBarComponent
          name={"Vehicle Type"}
          onSelectAny={this.handleAnyVehicleType}
        />

        <View style={styles.fuelContainerCategory}>
          <View
            style={
              this.state.vehicleType[0].status == true
                ? { borderWidth: 2, borderColor: "gray", borderRadius: 6 }
                : {}
            }
          >
            <TouchableOpacity
              style={styles.fuelTouStyle}
              onPress={() => {
                const newItemsArr = this.state.vehicleType.map((obj) =>
                  obj.name === "petrol"
                    ? { name: obj.name, status: !obj.status }
                    : obj
                );
                this.setState({ vehicleType: newItemsArr });
              }}
            >
              <Image
                source={require("../../assets/filter/fuel/petrol.jpg")}
                style={styles.fuelImgStyle}
              />
            </TouchableOpacity>
          </View>

          <View
            style={
              this.state.vehicleType[1].status == true
                ? { borderWidth: 2, borderColor: "gray", borderRadius: 6 }
                : {}
            }
          >
            <TouchableOpacity
              style={styles.fuelTouStyle}
              onPress={() => {
                const newItemsArr = this.state.vehicleType.map((obj) =>
                  obj.name === "diesel"
                    ? { name: obj.name, status: !obj.status }
                    : obj
                );
                this.setState({ vehicleType: newItemsArr });
              }}
            >
              <Image
                source={require("../../assets/filter/fuel/diesel.jpg")}
                style={styles.fuelImgStyle}
              />
            </TouchableOpacity>
          </View>

          <View
            style={
              this.state.vehicleType[2].status == true
                ? { borderWidth: 2, borderColor: "gray", borderRadius: 6 }
                : {}
            }
          >
            <TouchableOpacity
              style={styles.fuelTouStyle}
              onPress={() => {
                const newItemsArr = this.state.vehicleType.map((obj) =>
                  obj.name === "hybrid"
                    ? { name: obj.name, status: !obj.status }
                    : obj
                );
                this.setState({ vehicleType: newItemsArr });
              }}
            >
              <Image
                source={require("../../assets/filter/fuel/hybrid.jpg")}
                style={styles.fuelImgStyle}
              />
            </TouchableOpacity>
          </View>

          <View
            style={
              this.state.vehicleType[3].status == true
                ? { borderWidth: 2, borderColor: "gray", borderRadius: 6 }
                : {}
            }
          >
            <TouchableOpacity
              style={styles.fuelTouStyle}
              onPress={() => {
                const newItemsArr = this.state.vehicleType.map((obj) =>
                  obj.name === "pluginHybrid"
                    ? { name: obj.name, status: !obj.status }
                    : obj
                );
                this.setState({ vehicleType: newItemsArr });
              }}
            >
              <Image
                source={require("../../assets/filter/fuel/pluginhybrid.jpg")}
                style={styles.fuelImgStyle}
              />
            </TouchableOpacity>
          </View>

          <View
            style={
              this.state.vehicleType[4].status == true
                ? { borderWidth: 2, borderColor: "gray", borderRadius: 6 }
                : {}
            }
          >
            <TouchableOpacity
              style={styles.fuelTouStyle}
              onPress={() => {
                const newItemsArr = this.state.vehicleType.map((obj) =>
                  obj.name === "electric"
                    ? { name: obj.name, status: !obj.status }
                    : obj
                );
                this.setState({ vehicleType: newItemsArr });
              }}
            >
              <Image
                source={require("../../assets/filter/fuel/electric.jpg")}
                style={styles.fuelImgStyle}
              />
            </TouchableOpacity>
          </View>
        </View>

        {/* Vehicle Type - end */}

        {/* Cost component - start */}
        <FilterBarComponent
          name={"Cost($/km)"}
          onSelectAny={this.handleAnyCost}
        />
        <View>
          <RangeSlider
            min={0}
            max={100}
            fromValueOnChange={(value) => this.setFromValue(value)}
            toValueOnChange={(value) => this.setToValue(value)}
            initialFromValue={this.state.fromVal}
            initialToValue={this.state.toVal}
          />
        </View>
        {/* Cost component - end */}

        {/* Rating component - start  */}
        <View style={{ marginTop: -50 }}>
          <FilterBarComponent
            name={"Rating"}
            onSelectAny={this.handleAnyRating}
          />
          <View
            style={{
              // marginVertical: rowMode && 5,
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-evenly",
              // width: rowMode ? 120 : 180,
            }}
          >
            <View style={{ marginTop: -25 }}>
              <AirbnbRating defaultRating={this.state.rating} />
            </View>
          </View>
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
