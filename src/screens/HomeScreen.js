import React, { useState } from "react";
import { FlatList } from "react-native";
import { Image, SafeAreaView, StyleSheet, Text, View } from "react-native";
import CarCard from "../components/CarCard";
import SearchCar from "../components/SearchCar";
import { useSelector } from "react-redux";
const menu = require("../assets/icons/menu.png");
const face = require("../assets/face.png");
import data from "../dataset/vehicles.json";
import FilterCar from "../components/FilterCar";

const HomeScreen = ({ navigation }) => {
  const [vehicles, setVehicles] = useState(data.vehicles);
  const [filteredVehicles, setFilteredVehicles] = useState(data.vehicles);
  const theme = useSelector((state) => state.theme.theme);

  return (
    <SafeAreaView
      style={{ ...styles.safeArea, backgroundColor: theme.backgroundColor }}
    >
      <View style={styles.container}>
        <View style={styles.headerSection}>
          <Image
            source={menu}
            resizeMode="contain"
            style={{ ...styles.menuIconStyle, tintColor: theme.textColor }}
          />
          <Image
            source={face}
            resizeMode="contain"
            style={styles.faceIconStyle}
          />
        </View>

        <View style={styles.titleSection}>
          <Text style={{ ...styles.title, color: theme.textColor }}>
            Rent a Car
          </Text>
        </View>
        <SearchCar
          setFilteredVehicles={setFilteredVehicles}
          vehicles={vehicles}
        />
        <FilterCar
          setFilteredVehicles={setFilteredVehicles}
          vehicles={vehicles}
        />

        <SafeAreaView style={styles.listSection}>
          <Text style={{ ...styles.headText, color: theme.textColor }}>
            Most Rented
          </Text>
          <FlatList
            data={filteredVehicles}
            style={styles.elementPallet}
            renderItem={({ item }) => (
              <CarCard item={item} navigation={navigation} />
            )}
          ></FlatList>
        </SafeAreaView>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#e7e7e7",
  },
  container: {
    flex: 1,
    paddingRight: 35,
    paddingLeft: 35,
  },
  headerSection: {
    height: 70,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  menuIconStyle: {
    width: 30,
  },
  faceIconStyle: {
    width: 40,
  },

  titleSection: {
    marginTop: 15,
  },
  title: {
    fontSize: 32,
    fontWeight: "600",
  },
  listSection: {
    marginTop: 25,
  },
  headText: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  elementPallet: {
    marginLeft: -15,
    paddingLeft: 15,
    paddingRight: 15,
    width: "110%",
    height: 450,
  },
});
