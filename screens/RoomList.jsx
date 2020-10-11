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
import routes from "../navigations/routes";

export default function RoomList({ navigation, route }) {
  const [data, setData] = useState([]);
  const [memory, setMemory] = useState([]);
  // const { hotels } = route.params;
  useEffect(() => {
    setData(route.params.rooms)
    setMemory(route.params.rooms)
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
    <Screen navigation={navigation} title='Rooms List' goBack>
      <ScrollView 
        style={{ padding: 17 }}
        >
        {data.map((data, index) => (
          <TouchableNativeFeedback
            key={index}
            onPress={() => navigation.navigate(routes.RoomSingleView, { room: data }) }
          >
            <View
              style={styles.container}
            >
              <AppText
                style={styles.name}
              >
              {data.name}
              </AppText>
              <View style={styles.imageCover}>
                <Image style={styles.image} source={data.image} />
              </View>
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
                // onPress={() => 
                // }
              />
            </View>
          </TouchableNativeFeedback>
        ))}
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
    borderRadius: 15,
    marginVertical: 5,
    paddingBottom:10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 2,
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
    paddingVertical: 20,
    fontSize:25, 
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
    fontSize:40,
    width: 150,
    borderRadius: 15,
    // fontWeight: "bold",
    color: colors.secondary,
    textAlign: "center",
  },
 
})