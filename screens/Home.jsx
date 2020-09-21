import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import Card from "../common/Card";
import Screen from "../components/Screen";

const data = [
  { user: "lskadjfl", review: "sadjfklasdhfj" },
  { user: "lskadjfl", review: "sadjfklasdhfj" },
  { user: "lskadjfl", review: "sadjfklasdhfj" },
];
export default function Home({ navigation }) {
  return (
    <Screen navigation={navigation}>
      <ScrollView>
        {/* <Text>Home</Text>
        <Button
          onPress={() => navigation.navigate("GiftCard")}
          title='Go to GiftCard screen'
        />
        <Button
          onPress={() => navigation.navigate("HotelList")}
          title='Hotel List'
        /> */}
        <Card image={require("../assets/bed.jpg")} label='Double bed' />
        <Card
          image={require("../assets/bed.jpg")}
          title='Double bed'
          subTitle='sdafjhkadsjfhk lkdsfbhdaskfj kaklasdfjhtk asdfhkjsdaflsdkafjlhsd  sdafhjklasdfsdf adshfhasdjkfasd'
          price={12000}
          rating={4.5}
          reviews={29}
        />
        <Card
          image={require("../assets/bed.jpg")}
          title='Double bed'
          subTitle='sdafjhkadsjfhk lkdsfbhdaskfj kaklasdfjhtk asdfhkjsdaflsdkafjlhsd  sdafhjklasdfsdf adshfhasdjkfasd'
          price={12000}
          rating={4.5}
          reviews={29}
          rowMode
        />
        <Card title='Double bed' price={12000} rating={4.5} reviews={29} />
        <Card
          image={require("../assets/bed.jpg")}
          title='Double bed'
          price={12000}
          rowMode
        />
        <Card
          title='Double bed'
          subTitle='sdafjhkadsjfhk lkdsfbhdaskfj kaklasdfjhtk asdfhkjsdaflsdkafjlhsd  sdafhjklasdfsdf adshfhasdjkfasd'
        />
        <View style={{ backgroundColor: "#ddd" }}>
          {data.map((r, i) => (
            <Card key={i} title={r.user} subTitle={r.review} />
          ))}
        </View>
      </ScrollView>
    </Screen>
  );
}

const styles = StyleSheet.create({});
