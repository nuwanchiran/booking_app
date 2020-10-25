import React, { useState } from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native'
import AppButton from '../common/AppButton'
import AppText from '../common/AppText'
import AppTextInput from '../common/AppTextInput'
import Card from '../common/Card'
import Screen from '../components/Screen'
import colors from '../config/colors'
import AwesomeAlert from 'react-native-awesome-alerts';

export default function QuestionsAdd({ navigation }) {
  const [text, setText] = useState('')
  const [alert, setAlert] = useState(false)

  return (
    <Screen navigation={navigation} title="Ask the question" goBack>
      <ScrollView>
        <AwesomeAlert
          show={alert}
          showProgress={false}
          title="Alert"
          message={text !== '' ? "Message sent successfully" : "Please fill the form and resubmit"}
          closeOnTouchOutside={true}
          closeOnHardwareBackPress={false}
          showConfirmButton={true}
          confirmText="ok"
          confirmButtonColor={text !== '' ? "green" : "#DD6B55"}
          onConfirmPressed={() => {
            setAlert(false)
            setText('')
          }}
        />
        <View style={styles.container}>
          <Card marginNone height={120} logo={require('../assets/icon.png')} title="Message customer service" subTitle="We think out agents are the best people to help you" rowMode />
          <AppTextInput height={200} placeholder="Tell us, what you want" value={text} onChange={({ target }) => setText(target.value)} />
          <AppText style={styles.disableDiv}>nuwanchiran@gmail.com</AppText>
          <View style={{ marginHorizontal: 20, marginTop: 80, marginBottom: 20 }}>
            <AppButton
              opacity
              title='Ask a question'
              color='primary'
              icon='comment-question-outline'
              iconColor='light'
              onPress={() => setAlert(true)}
            />
          </View>
        </View>
      </ScrollView>
    </Screen>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingVertical: 40
  },
  disableDiv: {
    padding: 15,
    marginVertical: 10,
    width: "100%",
    fontSize: 16,
    color: colors.medium,
    textAlign: 'center',
    backgroundColor: colors.light,
    borderRadius: 15,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 3,
  }
})
