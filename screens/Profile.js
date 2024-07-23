import React, { Component } from 'react';
import { View, Text, TouchableOpacity, ImageBackground, StyleSheet } from 'react-native';
import firebase from '../config';

export default class ProfileScreen extends Component {
  state = {
    userEmail: '', 
    };

  componentDidMount() {
    this.fetchEMail();
  }

  fetchEMail = () => {
    const currentUser = firebase.auth().currentUser;
    if (currentUser) {
      this.setState({ userEmail: currentUser.email });
    }
  };

  handleLogout = async () => {
    try {
      await firebase.auth().signOut();
      this.props.navigation.navigate('Login');
      console.log('User logged out successfully!');
    } catch (error) {
      console.error('Logout error:', error);
    }
  };

  render() {
    const { userEmail } = this.state;
    return (
      <View style={styles.container}>
       <ImageBackground
        source={require('../assets/deleteBG.png')}
        style={styles.imageBackgroundStyle}>
        <Text style={styles.userEmail}>Email: {userEmail}</Text>
        <TouchableOpacity style={styles.logoutButton} onPress={this.handleLogout}>
          <Text style={styles.logoutText}>Logout</Text>
        </TouchableOpacity>
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
   container: {
    flex: 1,
  },
  imageBackgroundStyle: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: "center",
  },
  userEmail: {
    fontSize: 18,
    marginBottom: 20,
  },
  logoutButton: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    borderRadius: 5,
    backgroundColor: "white",
    marginBottom: 30,
    padding: 10
  },
  logoutText: {
    color: 'blue',
    fontSize: 18,
    
  },
});
