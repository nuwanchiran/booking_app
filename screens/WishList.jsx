import React, { useState } from "react";
import { StyleSheet, TouchableNativeFeedback, View } from "react-native";
import {ScrollView} from "react-native-gesture-handler"
import colors from "../config/colors";
import AppText from "../common/AppText";
import testWishlist from "../dataset/testWishList";
import Screen from "../components/Screen";
import WishListPropertyHorizontalScrollView from "../components/WishListPropertyHorizontalScrollView";

export default function WishList({ navigation }) {
  const[wishlist,setWishlist] = useState(testWishlist)
  return (
              <Screen navigation={navigation}title="Wish lists">
                <ScrollView style={styles.scrollView}>
                  {wishlist && wishlist.map( (value, index) =>(
                    <WishListItem 
                      key={index}
                      name={value.name} 
                      count={value.properties.length}
                      properties={value.properties}
                      index={index}
                      navigation={navigation}
                      // clearWishListItem={(index)=> setWishlist(wishlist.filter((v,i) => i !== index))}
                    />
                    ))
                  }{
                    (wishlist.length === 0) &&  
                    <AppText>
                        Your wishlist is empty. The properties which you add to wishlist will be displayed here
                      </AppText>
                  }
                </ScrollView>
              </Screen>
      );
}


const WishListItem = ( {name, count, properties, navigation, index} ) => {
  const wishListItemStyles = StyleSheet.create({
      wishListItem:{
        backgroundColor:colors.white,
        height:300,
        padding:15,
        marginTop:10,
        marginBottom:10,
        marginHorizontal:10,
        borderRadius:10,
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
        shadowRadius:10,
        elevation: 4,
      },
      wishListItemTopLeveler:{
        width:"100%",
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        // justifyContent: 'center',
        alignItems: 'center',
      },
      wishListItemMidLeveler:{
        display: 'flex',
        flexDirection: 'column',
        // justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 10,
      },
      name:{
        textAlign: "center",
        marginTop:3,
        marginBottom:3,
        fontSize:25,
        fontWeight: "bold",
        color: colors.primary
      },
      propertyCount:{
        textAlign: "center",
        marginTop:3,
        marginBottom:3,
        fontSize:14,
        fontWeight: "bold",
        color: colors.medium
      },
      propertyList:{
        marginBottom:2,
        height:300
        // backgroundColor:colors.medium,
      }
      
  })

  return (
    <View style={wishListItemStyles.wishListItem}>
      <View style={wishListItemStyles.wishListItemTopLeveler}>
          <AppText
            style={wishListItemStyles.name}
          >
            {name}
          </AppText>
          <AppText
            style={wishListItemStyles.propertyCount}
          >
            {count} properties saved
          </AppText>
      </View>
      <View style={wishListItemStyles.wishListItemMidLeveler}>
      <ScrollView style={wishListItemStyles.propertyList}>
          <WishListPropertyHorizontalScrollView
            list={properties}
            navigation={navigation}
          />
        </ScrollView>
      </View>
    </View>
   )
}

const styles = StyleSheet.create({

  title:{
    fontSize:30, 
    textAlign: "left",
    color: colors.primary
  },  
 
});
