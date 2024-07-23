import React, { Component } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import firebase from "../config"; // Import initialized Firebase instance from config.js

export default class SignUpScreen extends Component {
  state = {
    email: '',
    password: '',
  };

  handleSignUp = async () => {
    const { email, password } = this.state;
    try {
      const response = await firebase.auth().createUserWithEmailAndPassword(email, password);
      console.log('User signed up successfully!', response.user);
      // Navigate to the login screen after successful sign-up
      this.props.navigation.navigate('Login');
    } catch (error) {
      console.error('Signup error:', error);
      // Handle sign-up errors, e.g., display an alert
      Alert.alert('Signup Failed', error.message);
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Sign Up Screen</Text>
        <TextInput
          style={styles.input}
          placeholder="Email"
          onChangeText={(email) => this.setState({ email })}
          value={this.state.email}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          onChangeText={(password) => this.setState({ password })}
          value={this.state.password}
          secureTextEntry
        />
        <TouchableOpacity style={styles.signupButton} onPress={this.handleSignUp}>
          <Text style={styles.signupButtonText}>Sign Up</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this.props.navigation.navigate('Login')}>
          <Text style={styles.loginLink}>Already have an account? Login</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ffffff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    height: 40,
    width: '80%',
    borderColor: '#cccccc',
    borderWidth: 1,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  signupButton: {
    backgroundColor: '#28a745',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginBottom: 20,
  },
  signupButtonText: {
    color: '#ffffff',
    fontSize: 18,
  },
  loginLink: {
    fontSize: 16,
    color: '#007bff',
  },
});

