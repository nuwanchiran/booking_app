import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import Card from '../common/Card'
import Screen from '../components/Screen'

export default function Questions({ navigation, route }) {
  const { qa } = route.params
  return (
    <Screen title="Q&A" navigation={navigation} goBack>
      <ScrollView>
        {qa.map((d, i) => <Card key={i} title={d.question} subTitle={d.answer} />)}
      </ScrollView>
    </Screen>
  )
}

const styles = StyleSheet.create({})
