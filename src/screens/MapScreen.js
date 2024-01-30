import React from "react";
import { useSelector } from "react-redux";
import { Text, View } from "react-native";

const MapScreen = () => {
  const theme = useSelector((state) => state.theme.theme);

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: theme.backgroundColor,

        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text style={{ color: theme.textColor }}>Map Screen</Text>
    </View>
  );
};

export default MapScreen;
