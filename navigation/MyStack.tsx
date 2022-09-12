import React, { FunctionComponent } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import WelcomeScreen from "./../screens/WelcomeScreen";
import LandingScreen from "./../screens/LandingScreen";
import Donation from "./../screens/Donation";

export type MyStackParamList = {
  WelcomeScreen: undefined;
};
const Stack = createStackNavigator<MyStackParamList>();

const MyStack: FunctionComponent = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} />
        <Stack.Screen name="LandingScreen" component={LandingScreen} />
        <Stack.Screen name="Donation" component={Donation} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MyStack;
