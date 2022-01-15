import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, FlatList, StatusBar } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import CatDetails from "../components/CatDetails";
import { bgColor } from "../constants/colors";
export default function MyCats() {
  const [data, setData] = useState([]);
  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem("@storage_Key");
      if (value !== null) {
        console.log(JSON.parse(value).length);
        setData(JSON.parse(value));
      }
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    getData();
  });
  return (
    <View style={styles.container}>
      <FlatList
        removeClippedSubviews={true}
        onEndReachedThreshold={0}
        scrollEnabled={true}
        data={data}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => <CatDetails item={item} />}
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
  },
});
