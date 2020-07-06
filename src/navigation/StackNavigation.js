import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import ProductsScreen from "../screens/ProductsScreen";
import CartScreen from "../screens/CartScreen";
import ShoppingCartIcon from "../components/ShoppingCartIcon";


const Stack = createStackNavigator();

const StackNavigation = () => {
  return (
    <Stack.Navigator>
    <Stack.Screen
      name="Products"
      component={ProductsScreen}
      options={{ headerStyle: {
        backgroundColor: '#9470D6',
      }, headerRight: (props) => <ShoppingCartIcon {...props} /> }}
    />
    <Stack.Screen options={{ headerStyle: {
        backgroundColor: '#9470D6',
      }}} name="Cart" component={CartScreen} />
  </Stack.Navigator>
  );
};

export default StackNavigation;
