import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import TabNavigator from "./TabNavigator";
import Activities from "../screens/Activities";
import SignUpScreen from "../screens/Register"
const Stack = createStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Dashboard"
      screenOptions={{
        headerShown: false
      }}
    >
     <Stack.Screen name="Dashboard" component={TabNavigator} />
     <Stack.Screen name= "Activity" component={Activities} />
     <Stack.Screen name ="SignUp" component={SignUpScreen}/>
    </Stack.Navigator>
  );
};

export default StackNavigator;
