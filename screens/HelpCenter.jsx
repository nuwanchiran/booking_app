import React from "react";
import Screen from "../components/Screen";
import { FlatList, View } from "react-native";
import CategoryIcon from "../common/CategoryIcon";
import helpCenter from "../dataset/helpCenter";
import routes from '../navigations/routes';
import AppButton from '../common/AppButton';

export default function CustomerService({ navigation }) {
  return (
    <Screen navigation={navigation} title='Help Center' >
      <FlatList
        data={helpCenter}
        keyExtractor={({ label }) => label.toString()}
        numColumns={3}
        renderItem={({ item }) => (
          <CategoryIcon name={item.name} label={item.label} onPress={() => navigation.navigate(routes.Questions, { qa: item.qa })} />
        )}
      />
      <View style={{ marginHorizontal: 20, marginVertical: 10 }}>
        <AppButton
          opacity
          title='Ask a question'
          color='primary'
          icon='comment-question-outline'
          iconColor='light'
          onPress={() => navigation.navigate(routes.QuestionsAdd)}
        />
      </View>
    </Screen>
  );
}