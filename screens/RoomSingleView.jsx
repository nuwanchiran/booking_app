import { FontAwesome } from "@expo/vector-icons";
import React, { useEffect, useState } from "react";
import { Image, StyleSheet, View } from "react-native";
import {
  ScrollView,
  TouchableNativeFeedback,
} from "react-native-gesture-handler";
import AppButton from "../common/AppButton";
import AppText from "../common/AppText";
import Card from "../common/Card";
import Screen from "../components/Screen";
import colors from "../config/colors";
import reviews from "../dataset/reviews";
import routes from "../navigations/routes";

export default function RoomSingleView({ navigation, route }) {
  const [data, setData] = useState([]);
  const [memory, setMemory] = useState([]);
  // const { hotels } = route.params;
  useEffect(() => {
    setData(route.params.room)
    setMemory(route.params.room)
  }, [])

  const panel4 = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',

    // borderRadius: 10,
    // backgroundColor: "#ffffff",
    // boxShadow: "inset 8px 8px 27px #d6d6d6, inset -8px -8px 27px #ffffff"
  }

  const facilities = {
    paddingHorizontal:5,
    margin:5,
    padding:5,
    borderRadius: 10,
    backgroundColor:"#EEEEEE",
    shadowColor: "#000",
    shadowOffset: {
      width: -6,
      height: -6,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 0.5,
  }

  return (
    <Screen navigation={navigation} title={data.name} goBack>
      <ScrollView 
        // style={{ padding: 17 }}
        >
          <Image style={styles.image} source={data.image} />
          <TouchableNativeFeedback
            key={99}
            // onPress={() => navigation.navigate(routes.roomDetails, { room: data }) }
          >
            <View
              style={styles.container}
            >
              <AppText
                style={styles.name}
              >
              {data.name}
              </AppText>
              <View style={{margin:5}}>
                <View style={styles.panel1}>
                  <AppText style={styles.offer}>
                  Travel Offer
                  </AppText>
                  <AppText style={styles.price}>
                    Rs.{data.price}
                  </AppText>
                </View>
                <View style={styles.panel2}>
                  <AppText style={{marginHorizontal:15}}>
                    1 night
                  </AppText>
                </View>
                <View style={styles.panel3}>
                  <ServiceItem 
                    desc="2 single beds, 1 extra-large double bed"
                    image="bed"
                  />
                  <ServiceItem 
                    desc="Pay at the property"
                    image="money"
                  />
                </View>
                <View style={styles.panel3}>
                  <ServiceItem 
                    desc="Breakfast included"
                    image="glass"
                  />
                  <ServiceItem 
                    desc="45 m x 45 m         "
                    image="home"
                  />
                </View>
                <View style={styles.panel3}>
                  <ServiceItem 
                    desc="Non- Refundable"
                    image="ban"
                  />
                  <ServiceItem 
                    // desc="2 single beds, 1 extra-large double bed"
                    // image="bed"
                  />
                </View>
                <View style={facilities}>
                  <View style={panel4}>
                    <FacilityItem 
                        desc="Free Wifi"
                        image="wifi"
                        />
                    <FacilityItem 
                      desc="Bath"
                      image="bath"
                      />
                      <FacilityItem 
                      desc="Private Bathroom"
                      image="shower"
                      />       
           
                  </View>
                  <View style={panel4}>
             
                    <FacilityItem 
                      desc="Flat-Screen TV"
                      image="tv"
                      />
                    <FacilityItem 
                      desc="Balcony View         "
                      image="square"
                      />
                    <FacilityItem 
                      desc="Coffee      "
                      image="coffee"
                      />
                  </View>
                </View>
              </View>
              <AppButton
                title="Select"
                color="primary"
                borderRadius={0}
              />
              <AppText style={{fontSize:25, margin:10}}>
                All Facilities
              </AppText>
              <AppText style={{fontSize:23, margin:5, marginLeft:25}}>
                Bedroom
              </AppText>
              <Image style={styles.faciliImg} source={require("../assets/bed.jpg")} />
              <View style={styles.panel1}
              >
                <AppText style={styles.label}>Linen</AppText>
                <AppText style={styles.label}>Wardrobe or Closet</AppText>
              </View>

              <AppText style={{fontSize:23, margin:5, marginLeft:25}}>
                Bathroom
              </AppText>
              <Image style={styles.faciliImg} source={require("../assets/bathroom1.jpg")} />
              <View style={styles.panel1}
              >
                <AppText style={styles.label}>Bathrobe</AppText>
                <AppText style={styles.label}>Body Soap</AppText>
                <AppText style={styles.label}>Conditioner</AppText>

              </View>
            <View style={styles.panel1}
              >
                <AppText style={styles.label}>Slippers</AppText>
                <AppText style={styles.label}>Hairdryer</AppText>
                <AppText style={styles.label}>Shampoo</AppText>
            </View>

              <View style={{ backgroundColor: colors.primary, marginTop:20, 
                    borderTopEndRadius:20,
                    borderTopStartRadius:20,
              }}>
                <AppText
                  style={{
                    color: colors.secondary,
                    paddingHorizontal: 20,
                    paddingVertical: 10,
                    marginVertical:10
                  }}
                >
                  {reviews.length} Reviews
                </AppText>
                {reviews.map((r, i) => (
                  <Card key={i} title={r.user} subTitle={r.review} />
                ))}
              </View>
            </View>
          </TouchableNativeFeedback>
      </ScrollView>
    </Screen >
    );
}

