import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import Home from "./Home";
import LoginScreen from "./login";
import FinalOrder from "./FinalOrder";
import Success from "./Success";
import Failure from "./Failure"


export default function RootNavigation() {
  const Stack = createStackNavigator();

  const screenOptions = {
    headerShown: false,
  };

  return (
   
      <NavigationContainer>
        <Stack.Navigator initialRouteName="LoginScreen" screenOptions={screenOptions}>
          <Stack.Screen name="LoginScreen" component={LoginScreen} />
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="FinalOrder" component={FinalOrder} />
          <Stack.Screen name="Success" component={Success} />
          <Stack.Screen name="Failure" component={Failure} />
        </Stack.Navigator>
      </NavigationContainer>
  );
}
