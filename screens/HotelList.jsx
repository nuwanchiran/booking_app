import React from "react";
import { StyleSheet, Text, View } from "react-native";
import {
  ScrollView,
  TouchableNativeFeedback,
} from "react-native-gesture-handler";
import Card from "../common/Card";
import Screen from "../components/Screen";
import routes from "../navigations/routes";

export default function HotelList({ navigation, route }) {
  const { hotels } = route.params;
  return (
    <Screen navigation={navigation} title='Hotel List' goBack>
      <ScrollView style={{ padding: 17 }}>
        {hotels.map((data, index) => (
          <TouchableNativeFeedback
            style={{ marginVertical: 10, padding: 3 }}
            key={index}
            onPress={() =>
              navigation.navigate(routes.HotelDetails, { hotel: data })
            }
          >
            <Card
              image={data.image}
              title={data.title}
              subTitle={data.subTitle}
              price={data.price}
              reviews={data.reviews.length}
              rating={data.rating}
              marginNone
            />
          </TouchableNativeFeedback>
        ))}
      </ScrollView>
    </Screen>
  );
}
