import React from 'react'
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  Image,
  StyleSheet
} from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useSelector, useDispatch } from 'react-redux'
import { REMOVE_FROM_CART } from '../redux/reducer'

const CartScreen = () => {

  const cartItems = useSelector(state => state)

  const dispatch = useDispatch()
  const removeItemFromCart = item => dispatch({
      type: REMOVE_FROM_CART,
      payload: item
    })

  return (
    <View
      style={{
        flex: 1
      }}>
      {cartItems.length !== 0 ? (
        <FlatList
          data={cartItems}
          keyExtractor={item => item.id.toString()}
          ItemSeparatorComponent={() => <View style={{ borderBottomWidth: 1, borderBottomColor: '#a9a9a9' }} />}
          renderItem={({ item }) => (
            <View style={styles.productItemContainer}>
              <Image source={{ uri: item.imgUrl }} style={styles.thumbnail} />
              <View style={styles.productItemMetaContainer}>
                <Text style={styles.textTitle} numberOfLines={1}>
                  {item.title}
                </Text>
                <Text style={styles.textPrice}>by {item.price}</Text>
                <View style={styles.buttonContainer}>
                  <TouchableOpacity
                    onPress={() => removeItemFromCart(item)}
                    style={styles.button}>
                    <Text style={styles.buttonText}>Remove -</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          )}
        />
      ) : (
        <View style={styles.emptyCartContainer}>
          <Text style={styles.emptyCartMessage}>Your cart is empty <MaterialCommunityIcons name="delete-empty" size={34} color="black" /></Text>
        </View>
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  productItemContainer: {
    flexDirection: 'row',
    padding: 20
  },
  thumbnail: {
    width: 150,
    height: 200
  },
  productItemMetaContainer: {
    padding: 5,
    paddingLeft: 50
  },
  textTitle: {
    fontSize: 22,
    fontWeight: '400'
  },
  textPrice: {
    fontSize: 18,
    fontWeight: '200'
  },
  buttonContainer: {
    position: 'absolute',
    top: 110,
    left: 50
  },
  button: {
    borderRadius: 8,
    backgroundColor: '#ff333390',
    padding: 5,
    width: 110
  },
  buttonText: {
    fontSize: 22,
    color: '#fff'
  },
  emptyCartContainer: {
    marginTop: 250,
    justifyContent: 'center',
    alignItems: 'center'
  },
  emptyCartMessage: {
    fontSize: 28
  }
})

export default CartScreen