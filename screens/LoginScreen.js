import React, { Component } from "react";
import { Alert, KeyboardAvoidingView, TextInput, TouchableOpacity, Text, StyleSheet, View, ImageBackground, Platform } from "react-native";
import "firebase/auth"; // Import Firebase authentication module
import SignUpScreen from '../screens/Register'; // Import SignUpScreen
import firebase from "../config"; // Import initialized Firebase instance from config.js

export default class LoginScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
  }

  handleLogin = (email, password) => {
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(() => {
        this.props.navigation.navigate("DrawerNavigator");
      })
      .catch((error) => {
        Alert.alert("Error", error.message);
      });
  };

  render() {
    const { email, password } = this.state;
    return (
      <View style={styles.viewContainer}>
        <ImageBackground
          source={require("../assets/toDoListBg.png")}
          style={styles.imageBackgroundStyle}
        >
          <KeyboardAvoidingView style={styles.container} behavior={Platform.OS === "ios" ? "padding" : "height"}>
            <View style={styles.lowerContainer}>
              <TextInput
                style={styles.textInput}
                onChangeText={(text) => {
                  this.setState({ email: text });
                }}
                placeholder={"Enter Email Address"}
                placeholderTextColor={"black"}
                autoFocus
              />
              <TextInput
                style={[styles.textInput, { marginTop: 20 }]}
                onChangeText={(text) => {
                  this.setState({ password: text });
                }}
                placeholder={"Enter Password"}
                placeholderTextColor={"black"}
                secureTextEntry
              />
              <TouchableOpacity
                style={[styles.button, { marginTop: 20 }]}
                onPress={() => {
                  this.handleLogin(email, password);
                  this.props.navigation.navigate("Home")
                }}
              >
                <Text style={styles.buttonText}> Login </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.button, { marginTop: 20 }]}
                onPress={() => {
                  this.props.navigation.navigate("SignUpScreen"); // Navigate to SignUpScreen
                }}
              >
                <Text style={styles.buttonText}> Sign Up </Text>
              </TouchableOpacity>
            </View>
          </KeyboardAvoidingView>
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  viewContainer: {
    flex: 1,
    marginTop: 20,
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "transparent", // Use transparent background to allow ImageBackground to show through
  },
  lowerContainer: {
    alignItems: "center"
  },
  textInput: {
    height: 40,
    width: 300,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 5,
    paddingLeft: 10,
    color: "black"
  },
  button: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    borderRadius: 5,
    backgroundColor: "white",
    marginBottom: 30,
    padding: 10
  },
  buttonText: {
    fontSize: 20,
    color: "#15193c",
    fontFamily: "Bubblegum-Sans"
  },
  imageBackgroundStyle: {
    flex: 1,
    width: "100%",
    resizeMode: "cover", // or "contain" as per your design needs
  },
});
