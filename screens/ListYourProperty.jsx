import React, { useState } from "react";
import { StyleSheet, ImageBackground, View, ScrollView } from "react-native";
import Screen from "../components/Screen";
import colors from "../config/colors";
import AppText from "../common/AppText";
import AppButton from "../common/AppButton";
import listYourPropertyBenfitsData from "../dataset/listYourPropertyBenfitsData";
import { MaterialIcons} from "@expo/vector-icons";

export default function ListYourProperty({ navigation }) {

    const BenefitItem = ( {benefit} ) => {
        const benefitStyles = StyleSheet.create({
            benefitItem:{
                display: 'flex',
                flexDirection: 'row',
                // justifyContent: 'center',
                alignItems: 'center',
                padding:10
            },
            benefitIcon:{
                flex:1,
                padding:5,
                backgroundColor: 'gold',
                borderRadius:50,
                marginRight:10
            },
            benefitText:{
                flex:10,
                fontSize:20,
                color:colors.white
            }
        })

        return (<View style={benefitStyles.benefitItem}>
                <MaterialIcons
                    style={benefitStyles.benefitIcon}
                    name="done"
                    size={25}
                    color={colors.medium}
                />
                <AppText style={benefitStyles.benefitText}>
                {benefit}
                </AppText>
            </View>)
    }

  return (
    <Screen topBarHidden>
      <ImageBackground
        source={require("../assets/listyourProperty_bg.jpg")}
        style={styles.image}
      >
        <ScrollView>
          <View style={styles.homeContainer}>
          <View style={styles.benefitsPanel}>

            <AppText style={styles.title}>
                List  your place in 
                <React.Fragment>
                  <AppText style={[styles.title, { fontWeight: "bold"} ] }>
                    {" "}Booking.com 
                  </AppText>
                </React.Fragment>
            </AppText>

            <AppText style={styles.titleDesc}>
                Homes, hotels, and everything between. Whatever it is, you can list it.
            </AppText>

              {listYourPropertyBenfitsData && listYourPropertyBenfitsData.map( (value, index)=>(
                  <BenefitItem benefit={value} key={index}/>
              ))}
          </View>
          <AppButton
              title='List your property'
              color='primary'
              iconColor='light'
              onPress={() =>  alert('Listing your property ')}
          />
        </View>
        </ScrollView>
      </ImageBackground>
    </Screen>
  );
}

const styles = StyleSheet.create({
  title:{
    fontSize:40, 
    textAlign: "center",
    paddingBottom:25,
    color: colors.white,
  },  
  titleDesc:{
    fontSize:20, 
    textAlign: "center",
    paddingBottom:25,
    color: colors.light,
  },  
  homeContainer: {
    paddingHorizontal: 20,
    paddingVertical: 40,
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    height: "100%",
    justifyContent: "flex-end",
  },
  benefitsPanel:{
    backgroundColor: "rgba(0,0,0,0.8)",
    borderRadius:10,
    paddingVertical:40
  }
});
