import React from "react";
import { Pressable, View, Text, StyleSheet } from "react-native";

const FilterCar = ({ setFilteredVehicles, vehicles }) => {
  const options = ["All", "Suv", "Sedan", "Mpv", "Hatchback"];

  const filterVehicles = (option) => {
    if (option == "All") return setFilteredVehicles(vehicles);
    const lowercasedKeyword = option.toLowerCase();
    const results = vehicles.filter((vehicle) => {
      return vehicle.type.toLowerCase().includes(lowercasedKeyword);
    });
    if (results) setFilteredVehicles(results);
  };

  return (
    <View style={styles.typesSection}>
      {options.map((option) => {
        return (
          <Pressable
            style={styles.typeButton}
            key={option}
            onPress={() => {
              filterVehicles(option);
            }}
          >
            <Text style={styles.typesText}>{option}</Text>
          </Pressable>
        );
      })}
    </View>
  );
};

export default FilterCar;

const styles = StyleSheet.create({
  typesSection: {
    marginTop: 15,
    flexDirection: "row",
  },
  typesTextActive: {
    fontSize: 15,
    marginRight: 34,
    fontWeight: "bold",
    color: "black",
  },
  typesText: {
    fontSize: 15,
    marginRight: 33,
    fontWeight: "500",
    color: "#696969",
  },
});
