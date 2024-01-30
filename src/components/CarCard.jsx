import React from "react";
import { StyleSheet } from "react-native";
import { TouchableOpacity, View, Text, Image } from "react-native";
import { useSelector } from "react-redux";
import { getImage } from "../utils";

const CarCard = ({ item, navigation }) => {
  const theme = useSelector((state) => state.theme.theme);

  return (
    <TouchableOpacity
      style={{
        ...styles.element,
        backgroundColor: theme.secondBackgroundColor,
      }}
      key={item.id}
      activeOpacity={0.8}
      onPress={() => navigation.navigate("Info", { id: item.id })}
    >
      <View style={styles.infoArea}>
        <Text style={{ ...styles.infoTitle, color: theme.textColor }}>
          {item.make} {item.model}
        </Text>
        <Text style={styles.infoSub}>
          {item.type}-{item.transmission}
        </Text>
        <Text style={{ ...styles.infoPrice, color: theme.textColor }}>
          <Text style={{ ...styles.infoAmount, color: theme.textColor }}>
            ${item.price_per_day}{" "}
          </Text>
          /day
        </Text>
      </View>
      <View style={styles.imageArea}>
        <Image
          source={getImage(item.id)}
          resizeMode="contain"
          style={styles.vehicleImage}
        />
      </View>
    </TouchableOpacity>
  );
};

export default CarCard;

const styles = StyleSheet.create({
  element: {
    height: 100,
    padding: 15,
    borderRadius: 10,
    backgroundColor: "white",
    flexDirection: "row",
    marginBottom: 13,
  },
  infoArea: {
    flex: 1,
  },
  infoTitle: {
    fontSize: 15,
    fontWeight: "bold",
  },
  infoSub: {
    fontSize: 11,
    fontWeight: "600",
    color: "#696969",
  },
  infoPrice: {
    position: "absolute",
    bottom: 0,
    fontSize: 10,
    fontWeight: "bold",
  },
  infoAmount: {
    fontSize: 12,
    color: "black",
    fontWeight: "600",
  },
  imageArea: {
    flex: 1,
  },
  vehicleImage: {
    position: "absolute",
    top: -15,
    left: -33,
    width: "140%",
    height: "140%",
  },
});
