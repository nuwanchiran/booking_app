import React, { Component } from "react";
import { Button, Text, StyleSheet, View, Alert, Linking, Image } from "react-native";
import AppText from "../../common/AppText";
import colors from "../../config/colors";
import { AntDesign } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";
import MapView from "react-native-maps";
import { Marker } from "react-native-maps";

export default class MapComponent extends Component {
  constructor(props) {
    super();
    this.state = {};
  }

  render() {
    return (
      <View style={{ flex: 0.7 }}>
        <View
          style={[
            styles.container,
            {
              // flexDirection: rowMode ? "row" : "column",
              minHeight: 400,
            },
          ]}
        >
          <View style={{ paddingLeft: 10 }}>
            <AppText style={styles.supplierText}>Supplier Info</AppText>
          </View>
          <View style={styles.mapArea}>
            {/* <MapView
              style={styles.mapStyle}
              initialRegion={{
                latitude: 1.337971,
                longitude: 103.981247,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
              }}
            >
              <MapView.Marker
                coordinate={{ latitude: 1.337971, longitude: 103.981247 }}
                pinColor={"purple"} // any color
                title={"Kangaroo Cabs"}
                description={"Changi Airport"}
              />
            </MapView> */}
          
            <Image
                  source={require("../../assets/carRental/map.png")}
                  style={styles.mapImg}
                />
          
            
          </View>

          <View style={styles.supplierAddressContactButtonView}>
            <View>
              {/* Supplier address start */}
              <View style={styles.supplierAddress}>
                <AppText style={{ fontSize: 15 }}>
                  65, Arrival Meeting Hall,
                </AppText>
                <AppText style={{ fontSize: 15 }}>Airport Boulevard</AppText>
                <AppText style={{ fontSize: 15 }}>Singapore</AppText>
                <AppText></AppText>
              </View>
              {/* Supplier address end */}
            </View>
            <View>
              {/* Supplier contact button start */}
              <View style={{ paddingTop: 50 }}>
                <TouchableOpacity>
                  <Button
                    style={{ borderRadius: 20 }}
                    onPress={() => {
                      // Alert.alert("Simple Button pressed");
                      Linking.openURL(
                        `whatsapp://send?phone=${+94777735712}&text=${"Hi, I would like to chat with you"}`
                      );
                    }}
                    title="Chat with supplier >>>"
                    color="#003580"
                  />
                </TouchableOpacity>
              </View>
              {/* Supplier contact button end */}
            </View>
          </View>

          <View style={styles.addressPhonemailContainer}>
            <View style={{ paddingLeft: 5 }}>
              <AntDesign name="phone" size={20} />
            </View>
            <View>
              <AppText style={{ fontSize: 15, paddingLeft: 10 }}>
                +65123456789
              </AppText>
            </View>
          </View>

          <View style={styles.addressPhonemailContainer}>
            <View style={{ paddingLeft: 5 }}>
              <AntDesign name="mail" size={20} />
            </View>
            <View>
              <AppText style={{ fontSize: 15, paddingLeft: 10 }}>
                abc@abc.com
              </AppText>
            </View>
          </View>

          <View style={styles.addressPhonemailContainer}>
            <View style={{ paddingLeft: 5 }}>
              <Feather name="globe" size={20} />
            </View>
            <View>
              <AppText style={{ fontSize: 15, paddingLeft: 10 }}>
                http://www.abc.com
              </AppText>
            </View>
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
  mapArea: {
    // borderRadius: 20,
    // overflow: "hidden",
    // width:150,
    // height:100

  },
  supplierAddress: {
    paddingLeft: 10,
  },
  supplierAddressContactButtonView: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginTop: -80,
  },
  addressPhonemailContainer: {
    flexDirection: "row",
    alignItems: "flex-start",
    padding: 2,
  },
  mapStyle: {
    width: "100%",
    height: "65%",
  },
  supplierText: {
    fontWeight: "bold",
    fontSize: 20,
    paddingBottom: 10,
    paddingTop: 10,
  },
  mapImg:{
    width:"100%",
    height:"65%",
    borderRadius:30

  }
});
