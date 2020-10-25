import React, { useEffect, useState } from "react";
import { View } from "react-native";
import {
  ScrollView,
  TouchableWithoutFeedback
} from "react-native-gesture-handler";
import AppTextInput from '../common/AppTextInput';
import Card from "../common/Card";
import Screen from "../components/Screen";
import routes from "../navigations/routes";

export default function HotelList({ navigation, route }) {
  const [data, setData] = useState([]);
  const [memory, setMemory] = useState([]);
  // const { hotels } = route.params;
  useEffect(() => {
    setData(route.params.hotels)
    setMemory(route.params.hotels)
  }, [])
  return (
    <Screen navigation={navigation} title='Hotel List' goBack>
      <View style={{ marginHorizontal: 17 }}>
        <AppTextInput
          placeholder='Where are you going?'
          icon='briefcase-search-outline'
          onChangeText={search => {
            const dt = memory.filter((i) => {
              if (JSON.stringify(i).toLocaleLowerCase().indexOf(String(search).toLocaleLowerCase()) !== -1) return i;
            })
            setData(dt)
          }}
        />
      </View>
      <ScrollView style={{ padding: 17 }}>
        {data.map((data, index) => (
          <TouchableWithoutFeedback
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
          </TouchableWithoutFeedback>
        ))}
      </ScrollView>
    </Screen >
  );
}
