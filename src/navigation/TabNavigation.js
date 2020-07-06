import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import StackNavigation from "./StackNavigation";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Settings from "../screens/Settings";
import User from "../screens/User";
import { Ionicons } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

const TabNavigation = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
         let iconName;
         if (route.name === 'StackNavigation') {
            iconName = focused
            ? 'ios-home'
            : 'ios-home';
          } else if (route.name === 'Settings') {
            iconName = focused
            ? 'ios-list-box'
            : 'ios-list';
          } else if (route.name === 'User') {
            iconName = focused
            ? 'ios-body'
            : 'ios-body';
          }
    
     return <Ionicons name={iconName} size={size} color={color}     />;
       },
    })}
tabBarOptions={{
    activeTintColor: '#9470D6',
    inactiveTintColor: 'gray',
    }}>
        <Tab.Screen name="StackNavigation" component={StackNavigation} />
        <Tab.Screen name="User" component={User} />
        <Tab.Screen name="Settings" component={Settings} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default TabNavigation;

