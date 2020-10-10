import React, { useState } from "react";
import { StyleSheet, ImageBackground, View, ScrollView } from "react-native";
import Screen from "../Screen";
import colors from "../../config/colors";
import AppText from "../../common/AppText";
import AppButton from "../../common/AppButton";
import listYourPropertyBenfitsData from "../../dataset/listYourPropertyBenfitsData";
import { MaterialIcons} from "@expo/vector-icons";
import { Dialog } from "react-native-simple-dialogs";

export default function NotificationsDialog({ navigation , showDialog , hideDialog}) {

    const NotificationItem = ( {benefit} ) => {
        const notificationStyles = StyleSheet.create({
            notificationItem:{
                display: 'flex',
                flexDirection: 'row',
                // justifyContent: 'center',
                alignItems: 'center',
                padding:10
            },
            notificationIcon:{
                flex:1,
                padding:5,
                backgroundColor: 'gold',
                borderRadius:50,
                marginRight:10
            },
            notificationText:{
                flex:10,
                fontSize:20,
                color:colors.white
            }
        })

        return (<View style={notificationStyles.benefitItem}>
                <MaterialIcons
                    style={notificationStyles.benefitIcon}
                    name="done"
                    size={25}
                    color={colors.medium}
                />
                <AppText style={notificationStyles.benefitText}>
                {benefit}
                </AppText>
            </View>)
    }

  return (
          <Dialog
              dialogStyle={styles.dialog}
              titleStyle={styles.title}
              visible={showDialog}
              title="Notifications"
              onTouchOutside={() => hideDialog() }
              >
              <View>
                <ScrollView>
                  <AppText style={styles.titleDesc}>
                    Homes, hotels, and everything between. Whatever it is, you can list it.
                  </AppText>
                  {listYourPropertyBenfitsData && listYourPropertyBenfitsData.map( (value, index) =>(
                    <NotificationItem benefit={value} key={index}/>
                    ))}`
                  </ScrollView>
              </View>
          </Dialog>
);
}

const styles = StyleSheet.create({
  dialog:{
    padding:0,
    margin:0,
    backgroundColor: colors.light,
    borderRadius:10
   },
  title:{
    fontSize:40, 
    textAlign: "left",
    color: colors.white,
    backgroundColor: colors.primary
  },  
  titleDesc:{
    fontSize:20, 
    textAlign: "center",
    paddingBottom:25,
    color: colors.black,
  },  
  image: {
    flex: 1,
    resizeMode: "cover",
    height: "100%",
    justifyContent: "flex-end",
  },
  notificationsPanel:{
    backgroundColor: "rgba(0,0,0,0.8)",
    borderRadius:10,
    paddingVertical:40
  }
});
