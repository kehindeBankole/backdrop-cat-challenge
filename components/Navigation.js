import "react-native-gesture-handler";
import { StyleSheet, View, TouchableOpacity, Image, Text } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Entypo } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import Home from "../screens/Home";
import { FontAwesome } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import {
  Catsvg,
  LoveSvg,
  textColorActive,
  textColorInActive,
} from "../constants/colors";
import MyCats from "../screens/MyCats";
const Tab = createBottomTabNavigator();

function Article() {
  return (
    <View
      style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
    ></View>
  );
}

export function Navigation() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: "#246BFD",
        tabBarInactiveTintColor: "#65656B",
        title: false,
        tabBarStyle: { ...styles.tabBar },
      }}
    >
      <Tab.Screen
        name="discover"
        component={Home}
        options={{
          tabBarLabel: "Explore",
          tabBarIcon: ({ focused }) => (
            <View style={{ justifyContent: "center", alignItems: "center" }}>
              <Catsvg color={focused ? textColorActive : textColorInActive} />
              <Text
                style={{
                  ...styles.navName,
                  color: focused ? textColorActive : textColorInActive,
                }}
              >
                all cats
              </Text>
            </View>
          ),
          tabBarVisible: false,
          tabBarShowLabel: false,
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Home"
        component={MyCats}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ focused }) => (
            <View style={{ justifyContent: "center", alignItems: "center" }}>
              <LoveSvg
                color={focused ? textColorActive : textColorInActive}
                strokeColor={focused ? textColorActive : textColorInActive}
              />
              <Text
                style={{
                  ...styles.navName,
                  color: focused ? textColorActive : textColorInActive,
                }}
              >
                Cats I like
              </Text>
            </View>
          ),
          tabBarVisible: false,
          tabBarShowLabel: false,
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: "#ffffff",
    height: 107,
  },
  navName: {
    fontSize: 13,
    textAlign: "center",
    textTransform: "capitalize",
    marginTop: 7,
  },
});
