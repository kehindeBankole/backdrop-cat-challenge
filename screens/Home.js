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
import { LoveSvg, textColorActive } from "../constants/colors";
import { useFetch } from "../hooks/useFetch";

export default function Home() {
  const [data] = useFetch("https://api.thecatapi.com/v1/breeds");
  console.log(data);
  return (
    <View style={styles.container}>
      <Text>All cats</Text>
      <FlatList
        removeClippedSubviews={true}
        onEndReachedThreshold={0}
        scrollEnabled={true}
        data={data}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <View style={styles.catContainer}>
            <View style={styles.catImageContainer}>
              <Image
                source={{
                  uri: item?.image?.url,
                }}
                style={{ width: 40, height: 40, borderRadius: 10 }}
              />
              <Text style={styles.catBreed}>{item?.name}</Text>
            </View>
            <TouchableOpacity style={{ alignSelf: "center" }}>
              <LoveSvg color="red" />
            </TouchableOpacity>
          </View>
        )}
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
  },
  catContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 50,
  },
  catImageContainer: {
    display: "flex",
    flexDirection: "row",
  },
  catBreed: {
    marginLeft: 15,
    fontSize: 16,
    alignSelf: "center",
    color: textColorActive,
  },
});
