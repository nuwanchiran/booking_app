import React from "react";
import colors from "../config/colors";
import AppText from "../common/AppText";
import { AntDesign } from "@expo/vector-icons";
import { StyleSheet, View } from "react-native";
import {
  ScrollView, TouchableNativeFeedback
} from "react-native-gesture-handler";
import Card from "../common/Card";
import routes from "../navigations/routes";
import WishListPropertyCard from "./cards/WishListPropertyCard";

export default function WishListPropertyHorizontalScrollView({ list, navigation }) {
  return (
    <View style={[styles.scrollView]}>
      <ScrollView horizontal 
        style={[styles.sideScroll, ]}
      >
        {list.map((property, index) => (
          <TouchableNativeFeedback
            key={index}
            style={{ marginHorizontal: 5, paddingBottom:10 }}
            // onPress={() =>
            //   navigation.navigate(routes.HotelList, { hotels: property.data })
            // }
          >
            <WishListPropertyCard
              image={property.image}
              label={property.label}
              horizontalScroll
              marginNone
            />
          </TouchableNativeFeedback>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  // scrollView: {
  //   paddingVertical: 20,
  //   marginVertical: 20,
  // },
  // sideScroll: {
  //   marginHorizontal: 20,
  // },
});