const ServiceItem = (({image, desc})=>{
  const sstyles = StyleSheet.create({
    container:{
      display: 'flex',
      flexDirection: 'row',
      padding:5,
      width: 150,
      justifyContent: 'center',
      alignItems: 'center',
      flexGrow:1
    },
    image:{
      flex: 1,
      color: colors.medium
      // width: 10,
      // height: 50,
    },
    desc:{
      color:colors.medium,
      maxWidth:110,
      textAlign:'left',
      fontSize:16
    }
  })
  return (
    <View style={sstyles.container}>
      <FontAwesome
        name={image}
        size={20}
        style={sstyles.image}
        />
      <AppText style={sstyles.desc}>
        {desc}
      </AppText>
    </View>
    )
  })
  
  
  const FacilityItem = (({image, desc})=>{
    const fstyles = StyleSheet.create({
      container:{
        display: 'flex',
        flexDirection: 'column',
        padding:5,
      // width: 150,
      justifyContent: 'center',
      alignItems: 'center',
      flexGrow:1, 

    },
    image:{
      flex: 1,
      color: colors.medium
      // width: 10,
      // height: 50,
    },
    desc:{
      color:colors.medium,
      maxWidth:80,
      fontSize:15
    }
  })
  return (
    <View style={fstyles.container}>
      <FontAwesome
        name={image}
        size={20}
        style={fstyles.image}
      />
      <AppText style={fstyles.desc}>
        {desc}
      </AppText>
    </View>
    )
})

const styles = StyleSheet.create({
  container:{
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: colors.white,
    flex: 1,
    // borderRadius: 15,
    marginTop: 5,
  },
  image: {
    flex: 1,
    width: "100%",
    height: 150,
  },
  imageCover:{
    marginBottom:5,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 2,
  },
  name:{
    color: colors.black,
    // fontWeight: "bold",
    // paddingVertical: 20,
    fontSize:40, 
    paddingLeft:10
  },
  panel1:{
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
  },
  panel2:{
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    justifyContent:"flex-end"
  },
  panel3:{
    display: 'flex',
    flexDirection: 'row',
    paddingHorizontal:5,
  },
  panel4:{
    
  },
  offer: {
    backgroundColor: "#ffd700",
    paddingVertical: 5,
    marginTop: 10,
    marginLeft: 10,
    width: 120,
    height:35,
    borderRadius: 15,
    fontSize:20,
    color: colors.primary,
    textAlign: "center",
  },
  price:{
    marginTop: 10,
    marginLeft: 30,
    fontSize:30,
    width: 150,
    borderRadius: 15,
    // fontWeight: "bold",
    color: colors.secondary,
    textAlign: "center",
  },
  faciliImg:{
    flex: 1,
    width: "auto",
    height: 160,
    borderRadius:10,
    marginHorizontal:20,
    marginVertical:10,

  },
  label: {
    backgroundColor: colors.secondary,
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginVertical: 2,
    fontSize:15,
    // marginHorizontal: 10,
    width: "auto",
    borderRadius: 15,
    color: colors.white,
    textAlign: "center",
    marginLeft:20
  },
})