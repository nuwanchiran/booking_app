import React, { Component } from "react";
import { Button, Text, StyleSheet, View, Alert, Linking } from "react-native";
import AppText from "../../common/AppText";
import colors from "../../config/colors";
import { AntDesign } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";

export default class MapComponent extends Component {
  constructor(props) {
    super();
    this.state = {};
  }

  render() {
    return (
      <View style={{ flex: 0.5 }}>
        <View
          style={[
            styles.container,
            {
              // flexDirection: rowMode ? "row" : "column",
              minHeight: 100,
            },
          ]}
        >
          <View style={{ paddingLeft: 10, paddingTop: 10 }}>
            <AppText style={{ fontWeight: "bold", fontSize: 20 }}>
              Supplier Info
            </AppText>
          </View>
          <View style={styles.mapArea}>
            <Text>Map is here</Text>
            <Text></Text>
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
              <View style={{ borderRadius: 20 }}>
                <TouchableOpacity>
                  <Button
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
  mapArea: {},
  supplierAddress: {},
  supplierAddressContactButtonView: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
  },
  addressPhonemailContainer: {
    flexDirection: "row",
    alignItems: "flex-start",
    padding: 2,
  },
});
