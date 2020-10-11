import React from "react";
import { Image, StyleSheet, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import AppButton from "../common/AppButton";
import AppText from "../common/AppText";
import Card from "../common/Card";
import Map from '../common/Map';
import Screen from "../components/Screen";
import colors from "../config/colors";
import routes from "../navigations/routes";


export default function HotelDetails({ navigation, route }) {
  const { hotel } = route.params;
  const { title, image, price, rating, reviews, description, address, latitude, longitude, rooms } = hotel;
  return (
    <Screen navigation={navigation} title='Hotel Details' goBack>
      <ScrollView styles={styles.details}>
        <Image style={styles.image} source={image} />
        <Card
          title={title}
          price={price}
          rating={rating}
          reviews={reviews.length}
        />
        <AppButton
            title="Select rooms"
            color="primary"
            icon="export"
            iconColor="light"
            borderRadius={0}
            style={styles.roomsButton}
            width="100%"
            onPress={()=> { navigation.navigate(routes.RoomList,{rooms: rooms}) }}
        />
        <Card title='Description' subTitle={description} />
        <Card title='Address' subTitle={address} />

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
    </Screen>
  );
}

const styles = StyleSheet.create({
  details:{
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "red"
  },  
  image: {
    flex: 1,
    width: "100%",
    height: 320,
  },
  roomsButton:{
    width: "100%",
    height: 320, 
    margin:10
  }
});
