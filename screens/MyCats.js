import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  StatusBar,
  Image,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import CatCard from "../components/CatDetails";
import { bgColor, LoveSvg } from "../constants/colors";

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
  const { height, width } = Dimensions.get("window");
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cats I Like</Text>
      <FlatList
        removeClippedSubviews={true}
        onEndReachedThreshold={0}
        scrollEnabled={true}
        data={data}
        showsVerticalScrollIndicator={false}
        numColumns={2}
        columnWrapperStyle={styles.row}
        renderItem={({ item }) => (
          <View style={styles.catContainer}>
            <View style={styles.catImageContainer}>
              <Image
                source={{
                  uri: item?.image?.url,
                }}
                style={{ width: 150, height: 150, borderRadius: 10 }}
              />
              <View style={styles.likeBox}>
                <Text style={styles.catBreed}>{item.name}</Text>
                <TouchableOpacity style={{ alignSelf: "center" }}>
                  <LoveSvg color={"red"} strokeColor={"red"} size={15} />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        )}
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
    paddingHorizontal: 24,
    backgroundColor: bgColor,
  },
  catContainer: {
    margin: 5,
  },
  title: {
    marginBottom: 100,
  },
  likeBox: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 5,
  },
  catBreed: {
    fontSize: 16,
  },
  row: {
    flex: 1,
    justifyContent: "space-between",
  },
  title: {
    marginBottom: 10,
    fontSize: 16,
    fontWeight: "600",
  },
});
