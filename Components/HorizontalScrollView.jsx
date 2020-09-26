import React from "react";
import colors from "../config/colors";
import AppText from "../common/AppText";
import { AntDesign } from "@expo/vector-icons";
import { StyleSheet, View } from "react-native";
import {
  ScrollView,
  TouchableNativeFeedback,
} from "react-native-gesture-handler";
import Card from "../common/Card";
import routes from "../navigations/routes";

export default function HorizontalScrollView({ title, list, navigation }) {
  return (
    <View style={[styles.scrollView, { backgroundColor: colors.scroll }]}>
      <AppText
        style={{
          color: colors.white,
          paddingLeft: 20,
          paddingBottom: 10,
        }}
      >
        {title}
        <AntDesign name='arrowright' size={18} color={colors.light} />
      </AppText>
      <ScrollView
        horizontal
        style={[styles.sideScroll, { backgroundColor: colors.scroll }]}
      >
        {list.map((area, index) => (
          <TouchableNativeFeedback
            key={index}
            style={{ marginHorizontal: 10 }}
            onPress={() =>
              navigation.navigate(routes.HotelList, { hotels: area.data })
            }
          >
            <Card
              image={area.image}
              label={area.label}
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
  scrollView: {
    paddingVertical: 20,
    marginVertical: 20,
  },
  sideScroll: {
    marginHorizontal: 20,
  },
});
