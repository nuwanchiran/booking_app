import React, { useState } from "react";
import { StyleSheet, TouchableNativeFeedback, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler"
import colors from "../../config/colors";
import AppText from "../../common/AppText";
import { Dialog } from "react-native-simple-dialogs";
import testNotifications from "../../dataset/testNotifications";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const notifi_types = require("../../config/params").default.notifi_types

export default function NotificationsDialog({ navigation, showDialog, hideDialog }) {
  const [notifications, setNotifications] = useState(testNotifications)
  return (
    <Dialog
      dialogStyle={styles.dialog}
      titleStyle={styles.title}
      visible={showDialog}
      title="Notifications"
      onTouchOutside={() => hideDialog()}
    >
      <ScrollView style={styles.scrollView}>
        {notifications && notifications.map((value, index) => (
          <NotificationItem
            key={index}
            title={value.title}
            desc={value.desc}
            date={value.date}
            type={value.type}
            index={index}
            clearNotification={(index) => setNotifications(notifications.filter((v, i) => i !== index))}
          />
        ))
        }{
          (notifications.length === 0) &&
          <AppText>
            No notifications
          </AppText>
        }
      </ScrollView>
    </Dialog>
  );
}


const NotificationItem = ({ title, desc, date, type, clearNotification, index }) => {
  const notificationStyles = StyleSheet.create({
    notificationItem: {
      backgroundColor: "#E3E3E3",
      padding: 8,
      marginBottom: 10,
      borderRadius: 10,
      display: 'flex',
      flexDirection: 'column',
      // justifyContent: 'center',
      alignItems: 'center',
      shadowColor: colors.light,
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 10,
      elevation: 3,
    },
    notifiTopLeveler: {
      width: "100%",
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      // justifyContent: 'center',
      alignItems: 'center',
    },
    notifiMidLeveler: {
      display: 'flex',
      flexDirection: 'column',
      // justifyContent: 'center',
      alignItems: 'center',
      marginVertical: 10,
    },

    typeLabel: {
      backgroundColor:
        type === notifi_types.INFO ? colors.secondary
          : type === notifi_types.TIP ? "tomato"
            : type === notifi_types.MESSAGE ? "green" : colors.medium
      ,
      paddingHorizontal: 10,
      paddingVertical: 5,
      marginHorizontal: 0,
      fontSize: 15,
      width: 90,
      borderRadius: 15,
      color: colors.white,
      textAlign: "center",
    },
    dateLabel: {
      paddingHorizontal: 10,
      paddingVertical: 5,
      marginHorizontal: 0,
      width: 100,
      borderRadius: 15,
      color: colors.medium,
      textAlign: "center",
    },
    notificationText: {
      textAlign: "center",
      marginTop: 3,
      marginBottom: 3,
      fontWeight: "bold",
      color: colors.primary
    },
    notificationDesc: {
      textAlign: "center",
      fontSize: 15,
      color: colors.medium,
    }
  })

  return (
    <View style={notificationStyles.notificationItem}>
      <View style={notificationStyles.notifiTopLeveler}>
        <AppText
          style={notificationStyles.typeLabel}
        >
          {type}
        </AppText>
        <AppText
          style={notificationStyles.dateLabel}
        >
          {date}
        </AppText>
        <TouchableNativeFeedback
          onPress={() => clearNotification(index)}
        >
          <MaterialCommunityIcons
            name={"close"}
            size={20}
            color={colors.medium}
          />
        </TouchableNativeFeedback>

      </View>
      <View style={notificationStyles.notifiMidLeveler}>
        <AppText style={notificationStyles.notificationText}>
          {title}
        </AppText>
        <AppText style={notificationStyles.notificationDesc}>
          {desc}
        </AppText>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  dialog: {
    padding: 0,
    margin: 0,
    backgroundColor: colors.light,
    borderRadius: 10,
    maxHeight: "90%"
  },
  title: {
    fontSize: 30,
    textAlign: "left",
    color: colors.primary
  },
  notificationsPanel: {
    backgroundColor: "rgba(0,0,0,0.8)",
    borderRadius: 10,
    paddingVertical: 40,
  },
  scrollView: {
    maxHeight: "95%",
  }
});
