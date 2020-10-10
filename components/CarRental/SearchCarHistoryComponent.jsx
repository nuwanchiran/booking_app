import React, { Component } from "react";
import {
  Button,
  Text,
  StyleSheet,
  View,
  FlatList,
  TextInput,
  TouchableOpacity,
  ScrollView,
  ImageBackground,
  Image,
} from "react-native";
import colors from "../../config/colors";
import AppButton from "../../common/AppButton";
import AppText from "../../common/AppText";
import { CheckBox } from "react-native-elements";
import { Feather } from "@expo/vector-icons";

export default class SearchCarComponent extends Component {
  constructor(props) {
    super();
    this.state = {
      image: {
        uri:
          "https://images.pexels.com/photos/227417/pexels-photo-227417.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      },
      recentImage: {
        uri:
          "https://images.pexels.com/photos/258196/pexels-photo-258196.jpeg?auto.compress& cs=tinysrgb&dpr=18m=500",
      },
      gallery: [
        {
          image: {
            uri:
              "https://firebasestorage.googleapis.com/v0/b/ueeproject-63bc8.appspot.com/o/images%2FsearchHistory%2Faudietron.jpg?alt=media&token=729fcaee-3edc-4136-b5ae-eddf12e7d814",
          },
          title: "Audi",
          key: "1",
        },
        {
          image: {
            uri:
              "https://firebasestorage.googleapis.com/v0/b/ueeproject-63bc8.appspot.com/o/images%2FsearchHistory%2Fbenz-s.jpg?alt=media&token=ffe3609a-ebe7-4b5f-8cf4-bfacc00e5197",
          },
          title: "Benz",
          key: "2",
        },
        {
          image: {
            uri:
              "https://firebasestorage.googleapis.com/v0/b/ueeproject-63bc8.appspot.com/o/images%2FsearchHistory%2Fsuzukivitara.jpg?alt=media&token=4a8b4d1d-ccd2-4ce8-b52c-52ff6cadedc2",
          },
          title: "Suzuki",
          key: "3",
        },
        {
          image: {
            uri:
              "https://firebasestorage.googleapis.com/v0/b/ueeproject-63bc8.appspot.com/o/images%2FsearchHistory%2Ftoyotachr.jpg?alt=media&token=f22dd458-7cba-46ff-8fef-6df7e41525e8",
          },
          title: "Toyota",
          key: "4",
        },
      ],
    };
  }

  render() {
    return (
      <View
        style={[
          styles.container,
          {
            // flexDirection: rowMode ? "row" : "column",
            // minHeight: 10,
            // height: height,
          },
        ]}
      >
        <View>
          {/* <AppText>Search Car history Component</AppText> */}
          {/* Full Component start */}
          <ScrollView>
            <View style={{ padding: 10 }}>
              <Text style={{ fontSize: 22, fontWeight: "bold" }}>
                Your Search History
              </Text>
            </View>
            <View>
              <FlatList
                horizontal={true}
                data={this.state.gallery}
                renderItem={({ item }) => {
                  return (
                    <View style={{ paddingVertical: 20, paddingLeft: 16 }}>
                      <TouchableOpacity>
                        <Image
                          source={{
                            uri: item.image.uri.toString(),
                          }}
                          style={{
                            width: 150,
                            marginRight: 8,
                            height: 150,
                            borderRadius: 10,
                          }}
                        />
                        <View style={styles.imageOverlay}></View>
                        <Feather
                          name="eye"
                          size={16}
                          color="white"
                          style={styles.imageLocationIcon}
                        />
                        <Text style={styles.imageText}>{item.title}</Text>
                      </TouchableOpacity>
                    </View>
                  );
                }}
              />
            </View>
          </ScrollView>
          {/* Full component end */}
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
  imageOverlay: {
    width: 150,
    height: 150,
    marginRight: 8,
    borderRadius: 10,
    position: "absolute",
    backgroundColor: "#000",
    opacity: 0.2,
  },
  imageLocationIcon: {
    position: "absolute",
    marginTop: 4,
    left: 10,
    bottom: 10,
  },
  imageText: {
    position: "absolute",
    color: "white",
    marginTop: 4,
    fontSize: 14,
    left: 30,
    bottom: 10,
  },
});
