import React from "react";

import Screen from "../components/Screen";
import { StyleSheet, FlatList } from "react-native";
import CategoryIcon from "../common/CategoryIcon";
import helpCenterCategories from "../dataset/helpCenterCategories";

export default function CustomerService({ navigation }) {
  return (
    <Screen navigation={navigation} title='Help Center'>
      <FlatList
        data={helpCenterCategories}
        keyExtractor={({ label }) => label.toString()}
        numColumns={3}
        renderItem={({ item }) => (
          <CategoryIcon name={item.name} label={item.label} />
        )}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 25,
  },
});
