import React from "react";
import { View, Image, TextInput, StyleSheet } from "react-native";
import { useSelector } from "react-redux";
const magnifying_glass = require("../assets/icons/magnifying-glass.png");

const SearchCar = ({ vehicles, setFilteredVehicles }) => {
  const theme = useSelector((state) => state.theme.theme);
  const searchVehicles = (keyword) => {
    const lowercasedKeyword = keyword.toLowerCase();

    const results = vehicles.filter((vehicle) => {
      return (
        vehicle.make.toLowerCase().includes(lowercasedKeyword) ||
        vehicle.model.toLowerCase().includes(lowercasedKeyword)
      );
    });
    if (results) {
      setFilteredVehicles(results);
    }
  };

  return (
    <View style={styles.searchSection}>
      <View
        style={{
          ...styles.searchPallet,
          backgroundColor: theme.secondBackgroundColor,
        }}
      >
        <TextInput
          style={{ ...styles.searchInput, color: theme.textColor }}
          placeholder="Search a Car"
          placeholderTextColor={theme.secondTextColor}
          onChangeText={(text) => searchVehicles(text)}
        />
        <View style={styles.searchIconArea}>
          <Image
            source={magnifying_glass}
            resizeMode="contain"
            style={styles.magnifyingIconStyle}
          />
        </View>
      </View>
    </View>
  );
};

export default SearchCar;

const styles = StyleSheet.create({
  searchSection: {
    marginTop: 15,
    paddingLeft: 15,
    paddingRight: 15,
    justifyContent: "center",
  },
  searchPallet: {
    paddingLeft: 10,
    paddingRight: 10,
    flexDirection: "row",
    borderRadius: 8,
    width: "100%",
    height: 30,
  },
  searchInput: {
    width: 245,
    height: 30,
  },
  searchIconArea: {
    width: 30,
    height: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  magnifyingIconStyle: {
    width: 24,
    height: 24,
    marginRight: -10,
  },
});
