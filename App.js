import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Provider } from "react-redux";
import { store } from "./src/store/store";

import { Image, StyleSheet } from "react-native";
import HomeScreen from "./src/screens/HomeScreen";
import MapScreen from "./src/screens/MapScreen";
import SettingsScreen from "./src/screens/SettingsScreen";
import SavedScreen from "./src/screens/SavedScreen";
import InfoScreen from "./src/screens/InfoScreen";

const homeIcon = require("./src/assets/icons/home.png");
const compass = require("./src/assets/icons/compass.png");
const savedIcon = require("./src/assets/icons/saved.png");
const settingsIcon = require("./src/assets/icons/settings.png");

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function HomeStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Initial" component={HomeScreen} />
      <Stack.Screen name="Info" component={InfoScreen} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            headerShown: false,
            tabBarIcon: ({ focused }) => {
              let iconName;
              switch (route.name) {
                case "Home":
                  iconName = homeIcon;
                  break;
                case "Map":
                  iconName = compass;
                  break;
                case "Saved":
                  iconName = savedIcon;
                  break;
                case "Settings":
                  iconName = settingsIcon;
                  break;
              }

              return (
                <Image
                  source={iconName}
                  resizeMode="contain"
                  style={styles.footerIcon}
                />
              );
            },
            tabBarShowLabel: false,
            tabBarStyle: {
              position: "absolute",
              padding: 10,
              backgroundColor: "black",
              borderTopStartRadius: 40,
              borderTopEndRadius: 40,
            },
          })}
        >
          <Tab.Screen name="Home" component={HomeStack} />
          <Tab.Screen name="Map" component={MapScreen} />
          <Tab.Screen name="Saved" component={SavedScreen} />
          <Tab.Screen name="Settings" component={SettingsScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#",
    alignItems: "center",
    justifyContent: "center",
  },
  footerIcon: {
    width: 25,
    height: 25,
    tintColor: "white",
  },
});
