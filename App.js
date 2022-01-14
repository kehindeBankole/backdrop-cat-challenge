import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { Navigation } from "./components/Navigation";
export default function App() {
  return (
    <NavigationContainer>
      {/* <View style={styles.container}> */}
      <StatusBar style="auto" />

      <Navigation />
      {/* </View> */}
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 100,
  },
});
