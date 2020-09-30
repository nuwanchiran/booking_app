import React, { Component } from "react";
import { Button, Text, StyleSheet, View } from "react-native";
import Screen from "../components/Screen";
import CarResult from "../components/CarRental/CarResult";
import SearchCarComponent from "../components/CarRental/SearchCarComponent";
import CarRentals from "./CarRentals";
import SelectedCar from "./SelectedCar";
import HotelOrCarSelectorCard from "../components/cards/HotelOrCarSelectorCard";
import FilterSortByComponent from "../components/CarRental/FilterSortByComponent";
import { ScrollView } from "react-native-gesture-handler";

export default class CarSearchResults extends Component {
  constructor(props) {
    super();
    this.state = {};
  }

  render() {
    return (
      <Screen navigation={this.props.navigation}>
        <HotelOrCarSelectorCard type={"car"} />
        <FilterSortByComponent navigation={this.props.navigation} />

        {/* <Button
          onPress={() => this.props.navigation.navigate("FilterCars")}
          title="Filter"
        /> */}
        <ScrollView>
          <CarResult
            navigation={this.props.navigation}
            image={
              "https://firebasestorage.googleapis.com/v0/b/ueeproject-63bc8.appspot.com/o/images%2Fcars%2Fbmw%2Fbmw1.jpg?alt=media&token=59ee2db3-92b0-46f0-8cce-40368ccbc1a7"
            }
            driverPhoto={
              "https://firebasestorage.googleapis.com/v0/b/ueeproject-63bc8.appspot.com/o/images%2Fdriver%2Fdriver1.jpg?alt=media&token=2e801479-eba9-4975-93fa-ddd6c7cafe7e"
            }
            companyLogo={
              "https://firebasestorage.googleapis.com/v0/b/ueeproject-63bc8.appspot.com/o/images%2FcompanyLogos%2Fkangaroo.jpg?alt=media&token=718fefce-369f-4423-bfbd-18d722806cf0"
            }
            initialPassengerArr={[{}, {}, {}]}
            initialLuggageArr={[{}, {}]}
            carName={"BMW 3 Series"}
            carRating={"9.0/10"}
            driverName={"Mr. Perera"}
            driverRating={4}
            price="20.23"
          />

          <CarResult
            navigation={this.props.navigation}
            image={
              "https://firebasestorage.googleapis.com/v0/b/ueeproject-63bc8.appspot.com/o/images%2Fcars%2Faudi%2Fetron1.jpg?alt=media&token=a9eade27-8042-419f-bb30-df64e4f70883"
            }
            driverPhoto={
              "https://firebasestorage.googleapis.com/v0/b/ueeproject-63bc8.appspot.com/o/images%2Fdriver%2Fdriver2.jpg?alt=media&token=1294332d-b7eb-4ded-b303-8986b959f6b6"
            }
            companyLogo={
              "https://firebasestorage.googleapis.com/v0/b/ueeproject-63bc8.appspot.com/o/images%2FcompanyLogos%2Fyellowcab.jpg?alt=media&token=6b6fe231-dcb8-4620-af87-347e31fcc2b6"
            }
            initialPassengerArr={[{}, {}, {}, {}]}
            initialLuggageArr={[{}, {}]}
            carName={"Audi Etron"}
            carRating={"8.5/10"}
            driverName={"Mr. Silva"}
            driverRating={5}
            price="14.63"
          />
          <CarResult
            navigation={this.props.navigation}
            image={
              "https://firebasestorage.googleapis.com/v0/b/ueeproject-63bc8.appspot.com/o/images%2Fcars%2Ftesla%2FteslaX.jpg?alt=media&token=bfd5da62-ce7d-4969-95fa-6beb5670a4bc"
            }
            driverPhoto={
              "https://firebasestorage.googleapis.com/v0/b/ueeproject-63bc8.appspot.com/o/images%2Fdriver%2Fdriver3.jpg?alt=media&token=7f85b03f-8d80-42b8-b028-fdce8d9b4286"
            }
            companyLogo={
              "https://firebasestorage.googleapis.com/v0/b/ueeproject-63bc8.appspot.com/o/images%2FcompanyLogos%2Fyatri.jpg?alt=media&token=944850de-d9b0-4024-a73e-db01bd298f29"
            }
            initialPassengerArr={[{}, {}, {}]}
            initialLuggageArr={[{}, {}]}
            carName={"Tesla Model X"}
            carRating={"9.5/10"}
            driverName={"Mr. John"}
            driverRating={5}
            price="25.23"
          />
        </ScrollView>
      </Screen>
    );
  }
}

const styles = StyleSheet.create({});
