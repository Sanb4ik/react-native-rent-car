import React, { useState } from "react";
import { StyleSheet, Text, View, Switch, StatusBar } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { makeDark, makeLight } from "../store/colorSlice";

const SettingsScreen = () => {
  const [isEnabled, setIsEnabled] = useState(false);

  const dispatch = useDispatch();
  const theme = useSelector((state) => state.theme.theme);

  const toggleSwitch = () => {
    isEnabled ? dispatch(makeLight()) : dispatch(makeDark());
    setIsEnabled(!isEnabled);
  };

  return (
    <View
      style={{ ...styles.container, backgroundColor: theme.backgroundColor }}
    >
      <StatusBar barStyle={isEnabled ? "light-content" : "dark-content"} />
      <View style={styles.optionContainer}>
        <Text
          style={[
            styles.optionText,
            isEnabled ? styles.whiteText : styles.blackText,
          ]}
        >
          Night theme
        </Text>
        <Switch onValueChange={toggleSwitch} value={isEnabled} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "start",
    alignItems: "center",
    paddingTop: 50,
  },
  optionContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 10,
    borderColor: "#e7e7e7",
    borderBottomWidth: 2,
    marginHorizontal: 20,
    width: "90%",
  },
  optionText: {
    fontSize: 20,
    color: "black",
  },
  whiteText: {
    color: "white",
  },
  blackText: {
    color: "black",
  },
});

export default SettingsScreen;
