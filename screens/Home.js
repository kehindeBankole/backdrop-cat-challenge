import React from "react";
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  TouchableOpacity,
  ScrollView,
  Image,
  FlatList,
} from "react-native";
import CatDetails from "../components/CatDetails";
import { bgColor } from "../constants/colors";
import { useFetch } from "../hooks/useFetch";

export default function Home() {
  const [data] = useFetch("https://api.thecatapi.com/v1/breeds");
  return (
    <View style={styles.container}>
      <Text style={styles.title}>All cats</Text>
      <FlatList
        removeClippedSubviews={true}
        onEndReachedThreshold={0}
        scrollEnabled={true}
        data={data}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => <CatDetails item={item} />}
        keyExtractor={(item) => item.id}
        style={{ flex: 1 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight + 50,
    paddingHorizontal: 25,
    backgroundColor: bgColor,
  },
  title: {
    marginBottom: 10,
    fontSize: 16,
    fontWeight: "600",
  },
});
