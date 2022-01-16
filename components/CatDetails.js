import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Button,
} from "react-native";
import {
  LoveSvg,
  textColorActive,
  textColorInActive,
} from "../constants/colors";
import AsyncStorage from "@react-native-async-storage/async-storage";

const catArray = [];
export default function CatDetails({ item }) {
  const { name } = item;
  const [cat, setCat] = useState(null);
  //   const [catArray, setCatArray] = useState([]);

  async function handlePress(id) {
    setCat(id);
    catArray.push(id);

    // const storeData = async (value) => {
    try {
      await AsyncStorage.setItem("@storage_Key", JSON.stringify(catArray));
      console.log(catArray.length);
    } catch (e) {
      // saving error
      console.log(e);
    }
    //   }
  }
  return (
    <View>
      <View style={styles.catContainer}>
        <View style={styles.catImageContainer}>
          <Image
            source={{
              uri: item?.image?.url,
            }}
            style={{ width: 40, height: 40, borderRadius: 10 }}
          />
          <Text style={styles.catBreed}>{name}</Text>
        </View>
        <TouchableOpacity
          style={{ alignSelf: "center" }}
          onPress={() => {
            handlePress(item);
          }}
        >
          <LoveSvg
            color={cat === item ? "red" : "white"}
            strokeColor={cat === item ? "red" : textColorInActive}
            size={18}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
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
