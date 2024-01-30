import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { useSelector } from "react-redux";

const SavedScreen = () => {
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
      <Text style={{ color: theme.textColor }}>Saved Screen</Text>
    </View>
  );
};

export default SavedScreen;
