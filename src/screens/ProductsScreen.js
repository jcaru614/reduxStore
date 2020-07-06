import React from "react";
import {
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { books } from "../utils/Data";
import { useDispatch } from "react-redux";
import { ADD_TO_CART } from "../redux/reducer";




const BookScreen = () => {
 
  const dispatch = useDispatch();
  const addItemToCart = (item) =>
    dispatch({
      type: ADD_TO_CART,
      payload: item,
    });

  return (
    <View style={styles.container}>
      <FlatList
        testID="BooksScreen"
        data={books}
        keyExtractor={(item) => item.id.toString()}
        ItemSeparatorComponent={() => (
          <View
            style={{ borderBottomWidth: 1, borderBottomColor: "#a9a9a9" }}
          />
        )}
        renderItem={({ item }) => (
          <View style={styles.productsContainer}>
            <Image source={{ uri: item.imgUrl }} style={styles.thumbnail} />
            <View style={styles.productsMetaContainer}>
              <Text style={styles.textTitle} numberOfLines={1}>
                {item.title}
              </Text>
              <Text style={styles.textPrice}>Price: {item.price}</Text>
              <View style={styles.buttonContainer}>
                <TouchableOpacity
                  onPress={() => addItemToCart(item)}
                  style={styles.button}
                >
                  <Text style={styles.buttonText}>Add +</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        )}
      />

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  productsContainer: {
    flexDirection: "row",
    padding: 20,
  },
  thumbnail: {
    width: 150,
    height: 200,
  },
  productsMetaContainer: {
    padding: 5,
    paddingLeft: 50,
  },
  textTitle: {
    fontSize: 22,
    fontWeight: "400",
  },
  textPrice: {
    fontSize: 18,
    fontWeight: "200",
  },
  buttonContainer: {
    position: "absolute",
    top: 110,
    left: 50,
  },
  button: {
    borderRadius: 10,
    backgroundColor: "#03708F",
    padding: 10,
    width: 80
  },
  buttonText: {
    fontSize: 22,
    color: "#fff",
  },
});

export default BookScreen;
