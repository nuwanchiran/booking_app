import React from "react";
import { Image, StyleSheet, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import AppText from "../common/AppText";
import Card from "../common/Card";
import Map from "../common/Map";
import Screen from "../components/Screen";
import colors from "../config/colors";
import AppButton from "../common/AppButton";
import routes from "../navigations/routes";

export default function HotelDetails({ navigation, route }) {
  const { hotel } = route.params;
  const {
    title,
    image,
    price,
    rating,
    reviews,
    description,
    address,
    latitude,
    longitude,
  } = hotel;
  return (
    <Screen navigation={navigation} title="Hotel Details" goBack>
      <ScrollView styles={styles.details}>
        <Image style={styles.image} source={image} />
        <Card
          title={title}
          price={price}
          rating={rating}
          reviews={reviews.length}
        />

        <Card title="Description" subTitle={description} />
        <Card title="Address" subTitle={address} />

        <Map latitude={latitude} longitude={longitude} />

        <View style={{ backgroundColor: "#ddd" }}>
          <AppText
            style={{
              color: colors.secondary,
              paddingHorizontal: 20,
              paddingVertical: 10,
            }}
          >
            {reviews.length} Reviews
          </AppText>
          {reviews.map((r, i) => (
            <Card key={i} title={r.user} subTitle={r.review} />
          ))}
        </View>
      </ScrollView>
      <View style={styles.formContainer}>
        <AppButton
          title="Book Hotel"
          color="primary"
          onPress={() => navigation.navigate(routes.HotelFillInfo)}
        />
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  image: {
    flex: 1,
    width: "100%",
    height: 320,
  },
  formContainer: {
    paddingHorizontal: 30,
    paddingVertical: 5,
    position: "absolute",
    bottom: 0,
    width: "100%",
    backgroundColor: "#fff",
  },
});
