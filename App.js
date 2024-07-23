// import * as React from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import DrawerNavigator from './navigation/DrawerNavigator';
// import { createStackNavigator } from '@react-navigation/stack';

// export default function App() {
//   return (
//     <NavigationContainer>
//      <DrawerNavigator/>
//     </NavigationContainer>
//   );
// }


// import React, { Component } from "react";
// import { Rajdhani_600SemiBold } from "@expo-google-fonts/rajdhani";
// import * as Font from "expo-font";

// import DrawerNavigator from './navigation/DrawerNavigator';
// import {createSwitchNavigator, createAppContainer} from "react-navigation"
// import { LogBox } from "react-native";
// import LoginScreen from "./screens/LoginScreen"

// LogBox.ignoreAllLogs();


// export default class App extends Component {
//   constructor() {
//     super();
//     this.state = {
//       fontLoaded: false
//     };
//   }

//   async loadFonts() {
//     await Font.loadAsync({
//       Rajdhani_600SemiBold: Rajdhani_600SemiBold
//     });
//     this.setState({ fontLoaded: true });
//   }

//   componentDidMount() {
//     this.loadFonts();
//   }

//   render() {
//     const { fontLoaded } = this.state;
//     if (fontLoaded) {
//       return <AppContainer />;
//     }
//     return null;
//   }
// }

// const AppSwitchNavigator = createSwitchNavigator({
//   login:{screen: LoginScreen},
//   drawer : {screen: DrawerNavigator}
// },{intialRouteName : login})

// const AppContainer = createAppContainer(AppSwitchNavigator)


// Import necessary modules
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import DrawerNavigator from './navigation/DrawerNavigator';
import LoginScreen from './screens/LoginScreen';
import SignUpScreen from './screens/Register'

// Create Stack Navigator
const Stack = createStackNavigator();

// Main App Component
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ headerShown: false }} // Optional: Hide header for Login screen
        />
        <Stack.Screen
          name="Home"
          component={DrawerNavigator}
          options={{ headerShown: false }} // Optional: Hide header for Home screen (DrawerNavigator)
        />
        <Stack.Screen 
        name="SignUpScreen" 
        component={SignUpScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
