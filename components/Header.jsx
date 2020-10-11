import React, { useState } from "react";
import { StyleSheet, Text, View, Button } from "react-native";

import colors from "../config/colors";
import { AntDesign } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import AppText from "../common/AppText";
import {
  TouchableNativeFeedback,
  TouchableOpacity,
} from "react-native-gesture-handler";
import NotificationsDialog from "./dialogs/NotificationsDialog"
import SimplePopupMenu from 'react-native-simple-popup-menu'
import { Dialog } from "react-native-simple-dialogs";
import testNotifications from "../dataset/testNotifications";

const iconSize = 20;
const iconColor = colors.white;

export default function Header({ navigation, title, goBack }) {

  const [notificationsDialog, setNotificationsDialog] = useState(false)
  const [chatDialog, setChatDialog] = useState(false)
  const [threeDotsDialog, setThreeDotsDialog] = useState(false)

  const items = [
    { id: 'Language', label: 'Language' },
    { id: 'Currency', label: 'Currency' },
    { id: 'Contact Customer Service', label: 'Contact Customer Service' },
    { id: 'Sign out', label: 'Sign out' },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.navLogo}>
        {goBack ? (
          <TouchableOpacity
            style={styles.icon}
            onPress={() => navigation.goBack()}
          >
            <Ionicons
              name='ios-arrow-round-back'
              size={iconSize + 15}
              color={iconColor}
            />
          </TouchableOpacity>
        ) : (
            <TouchableOpacity
              style={styles.icon}
              onPress={() => navigation.openDrawer()}
            >
              <Feather name='menu' size={30} color={iconColor} />
            </TouchableOpacity>
          )}
        <AppText style={styles.title}>
          {title ? (
            title
          ) : (
              <React.Fragment>
                Booking
                <AppText style={{ color: colors.secondary }}>.com</AppText>
              </React.Fragment>
            )}
        </AppText>
      </View>
      <View style={styles.navSideIcons}>
        <TouchableOpacity
          onPress={() => setChatDialog(true)}
        >

          <View>
            <Dialog
              visible={chatDialog}
              title="Chat"
              onTouchOutside={() => setChatDialog(false)}
            >
              {testNotifications && testNotifications.map((value, index) => (
                <AppText
                  style={{ margin: 10 }}
                  key={index}
                >
                  {value.desc}
                </AppText>
              ))
              }
            </Dialog>
          </View>
          <MaterialCommunityIcons
            name='chat-outline'
            size={iconSize}
            color={iconColor}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => { setNotificationsDialog(true) }}
        >
          <View>
            <NotificationsDialog
              showDialog={notificationsDialog}
              hideDialog={() => setNotificationsDialog(false)}
            />
          </View>
          <AntDesign name='bells' size={iconSize} color={iconColor} />
        </TouchableOpacity>
        <TouchableOpacity
        // onPress={() => setThreeDotsDialog(true)}
        >
          <SimplePopupMenu
            items={items}
            style={styles.threeDotsMenu}
            onSelect={(item) => { alert(item.label) }}
            onCancel={() => console.log('onCancel')}>
            <Entypo name='dots-three-vertical' size={iconSize} color={iconColor} />
          </SimplePopupMenu>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 60,
    display: "flex",
    flexDirection: "row",
    backgroundColor: colors.primary,
    justifyContent: "space-between",
    padding: 20,
    alignItems: "center",
  },
  icon: {
    height: "100%",
    width: 30,
  },
  title: {
    height: "100%",
    color: colors.white,
    fontSize: 22,
    marginLeft: 30,
  },
  navSideIcons: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    width: "30%",
  },
  navLogo: {
    display: "flex",
    flexDirection: "row",
  },
  threeDotsMenu: {
    paddingRight: 5
  }
});
